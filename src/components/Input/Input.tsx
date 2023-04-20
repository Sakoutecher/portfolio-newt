//Librairies
import React, { FC, useState } from 'react'

//Styles
import { InputContainer, InputElement } from './Input.style'

export type InputProps = {
  name?: string
  type: 'password' | 'text' | 'email'
  id?: string
  placeholder: string
}

export const Input: FC<InputProps> = ({ name, type, id, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <InputContainer focused={isFocused} placeholder={placeholder}>
      <InputElement
        data-testid='input'
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        type={type}
        id={id}
      />
    </InputContainer>
  )
}
