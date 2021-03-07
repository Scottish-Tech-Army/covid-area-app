import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AppStateContext = createContext()

function AppStateProvider({ children }) {
  const [areaCode, setAreaCode] = useState()

  useEffect(() => {
    // get areacode from local storage on init
    async function getAreaCode() {
      const area = await AsyncStorage.getItem('areaCode')
      if (area) {
        setAreaCode(area)
      }
    }
    getAreaCode()
  })

  function storeAreaCode(area) {
    // saving item to storage
    console.log('saving item', area)
    AsyncStorage.setItem('areaCode', area)
    setAreaCode(area)
  }

  return (
    <AppStateContext.Provider
      value={{
        areaCode,
        storeAreaCode,
      }}
    >
      {children}
    </AppStateContext.Provider>
  )
}

function useAppState() {
  return useContext(AppStateContext)
}

export { AppStateProvider, useAppState }
