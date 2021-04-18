import aberdeenCityGeoJSON from './data/lads/aberdeen-city.json'
import aberdeenshireGeoJSON from './data/lads/aberdeenshire.json'
import angusGeoJSON from './data/lads/angus.json'
import argyllAndButeGeoJSON from './data/lads/argyll-and-bute.json'
import cityOfEdinburghGeoJSON from './data/lads/city-of-edinburgh.json'
import clackmannanshireGeoJSON from './data/lads/clackmannanshire.json'
import dumfriesAndGallowayGeoJSON from './data/lads/dumfries-and-galloway.json'
import dundeeGeoJSON from './data/lads/dundee-city.json'
import eastAyrshireGeoJSON from './data/lads/east-ayrshire.json'
import eastDunbartonshireGeoJSON from './data/lads/east-dunbartonshire.json'
import eastLothianGeoJSON from './data/lads/east-lothian.json'
import eastRenfrewshireGeoJSON from './data/lads/east-renfrewshire.json'
import falkirkGeoJSON from './data/lads/falkirk.json'
import fifeGeoJSON from './data/lads/fife.json'
import glasgowCityGeoJSON from './data/lads/glasgow-city.json'
import highlandGeoJSON from './data/lads/highland.json'
import inverclydeGeoJSON from './data/lads/inverclyde.json'
import midlothianGeoJSON from './data/lads/midlothian.json'
import morayGeoJSON from './data/lads/moray.json'
import northAyrshireGeoJSON from './data/lads/north-ayrshire.json'
import northLanakshireGeoJSON from './data/lads/north-lanarkshire.json'
import orkneyIslandsGeoJSON from './data/lads/orkney-islands.json'
import perthAndKinrossGeoJSON from './data/lads/perth-and-kinross.json'
import renfrewshireGeoJSON from './data/lads/renfrewshire.json'
import scottishBordersGeoJSON from './data/lads/scottish-borders.json'
import shetlandIslandsGeoJSON from './data/lads/shetland-isles.json'
import southAyrshireGeoJSON from './data/lads/south-ayrshire.json'
import southLanarkshireGeoJSON from './data/lads/south-lanarkshire.json'
import stirlingGeoJSON from './data/lads/stirling.json'
import westDunbartonshireGeoJSON from './data/lads/west-dunbartonshire.json'
import westLothianGeoJSON from './data/lads/west-lothian.json'
import westernIslesGeoJSON from './data/lads/western-isles.json'

export const FONTS = {
  primary: 'BebasNeue_400Regular',
}

export const FONT_SIZE = {
  large: '48px',
  medium: '36px',
  small: '20px',
}

export const COLORS = {
  primaryBlack: 'rgba(10,10,10,1)',
  primaryWhite: 'rgba(255,255,255,1)',
}

