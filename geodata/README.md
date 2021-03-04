# Converting GEOJSON

AWS Location services needs its GeoJSON data in a specific format.
You must ensure the following:
* Only use `Polygon` for coordinates
* Only 1000 vertices per feature
* Polygons must be counter clockwise

## Data Source
Using data from ONS Open Geography Portal

We are using the super generalised version described here:
[Local Authority Districts (December 2017) Super Generalised Clipped Boundaries in Great Britain
](https://geoportal.statistics.gov.uk/datasets/local-authority-districts-december-2017-super-generalised-clipped-boundaries-in-great-britain)

Available at [OpenData ARCGIS](https://opendata.arcgis.com/datasets/ae90afc385c04d869bc8cf8890bd1bcd_3.geojson).
You will find a copy of this file under `src` folder.

To view any GeoJSON file on a map please use https://geojson.io/

## Converting 
The folder `geodata/scripts` contains all the code needed to process the source file.

### Filter Scottish Local Authority Districts
Creates a file with only scottish LADs

```bash
node scripts/filter-scottish-lad.js
```

### Filter out some Local Authority Districts
The Western Isles, Orkney and Shetland Islands contain a lot of data due to the complex geography.
As we don't want this precision these are filtered out.
You can update variable `filterCodes` to change what gets filtered.

```bash
node scripts/filter-out-lads.js
```

Instead we use the manually created files available under `geodata/manual-fences`.

### Split into separate Local Authority Districts
This script will create a file for each area (expect the main islands as they were removed).
It also runs a simplify function over each one to reduce the precision, this helps us fit into AWS requirements.

```bash
node scripts/split-into-lads-simplify.js
```

There is a config variable `GEOJSON_TOLERANCE` that can be adjusted. Currently it is set to 1° ~ 69 miles.

### Counting Coordinates
Tool that allows you to count the number of vertices in each feature, useful when trying to simplify

```js
node scripts/count-coords.js --input <filename>
```

## Known Issues
Due to the simplifying one of the islands in the `highland` LAD becomes corrupted and wont import,
it wont really affect much in the grand scheme but it requries to be manually edited.

The file can be edited at https://geojson.io/ and it affects the last item when looking at Table view.
To fix the issue correct the overlap by editing the layers and saving, then copying from the JSON tab back to
your local file ready for importing.
