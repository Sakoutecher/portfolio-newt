//Librairies
import React, { useRef, useState } from 'react'
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
import { Toast } from '../components/Toast'

//Hooks
import { useToast } from '../hooks/useToast'

type useStateStatus = 'success' | 'erreur'

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { toggleToast, toast, closeToast } = useToast()
  const [status, setStatus] = useState<useStateStatus>('success')
  const [message, setMessage] = useState<string>('')

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
          toggleToast()
          setStatus('success')
          setMessage(`Mail envoyer avec success. ${result.text}`)
        },
        (error) => {
          toggleToast()
          setStatus('erreur')
          setMessage(`Erreur lors de l'envoie du mail. ${error}`)
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
      <Toast
        type={status}
        message={message}
        active={toast}
        closeToast={closeToast}
      />
    </ContactContainer>
  )
}
