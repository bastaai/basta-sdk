typescript () {
  echo "Generating SDK with TypeScript and Axios"

  dir="clients/typescript-axios/_generated"
  rm -rf "$dir" || true
  mkdir -p "$dir"

  openapi-generator-cli generate -i swagger.yaml -g typescript-axios -o ./$dir
}

typescript