package api

import (
	"reflect"
	"runtime"
	"strings"
)

func GetFuncName(i any) string {
	nameWithPackage := runtime.FuncForPC(reflect.ValueOf(i).Pointer()).Name()
	parts := strings.Split(nameWithPackage, ".")

	// Get the last part
	lastPart := parts[len(parts)-1]

	return lastPart
}

var API = map[string]any{
	GetFuncName(GetVersion): GetVersion,
}
