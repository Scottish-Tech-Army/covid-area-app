import React from 'react'
import { render } from '@testing-library/react-native'
import HomeScreen from './HomeScreen'
import { AppStateProvider } from '../lib/appState'

const Providers = ({ children }) => {
  return <AppStateProvider>{children}</AppStateProvider>
}

describe('HomeScreen', function () {
  it('renders location', () => {
    const { debug } = render(
      <Providers>
        <HomeScreen />
      </Providers>
    )
    debug()
  })
})
