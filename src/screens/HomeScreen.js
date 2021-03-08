import React, { useEffect, useState } from 'react'
import Screen from '../components/Screen'
import styled from 'styled-components/native'
import * as Animatable from 'react-native-animatable'
import * as Linking from 'expo-linking'
import { COLORS, FONTS, MOCK_DATA } from '../app.config'
import Button from '../components/Button'
import Heading from '../components/Heading'
import { useAppState } from '../lib/appState'
import { TouchableOpacity } from 'react-native'

const Home = styled.View`
  display: flex;
  flex: 1;
`
const Area = styled(Animatable.View)`
  background: chocolate;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`

const AreaName = styled.Text`
  font-family: ${FONTS.primary};
  font-size: 60px;
  text-align: center;
  padding: 0 10px;
  color: ${COLORS.primaryWhite};
`

const AlertLevel = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AlertTitle = styled(Heading)`
  margin: 5px 0;
`

const AlertLevelName = styled.Text`
  font-family: ${FONTS.primary};
  font-size: 30px;
  color: ${COLORS.primaryWhite};
  text-align: center;
  margin: 5px 0;
`

const AlertCircle = styled.View`
  background: ${COLORS.primaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  border: 3px solid crimson;
`

const AlertText = styled.Text`
  color: ${COLORS.primaryBlack};
  font-family: ${FONTS.primary};
  font-size: 50px;
  line-height: 100px;
`

const MoreInfoButton = styled(Button)``

const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 20px;
`

function HomeScreen(props) {
  const { navigation } = props
  const [alertInfo, setAlertInfo] = useState()
  const { areaCode } = useAppState()

  useEffect(() => {
    // fetch latest alert info for your area
    // only request if cache empty or expired
    // mock
    setAlertInfo(MOCK_DATA.ALERT_REQUEST)
  }, [areaCode])

  return alertInfo ? (
    <Screen>
      <Home>
        <Heading>your area</Heading>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Map', {
              areaName: alertInfo.areaName,
              areaCode: alertInfo.areaCode,
            })
          }}
        >
          <Area animation="fadeInLeftBig">
            <AreaName numberOfLines={2}>{alertInfo.areaName}</AreaName>
          </Area>
        </TouchableOpacity>
        <AlertTitle>alert level</AlertTitle>
        <AlertLevel>
          <Animatable.View
            animation="pulse"
            iterationCount={20}
            useNativeDriver
          >
            <AlertCircle>
              <AlertText>{alertInfo.alertLevel}</AlertText>
            </AlertCircle>
          </Animatable.View>
          <AlertLevelName>{alertInfo.alertLevelName}</AlertLevelName>
        </AlertLevel>
        <Footer>
          <MoreInfoButton
            title="Show restrictions"
            onPress={() => {
              Linking.openURL(alertInfo.alertLevelUrl)
            }}
          />
        </Footer>
      </Home>
    </Screen>
  ) : null
}

export default HomeScreen
