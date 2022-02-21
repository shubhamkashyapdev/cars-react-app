import React from "react"
import tw from "twin.macro"
import styled from "styled-components"

// images
import MclarenCarImg from "../../assets/images/mclaren-orange-big.png"
import BlobSvg from "../../assets/images/blob.svg"
import { SCREENS } from "../Responsive"
import Button from "../Button"

const TopSection = () => {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Car's With Us</Slogan>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          dolores quos odio, fugiat asperiores sequi! Corporis recusandae ea
          obcaecati dolorem!
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button text="Sell Your Ride" theme="filled" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobSvg} />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  )
}

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full max-w-screen-2xl
    flex justify-between
    lg:pl-12 lg:pr-12
    pl-3 pr-3
    `}
`

const LeftContainer = styled.div`
  ${tw`
        w-1/2
        flex flex-col
    `}
`
const RightContainer = styled.div`
  ${tw`
        w-1/2
        flex flex-col
        relative
        mt-20
    `}
`

const Slogan = styled.h1`
  ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        md:text-5xl
        sm:text-3xl
        lg:font-bold
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed

    `}
`

const Description = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-700
    `}
`

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 60em;
    max-height: 30em;
    right: -7em;
    top: -25em;
    transform: rotate(-20deg);
  }
`

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  right: -6em;
  top: -5em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 28em;
    right: -8em;
    top: -5em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -13em;
  }
`

const ButtonsContainer = styled.div`
  ${tw`
        flex
        mt-4
        flex-wrap
    `}
`

export default TopSection
