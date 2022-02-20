import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

// css
import "./App.css"

// Pages
import HomePage from "./containers/Home"

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  )
}

const AppContainer = styled.div`
  ${tw`w-full h-full flex flex-col`}
`

export default App
