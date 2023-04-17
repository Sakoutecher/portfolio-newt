//Librairies
import { useState } from 'react'

const useResponsiveMenu = () => {
  const [active, setActive] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setActive(!active)
  }

  return { active, toggleMenu }
}

export default useResponsiveMenu
