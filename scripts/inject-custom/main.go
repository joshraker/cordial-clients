package main

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

const customCodeHookString = "CUSTOM_CODE_HOOK"

func main() {
	args := os.Args[1:]

	if len(args) != 2 {
		fmt.Println("Usage: go run inject-custom/main.go <template-dir> <client-dir>")
		fmt.Printf(
			"Inserts the contents of the files in the template dir to the same files in the client dir at the %s comment.\n",
			customCodeHookString,
		)
		os.Exit(1)
	}

	templateDir := args[0]
	clientDir := args[1]

	if _, err := os.Stat(templateDir); err != nil {
		fmt.Printf("%s does not exist, skipping...\n", templateDir)
		return
	}

	err := filepath.Walk(templateDir, func(path string, info os.FileInfo, err error) error {
		if info.IsDir() {
			return nil
		}

		relPath := strings.Trim(strings.Replace(path, templateDir, "", 1), "/")
		destPath := filepath.Join(clientDir, relPath)
		fmt.Printf("%s => %s\n", path, destPath)

		customCode, err := os.ReadFile(path)
		if err != nil {
			return err
		}

		destFile, err := os.ReadFile(destPath)
		if err != nil {
			return err
		}

		// TODO: Check for the hook and error(?) if not found and match indent of the comment
		result := regexp.MustCompile(fmt.Sprintf(".*%s.*", customCodeHookString)).ReplaceAll(destFile, customCode)

		return os.WriteFile(destPath, result, 0644)
	})
	if err != nil {
		fmt.Printf("Error processing files: %v\n", err)
	}
}
