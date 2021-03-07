import React from 'react'
import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
`

const SafeView = styled.SafeAreaView`
  flex: 1;
`

const Gradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 10px;
`

const Screen = (props) => {
  const { children } = props
  return (
    <Wrapper>
      <Gradient colors={['#207df3', '#4c97f1', '#95cbf6']}>
        <SafeView>{children}</SafeView>
      </Gradient>
    </Wrapper>
  )
}

export default Screen
