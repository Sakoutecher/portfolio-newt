//Librairies
import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'

type PageTransitionProps = {
  children: ReactNode
}

const PageTransition: FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
