package api

import "net/http"

func GetVersion(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("v1.0"))
}
