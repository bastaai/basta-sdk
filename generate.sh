typescript () {
  echo "Generating SDK with TypeScript and Axios"

  dir="clients/typescript-axios/_generated"
  rm -rf "$dir" || true
  mkdir -p "$dir"

  #openapi-generator-cli generate -i swagger.yaml -g typescript-react-query -o ./$dir
  npx @hey-api/openapi-ts -i swagger.yaml -o $dir -c @hey-api/client-axios
}

typescript