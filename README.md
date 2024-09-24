# Build a standard idea

## Prototype

`cd app`
`npm install`
`npx @11ty/eleventy --serve` to run locally on hot reloading server

## Get use cases

Reads the HACT use case files provided in the data directory and extracts the fields and codelists for each into our templates.json file. This is then written to the 2 places the application needs it. 

`cd helpers/get-use-cases-script`
`npm install`
`node index.js`
