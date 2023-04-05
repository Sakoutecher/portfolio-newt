//Librairies
import React, { FC } from 'react'
import uuid from 'react-uuid'

//Styles
import { CreditsBlock, Text } from './Credits.style'

type CreditsProps = {
  text: Array<string>
}

const Credits: FC<CreditsProps> = ({ text }) => {
  return (
    <CreditsBlock>
      {text.map((line) => (
        <Text key={uuid()}>{line}</Text>
      ))}
    </CreditsBlock>
  )
}

export default Credits
