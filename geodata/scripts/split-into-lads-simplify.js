#!/usr/bin/env node

// Split out features into separate local authority areas, some areas will have more than one feature

const simplifyGeoJSON = require('simplify-geojson')
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

const GEOJSON_TOLERANCE = 0.01; // common tolerance for all features

if (!jsonData.hasOwnProperty('features')) {
  console.error('Missing features property, are you sure this is a GeoJSON file?')
  process.exit(1)
}

const features = jsonData.features

const filterLads = features.reduce((acc, feature, index) => {
  const polyLen =  feature.geometry.coordinates[0].length;
  const simpleFeature = simplifyGeoJSON(feature, GEOJSON_TOLERANCE);

  // delete small stuff likely small islands or edges
  if (simpleFeature.geometry.coordinates[0].length <= 10) {
    return acc
  }

  // add id to properties based on name, local authority code and index
  const id = safeName(simpleFeature.properties.lad17nm)
  simpleFeature.properties['id'] = `${id}_${simpleFeature.properties.lad17cd}-${index}`

  // add unique areas to own array
  if (!acc[id]) {
    acc[id] = []
  }
  acc[id].push(simpleFeature)
  return acc
},{})

function safeName(name) {
  const filter =
    name.replace(/\s/g, '-')
      .replace(',','')
      .replace('&','')
      .replace('--','-')

  return filter.toLowerCase()
}

const entries = Object.entries(filterLads)

try {
  if (!fs.existsSync('dist/lads')) {
    fs.mkdirSync(process.cwd() + '/dist/lads', { recursive: true });
  }
} catch (error) {
  console.error('Unable to create output directory!')
  process.exit(1)
}

entries.forEach(entry => {
  const [filename, features] = entry
  const output = {
    type: "FeatureCollection",
    features: features
  }
  let data = JSON.stringify(output);
  try {
    fs.writeFileSync(`./dist/lads/${filename}`, data);
  } catch (error) {
    console.error(`Unable to write file dist/lads/${filename}`)
    process.exit(1)
  }
})

