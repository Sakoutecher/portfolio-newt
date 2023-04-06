//Librairies
import React, { FC } from 'react'

//Styles
import {
  RenduFinalContainer,
  Title,
  Img,
  VideoContainer,
  Video,
} from './RenduFinal.style'

type RenduFinalProps = {
  url: string
  video: boolean
}

const RenduFinal: FC<RenduFinalProps> = ({ url, video }) => {
  return (
    <RenduFinalContainer>
      <Title>RENDU FINAL</Title>
      {video === true ? (
        <VideoContainer>
          <Video controls>
            <source src={url} />
          </Video>
        </VideoContainer>
      ) : (
        <Img src={url} />
      )}
    </RenduFinalContainer>
  )
}

export default RenduFinal
