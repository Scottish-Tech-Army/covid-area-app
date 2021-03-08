import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './HomeScreen'
import AreaScreen from './AreaScreen'
import HeaderLeftMenu from '../components/HeaderLeftMenu'
import { useAppState } from '../lib/appState'
import MapScreen from './MapScreen'

const Stack = createStackNavigator()

function MainStack() {
  const { areaCode } = useAppState()

  return (
    <Stack.Navigator>
      {areaCode ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerLeft: () => <HeaderLeftMenu />,
              headerLeftContainerStyle: {
                marginLeft: 10,
              },
            }}
          />
          <Stack.Screen name="Map" component={MapScreen} />
        </>
      ) : (
        <Stack.Screen
          name="Area"
          component={AreaScreen}
          options={{ title: 'Choose Area' }}
        />
      )}
    </Stack.Navigator>
  )
}

export default MainStack
