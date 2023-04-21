//Librairies
import React, { FC, useState, useRef } from 'react'

//Styles
import { InputContainer, InputElement } from './Input.style'

export type InputProps = {
  name?: string
  type: 'password' | 'text' | 'email'
  id?: string
  placeholder: string
  autocomplete?: boolean
}

export const Input: FC<InputProps> = ({
  name,
  type,
  id,
  placeholder,
  autocomplete,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    if (!inputRef.current) return
    if (inputRef.current.value !== '') {
      setIsFocused(true)
      return
    } else {
      setIsFocused(false)
    }
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
        ref={inputRef}
        autoComplete={autocomplete ? 'on' : 'off'}
      />
    </InputContainer>
  )
}
