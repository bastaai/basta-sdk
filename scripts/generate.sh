typescript () {
  echo "Generating SDK with TypeScript and Axios"

  dir="clients/typescript"
  rm -rf "$dir" || true
  mkdir -p "$dir"

  openapi-generator-cli generate -i ../swagger.yaml -g typescript-axios -o ./sdk
}

typescript