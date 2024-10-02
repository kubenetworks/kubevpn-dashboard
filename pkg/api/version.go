package api

import (
	"context"
	"net/http"

	"github.com/wencaiwulue/kubevpn/v2/pkg/daemon"
	"github.com/wencaiwulue/kubevpn/v2/pkg/daemon/rpc"
)

func GetVersion(w http.ResponseWriter, r *http.Request) {
	ver := getDaemonVersion()
	w.Write([]byte(ver))
}

func getDaemonVersion() string {
	cli := daemon.GetClient(false)
	if cli != nil {
		version, err := cli.Version(context.Background(), &rpc.VersionRequest{})
		if err == nil {
			return version.Version
		}
	}
	return "unknown"
}
