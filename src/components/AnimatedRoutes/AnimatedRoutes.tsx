//Librairies
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'

//Pages
import { Home } from '../../pages/Home'
import { About } from '../../pages/About'
import { Projects } from '../../pages/Projects'
import { OneProject } from '../../pages/OneProject'
import { Contact } from '../../pages/Contact'
import { NotFound } from '../../pages/NotFound'

export const AnimatedRoutes = () => {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/one-project/:id'} element={<OneProject />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}
