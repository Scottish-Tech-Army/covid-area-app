import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { COLORS, FONTS } from '../app.config'
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native'

export const BUTTON_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
}

const ButtonView = styled.View`
  background-color: ${COLORS.primaryWhite};
  border-radius: 5px;
  padding: 10px 20px;
`

const Label = styled.Text`
  color: ${COLORS.primaryBlack};
  font-family: ${FONTS.primary};
  font-size: 30px;
  text-align: center;
`

const Button = (props) => {
  const {
    accessibilityLabel,
    accessibilityState,
    uppercase,
    disabled,
    title,
    onPress,
    type,
  } = props

  const Touchable =
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity
  return (
    <Touchable
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="button"
      accessibilityState={accessibilityState}
      disabled={disabled}
      onPress={onPress}
    >
      <ButtonView type={type}>
        <Label type={type} disabled={disabled} uppercase={uppercase}>
          {title}
        </Label>
      </ButtonView>
    </Touchable>
  )
}

Button.propTypes = {
  accessibilityState: PropTypes.object,
  accessibilityLabel: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  uppercase: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
}

export default Button
