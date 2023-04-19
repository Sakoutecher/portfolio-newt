//Librairies
import { useState } from 'react'

export const useResponsiveMenu = () => {
  const [active, setActive] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setActive(!active)
  }

  return { active, toggleMenu }
}