export const LOCAL_AUTHORITY_DISTRICTS = [
  {
    areaName: 'Aberdeen City',
    areaCode: 'S12000033',
    geojson: aberdeenCityGeoJSON,
    mapConfig: {
      latitude: aberdeenCityGeoJSON.features[0].properties.lat,
      longitude: aberdeenCityGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Aberdeenshire',
    areaCode: 'S12000034',
    geojson: aberdeenshireGeoJSON,
    mapConfig: {
      latitude: aberdeenshireGeoJSON.features[0].properties.lat,
      longitude: aberdeenshireGeoJSON.features[0].properties.long,
      latitudeDelta: 2.4,
      longitudeDelta: 0,
    },
  },
  { areaName: 'Angus', areaCode: 'S12000041', geojson: angusGeoJSON },
  {
    areaName: 'Argyll and Bute',
    areaCode: 'S12000035',
    geojson: argyllAndButeGeoJSON,
    mapConfig: {
      latitude: argyllAndButeGeoJSON.features[0].properties.lat,
      longitude: argyllAndButeGeoJSON.features[0].properties.long,
      latitudeDelta: 4,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'City of Edinburgh',
    areaCode: 'S12000036',
    geojson: cityOfEdinburghGeoJSON,
    mapConfig: {
      latitude: cityOfEdinburghGeoJSON.features[0].properties.lat,
      longitude: cityOfEdinburghGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Clackmannanshire',
    areaCode: 'S12000005',
    geojson: clackmannanshireGeoJSON,
    mapConfig: {
      latitude: clackmannanshireGeoJSON.features[0].properties.lat,
      longitude: clackmannanshireGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Dumfries and Galloway',
    areaCode: 'S12000006',
    geojson: dumfriesAndGallowayGeoJSON,
    mapConfig: {
      latitude: dumfriesAndGallowayGeoJSON.features[0].properties.lat,
      longitude: dumfriesAndGallowayGeoJSON.features[0].properties.long,
      latitudeDelta: 3,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Dundee',
    areaCode: 'S12000042',
    geojson: dundeeGeoJSON,
    mapConfig: {
      latitude: dundeeGeoJSON.features[0].properties.lat,
      longitude: dundeeGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'East Ayrshire',
    areaCode: 'S12000008',
    geojson: eastAyrshireGeoJSON,
    mapConfig: {
      latitude: eastAyrshireGeoJSON.features[0].properties.lat,
      longitude: eastAyrshireGeoJSON.features[0].properties.long,
      latitudeDelta: 1,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'East Dunbartonshire',
    areaCode: 'S12000045',
    geojson: eastDunbartonshireGeoJSON,
    mapConfig: {
      latitude: eastDunbartonshireGeoJSON.features[0].properties.lat,
      longitude: eastDunbartonshireGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'East Lothian',
    areaCode: 'S12000010',
    geojson: eastLothianGeoJSON, // stroke colour missing??
    mapConfig: {
      latitude: eastLothianGeoJSON.features[0].properties.lat,
      longitude: eastLothianGeoJSON.features[0].properties.long,
      latitudeDelta: 1,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'East Renfrewshire',
    areaCode: 'S12000011',
    geojson: eastRenfrewshireGeoJSON,
    mapConfig: {
      latitude: eastRenfrewshireGeoJSON.features[0].properties.lat,
      longitude: eastRenfrewshireGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Falkirk',
    areaCode: 'S12000014',
    geojson: falkirkGeoJSON,
    mapConfig: {
      latitude: falkirkGeoJSON.features[0].properties.lat,
      longitude: falkirkGeoJSON.features[0].properties.long,
      latitudeDelta: 0.8,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Fife',
    areaCode: 'S12000015',
    geojson: fifeGeoJSON,
    mapConfig: {
      latitude: fifeGeoJSON.features[0].properties.lat,
      longitude: fifeGeoJSON.features[0].properties.long,
      latitudeDelta: 2,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Glasgow City',
    areaCode: 'S12000046',
    geojson: glasgowCityGeoJSON,
    mapConfig: {
      latitude: glasgowCityGeoJSON.features[0].properties.lat,
      longitude: glasgowCityGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Highland',
    areaCode: 'S12000017',
    geojson: highlandGeoJSON,
    mapConfig: {
      latitude: highlandGeoJSON.features[0].properties.lat,
      longitude: highlandGeoJSON.features[0].properties.long,
      latitudeDelta: 5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Inverclyde',
    areaCode: 'S12000018',
    geojson: inverclydeGeoJSON,
    mapConfig: {
      latitude: inverclydeGeoJSON.features[0].properties.lat,
      longitude: inverclydeGeoJSON.features[0].properties.long,
      latitudeDelta: 0.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Midlothian',
    areaCode: 'S12000019',
    geojson: midlothianGeoJSON,
    mapConfig: {
      latitude: midlothianGeoJSON.features[0].properties.lat,
      longitude: midlothianGeoJSON.features[0].properties.long,
      latitudeDelta: 0.7,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Moray',
    areaCode: 'S12000020',
    geojson: morayGeoJSON,
    mapConfig: {
      latitude: morayGeoJSON.features[0].properties.lat,
      longitude: morayGeoJSON.features[0].properties.long,
      latitudeDelta: 1.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Na h-Eileanan Siar',
    areaCode: 'S12000013',
    geojson: westernIslesGeoJSON,
    mapConfig: {
      latitude: westernIslesGeoJSON.features[0].properties.lat,
      longitude: westernIslesGeoJSON.features[0].properties.long,
      latitudeDelta: 3,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'North Ayrshire',
    areaCode: 'S12000021',
    geojson: northAyrshireGeoJSON,
    mapConfig: {
      latitude: northAyrshireGeoJSON.features[0].properties.lat,
      longitude: northAyrshireGeoJSON.features[0].properties.long,
      latitudeDelta: 2,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'North Lanarkshire',
    areaCode: 'S12000044',
    geojson: northLanakshireGeoJSON,
    mapConfig: {
      latitude: northLanakshireGeoJSON.features[0].properties.lat,
      longitude: northLanakshireGeoJSON.features[0].properties.long,
      latitudeDelta: 0.7,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Orkney Islands',
    areaCode: 'S12000023',
    geojson: orkneyIslandsGeoJSON,
    mapConfig: {
      latitude: orkneyIslandsGeoJSON.features[0].properties.lat,
      longitude: orkneyIslandsGeoJSON.features[0].properties.long,
      latitudeDelta: 3,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Perth and Kinross',
    areaCode: 'S12000024',
    geojson: perthAndKinrossGeoJSON,
    mapConfig: {
      latitude: perthAndKinrossGeoJSON.features[0].properties.lat,
      longitude: perthAndKinrossGeoJSON.features[0].properties.long,
      latitudeDelta: 2,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Renfrewshire',
    areaCode: 'S12000038',
    geojson: renfrewshireGeoJSON,
    mapConfig: {
      latitude: renfrewshireGeoJSON.features[0].properties.lat,
      longitude: renfrewshireGeoJSON.features[0].properties.long,
      latitudeDelta: 0.6,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Scottish Borders',
    areaCode: 'S12000026',
    geojson: scottishBordersGeoJSON,
    mapConfig: {
      latitude: scottishBordersGeoJSON.features[0].properties.lat,
      longitude: scottishBordersGeoJSON.features[0].properties.long,
      latitudeDelta: 2,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Shetland Islands',
    areaCode: 'S12000027',
    geojson: shetlandIslandsGeoJSON,
    mapConfig: {
      latitude: shetlandIslandsGeoJSON.features[0].properties.lat,
      longitude: shetlandIslandsGeoJSON.features[0].properties.long,
      latitudeDelta: 3,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'South Ayrshire',
    areaCode: 'S12000028',
    geojson: southAyrshireGeoJSON,
    mapConfig: {
      latitude: southAyrshireGeoJSON.features[0].properties.lat,
      longitude: southAyrshireGeoJSON.features[0].properties.long,
      latitudeDelta: 1,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'South Lanarkshire',
    areaCode: 'S12000029',
    geojson: southLanarkshireGeoJSON,
    mapConfig: {
      latitude: southLanarkshireGeoJSON.features[0].properties.lat,
      longitude: southLanarkshireGeoJSON.features[0].properties.long,
      latitudeDelta: 1.3,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'Stirling',
    areaCode: 'S12000030',
    geojson: stirlingGeoJSON,
    mapConfig: {
      latitude: stirlingGeoJSON.features[0].properties.lat,
      longitude: stirlingGeoJSON.features[0].properties.long,
      latitudeDelta: 1.5,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'West Dunbartonshire',
    areaCode: 'S12000039',
    geojson: westDunbartonshireGeoJSON,
    mapConfig: {
      latitude: westDunbartonshireGeoJSON.features[0].properties.lat,
      longitude: westDunbartonshireGeoJSON.features[0].properties.long,
      latitudeDelta: 0.6,
      longitudeDelta: 0,
    },
  },
  {
    areaName: 'West Lothian',
    areaCode: 'S12000040',
    geojson: westLothianGeoJSON,
    mapConfig: {
      latitude: westLothianGeoJSON.features[0].properties.lat,
      longitude: westLothianGeoJSON.features[0].properties.long,
      latitudeDelta: 0.7,
      longitudeDelta: 0,
    },
  },
]

export const MOCK_DATA = {
  ALERT_REQUEST: {
    date: '2021-01-30',
    areaType: 'ltla',
    areaCode: 'S12000036',
    areaName: 'City of Edinburgh',
    alertLevel: 5,
    alertLevelName: 'Stay at Home',
    alertLevelUrl:
      'https://www.gov.scot/publications/coronavirus-covid-19-stay-at-home-guidance/',
    alertLevelValue: 5,
  },
}
