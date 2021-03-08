import React from 'react'
import { COLORS, LOCAL_AUTHORITY_DISTRICTS } from '../app.config'
import { Picker } from '@react-native-picker/picker'
import styled from 'styled-components/native'

const StyledPicker = styled(Picker)`
  border: 1px solid white;
  border-radius: 10px;
  margin: 10px 0;
`

// Potentially use https://github.com/lawnstarter/react-native-picker-select ???

function AreaPicker(props) {
  const { selectedValue, onSelect } = props

  return (
    <StyledPicker
      selectedValue={selectedValue}
      onValueChange={(value, index) => {
        onSelect(value)
      }}
    >
      {LOCAL_AUTHORITY_DISTRICTS.map(({ areaCode, areaName }) => {
        const isSelected = areaCode === selectedValue

        return (
          <Picker.Item
            key={areaCode}
            color={isSelected ? COLORS.primaryWhite : COLORS.primaryBlack}
            label={areaName}
            value={areaCode}
            selected={areaCode === selectedValue}
          />
        )
      })}
    </StyledPicker>
  )
}

export default AreaPicker
