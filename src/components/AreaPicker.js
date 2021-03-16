import React from 'react'
import { Picker } from '@react-native-picker/picker'
import styled from 'styled-components/native'
import { Platform } from 'react-native'
import { COLORS, LOCAL_AUTHORITY_DISTRICTS } from '../app.config'

const Container = styled.View`
  border: 1px solid white;
  border-radius: 10px;
  margin: 10px 0;
`

const StyledPicker = styled(Picker)`
  color: ${COLORS.primaryWhite};
`

// Potentially use https://github.com/lawnstarter/react-native-picker-select ???

function AreaPicker(props) {
  const { selectedValue, onSelect } = props

  return (
    <Container>
      <StyledPicker
        dropdownIconColor="#ffffff"
        selectedValue={selectedValue}
        onValueChange={(value) => {
          onSelect(value)
        }}
      >
        {LOCAL_AUTHORITY_DISTRICTS.map(({ areaCode, areaName }) => {
          const isSelected = Platform.OS === 'ios' && areaCode === selectedValue

          return (
            <Picker.Item
              key={areaCode}
              label={areaName}
              color={isSelected ? COLORS.primaryWhite : COLORS.primaryBlack}
              fontWeight="bold"
              value={areaCode}
              selected={areaCode === selectedValue}
            />
          )
        })}
      </StyledPicker>
    </Container>
  )
}

export default AreaPicker
