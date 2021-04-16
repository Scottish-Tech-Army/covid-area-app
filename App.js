import React, { useEffect } from 'react'
import * as ExpoLocation from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import AWSConfig from './src/aws-exports'
import Amplify, { Auth } from 'aws-amplify'
import AWS from 'aws-sdk/dist/aws-sdk-react-native'
import AppLoading from 'expo-app-loading'
import CustomDrawerContent from './src/components/DrawerContent'
import MainStack from './src/screens/MainStack'
import { AppStateProvider } from './src/lib/appState'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'
import getDeviceId from './src/lib/getDeviceId'
import updateDevicePosition from './src/lib/updateDevicePosition'
Amplify.configure(AWSConfig)

const createLocationService = async function () {
  const credentials = await Auth.currentCredentials()

  const locationService = new AWS.Location({
    credentials,
    region: AWSConfig.aws_project_region,
  })

  return locationService
}

const Drawer = createDrawerNavigator()

const LOCATION_TASK_NAME = 'background-location-task'

// Setup background location task
TaskManager.defineTask(
  LOCATION_TASK_NAME,
  async ({ data: { locations }, error }) => {
    if (error) {
      // TODO: log in AWS?
      console.log('error background location', error)
    } else {
      // TODO: Update location to AWS, check if we could possibly send Expo notification here?

      const position = locations[0]
      const timeStamp = new Date().toISOString()
      const locationService = await createLocationService()
      const deviceId = await getDeviceId()

      /* Uncomment when ready to test */
      if (locations?.length) {
        //   // call update device position
        //   updateDevicePosition({
        //     locationService,
        //     deviceId,
        //     position,
        //     timeStamp,
        //   })
      }
    }
  }
)

function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  })

  useEffect(() => {
    ;(async () => {
      const { status } = await ExpoLocation.requestPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to use location denied!')
        return
      }

      await ExpoLocation.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: ExpoLocation.Accuracy.Lowest, // accuracy ~ 3km
        distanceInterval: 3000, // 3km
        showsBackgroundLocationIndicator: true,
      })

      /* Uncomment to test location updates on app startup */
      //const locationService = await createLocationService()
      //const timeStamp = new Date().toISOString()
      //const deviceId = await getDeviceId()
      // For testing purposes, switch between two geofence areas
      //const position = [55.865652, -4.264389] // Glasgow
      //const position = [55.92631, -3.226404] // Edinburgh
      // Call update position
      // updateDevicePosition({
      //   locationService,
      //   deviceId,
      //   position,
      //   timeStamp,
      // })
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
