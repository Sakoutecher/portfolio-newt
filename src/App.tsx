//Librairies
import React from 'react'
import styled from 'styled-components'

//Components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes'

const App = () => {
  return (
    <MainContainer>
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url('/assets/background.svg');
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
