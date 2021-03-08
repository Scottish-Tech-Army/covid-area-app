import React from 'react'
import styled from 'styled-components/native'
import { FONTS } from '../app.config'

const StyledHeading = styled.Text`
  font-family: ${FONTS.primary};
  font-size: 48px;
  text-align: center;
  margin: 20px 0;
`

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>
}

export default Heading
