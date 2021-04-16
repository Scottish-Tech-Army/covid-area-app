import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import MapView, { Geojson, PROVIDER_GOOGLE } from 'react-native-maps'
import { useWindowDimensions } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'
import edinburgh_geojson from '../../geodata/dist/lads/city-of-edinburgh.json'

const Map = styled(MapView)`
  background-color: red;
  height: ${(props) => props.height}px;
`

const FullScreen = styled.View`
  flex: 1;
`
// TODO: Pass the area so we can show the correct Geojson
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
    <FullScreen>
      <Map
        provider={PROVIDER_GOOGLE}
        height={height - headerHeight}
        region={{
          latitude: edinburgh_geojson.features[0].geometry.coordinates[0][0][1],
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
    </FullScreen>
  )
}

export default MapScreen
