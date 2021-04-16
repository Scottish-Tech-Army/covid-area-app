import React, { useState } from 'react'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Screen from '../components/Screen'
import AreaPicker from '../components/AreaPicker'
import Button from '../components/Button'
import Heading from '../components/Heading'
import { COLORS, FONTS } from '../app.config'
import { useAppState } from '../lib/appState'

const Area = styled.View`
  flex: 1;
`

const Message = styled.View`
  background: ${COLORS.primaryWhite};
  border-radius: 10px;
  padding: 5px;
`

const Text = styled.Text`
  font-family: ${FONTS.primary};
  font-size: 30px;
  text-align: center;
`

function AreaScreen() {
  const [area, setArea] = useState()
  const { storeAreaCode } = useAppState()
  return (
    <Screen>
      <Area>
        <Heading>Choose your area</Heading>
        <Message>
          <Text>
            You will be alerted when you leave your designated local authority
            area
          </Text>
        </Message>
        <AreaPicker selectedValue={area} onSelect={setArea} />
        <Button
          title="Set my area"
          onPress={() => {
            storeAreaCode(area)
          }}
        />
      </Area>
    </Screen>
  )
}

export default AreaScreen
