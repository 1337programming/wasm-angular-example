# WebAssembly and Angular Example

## Installation
First, please install Emscripten. You can follow the instructions to install Emscripten on their website: http://kripken.github.io/emscripten-site/docs/getting_started/downloads.html#sdk-download-and-install

You will then need to run `npm install`.

## Build
To build the application, you can run `npm run wasm`, which will generate the WebAssembly code.
Afterward, run `ng build` to build the Angular application with the WebAssembly code.

## Developing
The development pattern is similar to the build, except you will need to run `ng serve` instead.
