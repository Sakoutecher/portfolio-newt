//Librairies
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

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
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = () => {
    if (formRef.current === null) return
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_EMAIL,
        import.meta.env.VITE_TEMPLATE_EMAIL,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY_EMAIL
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <ContactContainer>
      <ContactTitle>CONTACT</ContactTitle>
      <SplitContainer>
        <LeftContainer ref={formRef}>
          <InputContainerInline>
            <InputLeft>
              <Input
                type={'text'}
                placeholder={'NOM'}
                name={'nom'}
                autocomplete={false}
              />
            </InputLeft>
            <InputRight>
              <Input
                type={'email'}
                placeholder={'EMAIL'}
                name={'email'}
                autocomplete={false}
              />
            </InputRight>
          </InputContainerInline>
          <InputContainerInline>
            <InputLeft>
              <Input
                type={'text'}
                placeholder={'OBJET'}
                name={'objet'}
                autocomplete={false}
              />
            </InputLeft>
            <InputRight>
              <Input
                type={'text'}
                placeholder={'TELEPHONE'}
                name={'telephone'}
                autocomplete={false}
              />
            </InputRight>
          </InputContainerInline>
          <TextArea placeholder={'MESSAGE'} name={'message'} />
          <SubmitContainer>
            <Button
              size='md'
              text='ENVOYER'
              active={true}
              onclick={sendEmail}
            />
          </SubmitContainer>
        </LeftContainer>
        <RightContainer>
          <Stickers />
        </RightContainer>
      </SplitContainer>
    </ContactContainer>
  )
}
