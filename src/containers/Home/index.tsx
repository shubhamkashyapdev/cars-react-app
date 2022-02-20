import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Navbar from "../../components/Navbar"

const HomePage = () => {
  return (
    <PageContainer>
      <Navbar />
    </PageContainer>
  )
}

const PageContainer = styled.div`
  ${tw`flex flex-col w-full h-full items-center overflow-x-hidden`}
`

export default HomePage
