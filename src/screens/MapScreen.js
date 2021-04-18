import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import MapView, { Geojson, PROVIDER_GOOGLE } from 'react-native-maps'
import { useWindowDimensions } from 'react-native'
import { useHeaderHeight } from '@react-navigation/stack'
import { LOCAL_AUTHORITY_DISTRICTS } from '../app.config'

const Map = styled(MapView)`
  background-color: red;
  height: ${(props) => props.height}px;
`

const FullScreen = styled.View`
  flex: 1;
`

function getMapInfo(areaCode) {
  const { geojson, mapConfig } = LOCAL_AUTHORITY_DISTRICTS.find(
    (item) => item.areaCode === areaCode
  )

  return {
    geojson,
    mapConfig,
  }
}

function MapScreen(props) {
  const { navigation, route } = props
  const { height } = useWindowDimensions()
  const headerHeight = useHeaderHeight()
  const areaCode = route?.params?.areaCode

  useEffect(() => {
    navigation.setOptions({
      title: route?.params?.areaName || 'Your area',
    })
  }, [])

  const { geojson, mapConfig } = getMapInfo(areaCode)

  return (
    <FullScreen>
      <Map
        provider={PROVIDER_GOOGLE}
        height={height - headerHeight}
        region={mapConfig}
      >
        <Geojson
          geojson={geojson}
          fillColor="rgba(0,0,255,0.1)"
          strokeColor="#000"
          strokeWidth={2}
        />
      </Map>
    </FullScreen>
  )
}

export default MapScreen
