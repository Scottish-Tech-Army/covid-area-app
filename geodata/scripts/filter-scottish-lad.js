#!/usr/bin/env node

// Filters UK wide data to only return Scottish Local Authorities

const yargs = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 --input [filename]')
  .demandOption('input')
  .argv

const fs = require('fs');
let rawdata
try {
  rawdata = fs.readFileSync(yargs.input);
} catch (error) {
  console.error(`Unable to read file: ${yargs.input}`)
  process.exit(1)
}
let jsonData = JSON.parse(rawdata);

if (!jsonData.hasOwnProperty('features')) {
  console.error('Missing features property, are you sure this is a GeoJSON file?')
  process.exit(1)
}

const features = jsonData.features

const scottishFeatures = features.filter(feature => feature['properties']['lad17cd'].startsWith('S'))

const output = {
  type: "FeatureCollection",
  features: scottishFeatures
}

let data = JSON.stringify(output);
// create dist if not exist
const fileName = './dist/scottish-lad.geojson'
try {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync(process.cwd() + '/dist');
  }
  fs.writeFileSync(fileName, data);
} catch (error) {
  console.error(`Unable to write file ${fileName}`)
  process.exit(1)
}