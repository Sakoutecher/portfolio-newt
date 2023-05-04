//Librairies
import React, { FC } from 'react'
import uuid from 'react-uuid'

//Styles
import {
  ArrayContainer,
  RenduFinalContainer,
  Title,
  TwoCol,
  ThreeCol,
  Img,
} from './RenduFinalArray.style'

type RenduFinalArrayProps = {
  renduFinalContent: Array<Array<string>> | undefined
}

export const RenduFinalArray: FC<RenduFinalArrayProps> = ({
  renduFinalContent,
}) => {
  console.log(renduFinalContent)

  return (
    <RenduFinalContainer>
      <Title>RENDU FINAL</Title>
      <ArrayContainer>
        {renduFinalContent?.map((content) => {
          if (content.length === 2) {
            return (
              <TwoCol key={uuid()}>
                {content.map((img) => {
                  return <Img key={uuid()} src={img} />
                })}
              </TwoCol>
            )
          } else if (content.length === 3) {
            return (
              <ThreeCol key={uuid()}>
                {content.map((img, index) => {
                  if (index === 1) {
                    return (
                      <div key={uuid()} style={{ gridArea: '1 / 2 / 2 / 4' }}>
                        <Img key={uuid()} src={img} />
                      </div>
                    )
                  }
                  return <Img key={uuid()} src={img} />
                })}
              </ThreeCol>
            )
          }
        })}
      </ArrayContainer>
    </RenduFinalContainer>
  )
}
