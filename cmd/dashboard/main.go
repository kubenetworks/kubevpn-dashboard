package main

import (
	"embed"
	"fmt"
	"io"
	"io/fs"
	"log"
	"net/http"
	"strings"

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
	http.HandleFunc("/api/", func(w http.ResponseWriter, r *http.Request) {
		msg := fmt.Sprintf("TODO: %s", r.URL)
		http.Error(w, msg, http.StatusNotImplemented)
	})

	log.Println("running: http://localhost:6800")
	go browser.Open("http://localhost:6800")

	log.Fatal(http.ListenAndServe("localhost:6800", nil))
}

func getStaticFS() fs.FS {
	staticFS, err := fs.Sub(staticFiles, "static")
	if err != nil {
		log.Fatal(err)
	}

	return staticFS
}
