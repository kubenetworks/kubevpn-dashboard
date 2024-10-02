package main

import (
	"embed"
	"fmt"
	"io"
	"io/fs"
	"log"
	"net/http"
	"net/url"
	"strings"

	"example.com/dashboard/pkg/api"
	"example.com/dashboard/pkg/browser"
)

//go:embed static/*
var staticFiles embed.FS

func main() {
	static := getStaticFS()
	indexHtml, err := static.Open("index.html")
	if err != nil {
		log.Fatal(err)
	}

	indexHtmlContent, err := io.ReadAll(indexHtml)
	if err != nil {
		log.Fatal(err)
	}

	err = indexHtml.Close()
	if err != nil {
		log.Fatal(err)
	}

	fileServer := http.FileServerFS(static)

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		if r.URL.Path == "/" {
			w.Write(indexHtmlContent)
			return
		}

		if _, err := fs.Stat(static, strings.TrimPrefix(r.URL.Path, "/")); err != nil {
			log.Println("not a static file:", r.URL.Path)
			w.Write(indexHtmlContent)
			return
		}

		fileServer.ServeHTTP(w, r)
	})

	// api
	http.HandleFunc("/api/dashboard", func(w http.ResponseWriter, r *http.Request) {
		queryMap, err := url.ParseQuery(r.URL.RawQuery)
		if err != nil {
			msg := fmt.Sprintf("failed to parse query: %s: %s", r.URL, err)
			log.Println(msg)
			http.Error(w, msg, http.StatusBadRequest)
			return
		}

		actionName := queryMap.Get("Action")
		if actionName == "" {
			msg := fmt.Sprintf(`a query param of "Action" required: %s`, r.URL)
			log.Println(msg)
			http.Error(w, msg, http.StatusBadRequest)
			return
		}

		f, ok := api.API[actionName]
		if !ok {
			msg := fmt.Sprintf("not implemented: %s", r.URL)
			log.Println(msg)
			http.Error(w, msg, http.StatusNotImplemented)
			return
		}

		curApiFunc, ok := f.(func(w http.ResponseWriter, r *http.Request))
		if !ok {
			msg := fmt.Sprintf("failed to type assertion api func: %s", api.GetFuncName(f))
			http.Error(w, msg, http.StatusInternalServerError)
			log.Fatalln(msg)
		}

		curApiFunc(w, r)
	})

	log.Println("running: http://localhost:6800")
	go browser.Open("http://localhost:6800")

	log.Println(http.ListenAndServe("localhost:6800", nil))
}

func getStaticFS() fs.FS {
	staticFS, err := fs.Sub(staticFiles, "static")
	if err != nil {
		log.Fatal(err)
	}

	return staticFS
}
