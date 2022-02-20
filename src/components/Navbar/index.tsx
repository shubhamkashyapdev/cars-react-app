import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import Logo from "../Logo/index"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  )
}

const NavbarContainer = styled.div`
  min-height: 60px;
  ${tw`w-full max-w-screen-2xl flex flex-row items-center justify-between
  lg:pl-12 lg:pr-12
  `}
`

const LogoContainer = styled.div`
  ${tw``}
`

export default Navbar
