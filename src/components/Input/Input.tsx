//Librairies
import React, { FC, useState, useRef, useEffect } from 'react'

//Styles
import { InputContainer, InputElement } from './Input.style'

export type InputProps = {
  name?: string
  type: 'password' | 'text' | 'email'
  id?: string
  placeholder: string
  autocomplete?: boolean
  clear: boolean
}

export const Input: FC<InputProps> = ({
  name,
  type,
  id,
  placeholder,
  autocomplete,
  clear,
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

  useEffect(() => {
    if (clear) {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }, [clear])

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
