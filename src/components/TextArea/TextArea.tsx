//Librairies
import React, { FC, useState } from 'react'

//Styles
import { TextAreaContainer, TextAreaElement } from './TextArea.style'

export type TextAreaProps = {
  placeholder: string
  name?: string
  id?: string
}

export const TextArea: FC<TextAreaProps> = ({ placeholder, name, id }) => {
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (
    <TextAreaContainer focused={isFocused} placeholder={placeholder}>
      <TextAreaElement
        data-testid='textarea'
        onFocus={handleFocus}
        onBlur={handleBlur}
        name={name}
        id={id}
      />
    </TextAreaContainer>
  )
}
