import React, { useState } from 'react'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import styled from 'styled-components/native'
import Button from './Button'
import AreaPicker from './AreaPicker'
import Heading from './Heading'
import { useAppState } from '../lib/appState'

const DrawerContentArea = styled(DrawerContentScrollView)`
  margin: 50px 10px 10px 10px;
`

function CustomDrawerContent(props) {
  const { navigation } = props
  const { areaCode, storeAreaCode } = useAppState()
  const [area, setArea] = useState(areaCode)

  return (
    <DrawerContentArea {...props}>
      <Heading>change area</Heading>
      <AreaPicker selectedValue={area} onSelect={setArea} />
      <Button
        title="Save"
        onPress={() => {
          storeAreaCode(area)
          navigation.closeDrawer()
        }}
      />
    </DrawerContentArea>
  )
}

export default CustomDrawerContent
