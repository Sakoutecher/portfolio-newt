//Librairies
import React, { useRef, useEffect, useState } from 'react'

//Styles
import { CustomCursor } from './Cursor.style'

const Cursor = () => {
  const [size, setSize] = useState<number>(60)
  const [hovering, setHovering] = useState<boolean>(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      if (cursorRef.current)
        cursorRef.current.style.transform = `translate3d(${
          e.clientX - 735
        }px, ${e.clientY}px, 0)`

      if (e.target && (e.target as HTMLElement).getAttribute('data-cursor')) {
        setSize(40)
        setHovering(true)
      } else {
        setSize(60)
        setHovering(false)
      }
    })
  }, [])

  return <CustomCursor ref={cursorRef} size={size} isHovering={hovering} />
}

export default Cursor