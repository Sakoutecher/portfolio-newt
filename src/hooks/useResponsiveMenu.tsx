//Librairies
import { useEffect, useState } from 'react'

export const useResponsiveMenu = () => {
  const [active, setActive] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setActive(!active)
  }

  useEffect(() => {
    if (active) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'initial'
    }
  }, [])

  useEffect(() => {
    if (active) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = 'initial'
    }
  }, [active])

  return { active, toggleMenu }
}
