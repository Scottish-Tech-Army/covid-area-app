#!/usr/bin/env node
const yargs = require('yargs/yargs')(process.argv.slice(2))
  .usage('Usage: $0 --input [filename]')
  .demandOption('input')
  .argv

const fs = require('fs');
let rawdata
try {
  rawdata = fs.readFileSync(yargs.input);
} catch (error) {
  console.log('Unable to read file: ', yargs.input)
  process.exit(1)
}
let jsonData = JSON.parse(rawdata);

if (!jsonData.hasOwnProperty('features')) {
  exit('Incorrect file type, please use GeoJSON')
}

const length = jsonData.features.reduce((acc, feature, index) => {
  const len = feature.geometry.coordinates[0].length;
  console.log(`Feature ${index+1} Coordinates length=`, len);

  return acc + len;
}, 0)


console.log('TOTAL=', length)