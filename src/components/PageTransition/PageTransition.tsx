//Librairies
import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

type PageTransitionProps = {
  children: ReactNode
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  const animations = {
    initial: { opacity: 0, y: '100px' },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: '-100px' },
  }

  return (
    <motion.div
      variants={animations}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
