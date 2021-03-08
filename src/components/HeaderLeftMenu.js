import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import Menu from './icons/Menu'

function HeaderLeftMenu() {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer()
      }}
    >
      <Menu width={30} height={30} />
    </TouchableOpacity>
  )
}

export default HeaderLeftMenu
