import React from 'react'
import Amplify from 'aws-amplify'
import AWSConfig from './src/aws-exports'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue'
import AppLoading from 'expo-app-loading'
import MainStack from './src/screens/MainStack'
import CustomDrawerContent from './src/components/DrawerContent'
import { AppStateProvider } from './src/lib/appState'

Amplify.configure(AWSConfig)

const Drawer = createDrawerNavigator()

function App() {
  const [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
  })

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
