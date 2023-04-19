//Librairies
import React, { useRef, useEffect } from 'react'

//Styles
import { StickersContainer, InnerCircle } from './Stickers.style'

export const Stickers = () => {
  const stickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (stickerRef.current) {
        stickerRef.current.style.transform = `translate(${e.clientX / 40}px, ${
          e.clientY / 40
        }px)`
      }
    })
  }, [])

  return (
    <StickersContainer ref={stickerRef}>
      <svg
        viewBox='0 0 100 100'
        width='105%'
        height='105%'
        className='stickers'
      >
        <defs>
          <path
            id='circle'
            d='
              M 50, 50
              m -37, 0
              a 37,37 0 1,1 74,0
              a 37,37 0 1,1 -74,0'
          />
        </defs>
        <text fontSize='6'>
          <textPath xlinkHref='#circle'>
            HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO HELLO
          </textPath>
        </text>
      </svg>
      <InnerCircle>
        <svg
          id='Calque_1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1920 1080'
          style={{ transform: 'scale(3.5)', marginLeft: '0.6em' }}
        >
          <path
            className='cls-5'
            d='m1036.6,564.3c-.26,9.74-.34,21.39-.96,33.02-.68,12.65-2.5,25.11-7.71,36.87-4.57,10.32-11.91,17.61-22.94,20.16-17.34,4-32.65-4.28-39.72-19.94-4.06-8.99-6.12-18.44-6.82-28.23-2.03-28.42-2.94-56.86-2.05-85.35.29-9.43-.15-18.9.27-28.32.62-13.69,1.69-27.37,6.81-40.31,2.7-6.82,5.74-13.47,11.52-18.37,6.71-5.69,14.47-7.97,23.24-7.68,15.36.5,24.33,9.31,29.93,22.56,3.85,9.12,5.94,18.71,6.48,28.57.79,14.52,1.54,29.04,1.88,43.57.32,13.84.07,27.7.07,43.46Zm-15.12-44.35c-.66-.69-1.13-1.27-1.67-1.75-7.41-6.56-14.8-13.13-22.27-19.62-1.33-1.16-1.99-2.31-1.76-4.12.57-4.45.9-8.93,1.48-13.37,1.88-14.48,3.93-28.94,8.66-42.84.4-1.18.17-1.82-1.08-2.19-11.96-3.64-23.53.1-29.79,11.7-2.29,4.24-3.84,8.95-5.18,13.6-3.8,13.14-4.32,26.73-4.48,40.26-.3,24.81-1.36,49.62.34,74.43.63,9.19.74,18.41,1.44,27.59.74,9.58,2.39,18.99,6.38,27.87,3.87,8.6,10.62,13.23,19.72,14.75,1.43.24,2.89.32,4.68.52-.63-2.08-1.21-3.63-1.56-5.24-2.51-11.41-3.78-23-4-34.64-.33-17.2-.1-34.41-.04-51.61.02-4.79.25-9.59.52-14.38.07-1.18.35-2.85,1.15-3.41,4.93-3.43,10.01-6.65,15.08-9.86,4.03-2.56,8.12-5.02,12.4-7.66Z'
          />
          <path
            className='cls-5'
            d='m923.19,539.42c-.49,21.73-.67,38.78-1.32,55.83-.51,13.51-2.64,26.78-8.09,39.34-6.1,14.06-18.06,21.55-33.32,20.55-13.83-.91-23.08-8.44-28.96-20.56-5.08-10.48-6.46-21.82-7.26-33.24-2.08-29.5-2.12-59.04-1.71-88.59.2-14.38.37-28.77,2.57-43.04,1.65-10.64,4.69-20.85,10.66-29.85,4.91-7.41,12.03-11.92,20.99-13.23,13.35-1.94,26.28,1.79,33.65,14.76,2.86,5.04,4.98,10.59,6.8,16.11,2.85,8.65,3.73,17.73,4.1,26.78.83,19.93,1.38,39.87,1.89,55.15Zm-39.7,107.13c-.08-.76-.09-1.13-.16-1.49-1-5.45-2.29-10.87-2.95-16.36-3.09-25.54-2.86-51.18-1.73-76.82.17-3.8.14-7.61.42-11.41.08-1.14.6-2.71,1.45-3.27,6.84-4.54,13.82-8.87,20.74-13.29,2.08-1.33,4.11-2.72,6.28-4.16-.52-.56-.75-.85-1.02-1.1-7.36-6.5-14.69-13.02-22.1-19.47-1.87-1.63-3.06-2.91-2.53-5.97,1.67-9.57,2.36-19.32,4.07-28.88,1.56-8.72,3.97-17.29,5.9-25.96.15-.65-.32-1.75-.87-2.18-.74-.57-1.8-.83-2.77-.96-13.5-1.9-22.55,2.63-28.49,15.21-5.66,12.01-7.09,24.97-7.7,37.99-.57,12.16-.49,24.35-.75,36.52-.61,28.33.09,56.62,2.57,84.85.78,8.84,2.78,17.45,7.67,25.07,5.05,7.87,12.44,11.45,21.97,11.67Z'
          />
          <path
            className='cls-2'
            d='m1021.48,519.96c-4.28,2.64-8.37,5.1-12.4,7.66-5.07,3.22-10.15,6.43-15.08,9.86-.8.56-1.08,2.23-1.15,3.41-.28,4.79-.5,9.58-.52,14.38-.07,17.2-.29,34.41.04,51.61.22,11.64,1.49,23.23,4,34.64.35,1.6.93,3.16,1.56,5.24-1.78-.19-3.24-.28-4.68-.52-9.1-1.52-15.85-6.15-19.72-14.75-3.99-8.88-5.64-18.3-6.38-27.87-.71-9.18-.81-18.4-1.44-27.59-1.69-24.8-.64-49.62-.34-74.43.17-13.53.68-27.12,4.48-40.26,1.34-4.65,2.9-9.36,5.18-13.6,6.26-11.6,17.83-15.33,29.79-11.7,1.25.38,1.48,1.01,1.08,2.19-4.73,13.91-6.78,28.36-8.66,42.84-.58,4.45-.91,8.93-1.48,13.37-.23,1.81.43,2.97,1.76,4.12,7.46,6.49,14.86,13.07,22.27,19.62.55.48,1.01,1.06,1.67,1.75Z'
          />
          <path
            className='cls-2'
            d='m883.49,646.55c-9.53-.22-16.92-3.8-21.97-11.67-4.89-7.62-6.89-16.22-7.67-25.07-2.47-28.23-3.18-56.52-2.57-84.85.26-12.18.18-24.36.75-36.52.62-13.01,2.04-25.98,7.7-37.99,5.93-12.59,14.98-17.11,28.49-15.21.96.14,2.03.4,2.77.96.55.42,1.02,1.52.87,2.18-1.93,8.66-4.35,17.23-5.9,25.96-1.71,9.56-2.39,19.31-4.07,28.88-.53,3.06.65,4.34,2.53,5.97,7.41,6.44,14.74,12.97,22.1,19.47.28.24.51.54,1.02,1.1-2.17,1.44-4.2,2.83-6.28,4.16-6.92,4.42-13.9,8.75-20.74,13.29-.85.56-1.37,2.13-1.45,3.27-.28,3.79-.25,7.6-.42,11.41-1.13,25.65-1.35,51.28,1.73,76.82.66,5.49,1.95,10.91,2.95,16.36.07.36.08.73.16,1.49Z'
          />
        </svg>
      </InnerCircle>
    </StickersContainer>
  )
}
