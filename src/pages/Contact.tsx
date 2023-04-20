//Librairies
import React from 'react'

//Styles
import {
  ContactContainer,
  ContactTitle,
  SplitContainer,
  LeftContainer,
  RightContainer,
  InputContainerInline,
  InputLeft,
  InputRight,
  SubmitContainer,
} from '../styles/pages/Contact.style'

//Components
import { Input } from '../components/Input'
import { TextArea } from '../components/TextArea'
import { Button } from '../components/Button'
import { Stickers } from '../components/Stickers'

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>CONTACT</ContactTitle>
      <SplitContainer>
        <LeftContainer>
          <InputContainerInline>
            <InputLeft>
              <Input type={'text'} placeholder={'NOM'} />
            </InputLeft>
            <InputRight>
              <Input type={'email'} placeholder={'EMAIL'} />
            </InputRight>
          </InputContainerInline>
          <InputContainerInline>
            <InputLeft>
              <Input type={'text'} placeholder={'OBJET'} />
            </InputLeft>
            <InputRight>
              <Input type={'text'} placeholder={'TELEPHONE'} />
            </InputRight>
          </InputContainerInline>
          <TextArea placeholder={'MESSAGE'} />
          <SubmitContainer>
            <Button size='md' text='ENVOYER' active={true} />
          </SubmitContainer>
        </LeftContainer>
        <RightContainer>
          <Stickers />
        </RightContainer>
      </SplitContainer>
    </ContactContainer>
  )
}
