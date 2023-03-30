//Librairies
import React from 'react'
import styled from 'styled-components'

//Components
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <MainContainer>
      <Navbar />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background: url('./assets/background.svg');
  background-size: cover;
  overflow-y: scroll;
`

export default App
