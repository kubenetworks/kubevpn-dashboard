package api

import (
	"io"
	"net/http"
	"os"

	"github.com/wencaiwulue/kubevpn/v2/pkg/config"
)

func GetKubevpnConfig(w http.ResponseWriter, r *http.Request) {
	path := config.GetConfigFilePath()
	content, err := os.ReadFile(path)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return

	}

	w.Write(content)
}

func UpdateKubevpnConfig(w http.ResponseWriter, r *http.Request) {
	content, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	path := config.GetConfigFilePath()
	err = os.WriteFile(path, content, 0755)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Write(content)
}
