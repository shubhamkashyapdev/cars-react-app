import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

// images
import CarLogoImg from "../../assets/images/car-logo.png"

const Logo = () => {
  return (
    <LogoContainer>
      <ImgContainer>
        <img src={CarLogoImg} />
      </ImgContainer>
      <LogoText>YourCar</LogoText>
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  ${tw`flex items-center `}
`

const LogoText = styled.div`
  ${tw`text-xl 
  md:text-2xl
  font-bold
  text-black
  m-1
  `}
`

const ImgContainer = styled.div`
  width: auto;
  img {
    width: auto;
    height: auto;
  }
  ${tw`h-6 md:h-9 `}
`

export default Logo
