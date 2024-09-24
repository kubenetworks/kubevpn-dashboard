package browser

import (
	"fmt"
	"log"
	"os/exec"
	"runtime"
)

// Open opens the default web browser to the given URL based on the OS
func Open(url string) {
	var err error

	switch runtime.GOOS {
	case "linux":
		// On Linux, use the "xdg-open" command to open the browser
		err = exec.Command("xdg-open", url).Start()
	case "windows":
		// On Windows, use "rundll32" to open the default browser
		err = exec.Command("rundll32", "url.dll,FileProtocolHandler", url).Start()
	case "darwin": // macOS
		// On macOS, use the "open" command to open the default browser
		err = exec.Command("open", url).Start()
	default:
		err = fmt.Errorf("unsupported operating system")
	}

	if err != nil {
		log.Printf("failed to open browser: %v\n", err)
	}
}
