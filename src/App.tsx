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
import OneProject from './pages/OneProject'

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/projects'} element={<Projects />} />
        <Route path={'/one-project/:id'} element={<OneProject />} />
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
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

export default App
