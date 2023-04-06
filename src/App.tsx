//Librairies
import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

//Pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/projects'} element={<Projects />} />
      </Routes>
      <Footer />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url('../public/assets/background.svg');
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  overflo-y: scroll;
`

export default App
