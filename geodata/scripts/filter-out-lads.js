#!/usr/bin/env node

// Removes the islands data as this is too complex for our needs
// We instead use the manual versions under `geodata/manual-fences`

const yargs = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 --input [filename]')
  .demandOption('input').argv

const fs = require('fs')
let rawdata
try {
  rawdata = fs.readFileSync(yargs.input)
} catch (error) {
  console.error(`Unable to read file: ${yargs.input}`)
  process.exit(1)
}
let jsonData = JSON.parse(rawdata)

if (!jsonData.hasOwnProperty('features')) {
  console.error(
    'Missing features property, are you sure this is a GeoJSON file?'
  )
  process.exit(1)
}

const features = jsonData.features

const filterCodes = [
  'S12000013', // Western Isles
  'S12000023', // Orkney Islands
  'S12000027', // Shetland Islands
]

const ladsWithoutIslands = features.filter(
  (feature) => !filterCodes.includes(feature['properties']['lad17cd'])
)

const output = {
  type: 'FeatureCollection',
  features: ladsWithoutIslands,
}

let data = JSON.stringify(output)
// create dist if not exist
const fileName = './dist/scottish-lad-without-main-islands.geojson'
try {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync(process.cwd() + '/dist')
  }
  fs.writeFileSync(fileName, data)
} catch (error) {
  console.error(`Unable to write file ${fileName}`)
  process.exit(1)
}
