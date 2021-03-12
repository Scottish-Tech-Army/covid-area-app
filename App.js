import React, { useEffect } from 'react'
import Amplify from 'aws-amplify'
import * as TaskManager from 'expo-task-manager'
import AWSConfig from './src/aws-exports'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'
import AppLoading from 'expo-app-loading'
import * as Location from 'expo-location'
import MainStack from './src/screens/MainStack'
import CustomDrawerContent from './src/components/DrawerContent'
import { AppStateProvider } from './src/lib/appState'

Amplify.configure(AWSConfig)

const Drawer = createDrawerNavigator()

const LOCATION_TASK_NAME = 'background-location-task'

// Setup background location task
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data: { locations }, error }) => {
  if (error) {
    // log error somewhere?
    console.log('error background location', error)
  } else {
    // 1. Get first location back
    // 2. Call AWS tracker with latitude/longitude
    // 3?. Possibly get back the results and send Expo notification here???
    console.log('background locations', locations)
  }
})

function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to use location denied!')
        return
      }

      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Lowest, // accuracy ~ 3km
        distanceInterval: 3000, // 3km
        showsBackgroundLocationIndicator: true,
      })

      //const location = await Location.getCurrentPositionAsync()
      //console.log('location is', location)
    })()
  }, [])

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AppStateProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Main"
          drawerStyle={{
            backgroundColor: '#207df3',
          }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Main" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppStateProvider>
  )
}

export default App
