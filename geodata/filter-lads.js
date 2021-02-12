

var fs = require('fs');
let rawdata = fs.readFileSync('./scottish-authorities.json');
let jsonData = JSON.parse(rawdata);

const features = jsonData.features

const filterCodes = [
  'S12000013', // Western Isles
  'S12000023', // Orkney Islands
  'S12000027', // Shetland Islands
]

const ladsWithoutIslands = features.filter(feature => !filterCodes.includes(feature['properties']['geo_code']))

const output = {
  type: "FeatureCollection",
  features: ladsWithoutIslands
}

let data = JSON.stringify(output);
fs.writeFileSync('scottish-authorities-no-islands.json', data);