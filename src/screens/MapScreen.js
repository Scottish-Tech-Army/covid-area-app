import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import MapView, { Geojson, PROVIDER_GOOGLE } from 'react-native-maps'
import Screen from '../components/Screen'
import { useWindowDimensions } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'
import edinburgh_geojson from '../../geodata/dist/lads/city-of-edinburgh.json'

const MapBox = styled.View`
  border: 3px solid darkslategrey;
  margin-top: 20px;
`

const Map = styled(MapView)`
  background-color: red;
  height: ${(props) => props.height}px;
`

function MapScreen(props) {
  const { navigation, route } = props
  const { height } = useWindowDimensions()
  const headerHeight = useHeaderHeight()

  useEffect(() => {
    navigation.setOptions({
      title: route?.params?.areaName || 'Your area',
    })
  }, [])

  return (
    <Screen>
      <MapBox>
        <Map
          provider={PROVIDER_GOOGLE}
          height={height - headerHeight - 40}
          region={{
            latitude:
              edinburgh_geojson.features[0].geometry.coordinates[0][0][1],
            latitudeDelta: 1,
            longitude:
              edinburgh_geojson.features[0].geometry.coordinates[0][0][0],
            longitudeDelta: 1,
          }}
        >
          <Geojson
            geojson={edinburgh_geojson}
            fillColor="rgba(0,0,255,0.1)"
            strokeColor="#000"
            strokeWidth={2}
          />
        </Map>
      </MapBox>
    </Screen>
  )
}

export default MapScreen
