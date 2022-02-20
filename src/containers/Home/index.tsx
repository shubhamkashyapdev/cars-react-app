import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const HomePage = () => {
  return (
    <div>
      <PageContainer>Home Page {":)"}</PageContainer>
    </div>
  )
}

const PageContainer = styled.div`
  ${tw`flex flex-col w-full h-full items-center overflow-x-hidden`}
`

export default HomePage
