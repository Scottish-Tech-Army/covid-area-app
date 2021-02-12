

var fs = require('fs');
let rawdata = fs.readFileSync('uk-local-authorities.geojson');
let jsonData = JSON.parse(rawdata);

const features = jsonData.features

const scottishFeatures = features.filter(feature => feature['properties']['geo_code'].startsWith('S'))

const output = {
  type: "FeatureCollection",
  features: scottishFeatures
}

let data = JSON.stringify(output);
fs.writeFileSync('scottish-authorities.json', data);