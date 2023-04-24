//Librairies
import React, { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

type PageTransitionProps = {
  children: ReactNode
  style?: object
}

export const PageTransition: FC<PageTransitionProps> = ({
  children,
  style,
}) => {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  )
}
