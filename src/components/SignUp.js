import React from "react"
import styled from "@emotion/styled"
import { RedButton } from "./StyledButton"

const breakSmall = "600px"
const breakMiddle = "750px"

const BackgroundImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  @media only screen and (min-width: ${breakMiddle}) {
    grid-template-columns: 1fr 2fr;
    grid-column: 2 / span 1;
    grid-row: 1;
    height: 100%;
  }
`

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media only screen and (min-width: ${breakMiddle}) {
    grid-template-columns: 2fr 3fr;
    grid-row: 1;
  }
`

const ImageOverlayGradient = styled.div`
  display: none;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 30%,
    rgba(0, 212, 255, 0) 100%
  );
  @media only screen and (min-width: ${breakMiddle}) {
    display: block;
    grid-row: 1;
    grid-column: 2;
  }
`

const InputContainer = styled.div`
  padding: 12px;
  grid-column: 1 / span 1;
  max-width: 500px;
  margin: 0 auto;

  @media only screen and (min-width: ${breakMiddle}) {
    padding: 32px 16px 32px 32px;
    max-width: 1000px;
  }
`

const SmallPrint = styled.p`
  font-size: 10px;
  color: #707070;
  font-family: sans-serif;
`

const TemporaryInputBox = styled.input`
  box-sizing: border-box;
  display: block;
  padding: 12px;
  margin: 10px 0;
  border-radius: 4px;
  border: solid 1px #c3c9d9;
  width: 100%;
`

const StyledParagraph = styled.p`
  margin: 0px;
  color: #00324d;
  font-family: sans-serif;
`

const CallToActionHeader = styled.h4`
  margin: 20px 0px;
  color: #00324d;
  font-family: sans-serif;
`

//todo: I'm not happy with this system, but although i can think of a lot of ways to do it, I'm not convinced any is *better*.
const ChildContent = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #00324d;
    font-weight: bold;
    margin: 0px;
  }

  h1 {
    font-size: 60px;
  }

  h1 > span {
    color: #2b9cd9;
    font-style: italic;
  }
`

export default props => {
  let img = props.image
  let children = props.children //this represents the content that sits above "no one candidate is capable of taking on Donald Trump"

  return (
    <Root>
      <BackgroundImage src={img} />

      <InputContainer>
        <ChildContent>{children}</ChildContent>
        <StyledParagraph>
          No one candidate is capable of taking on Donald Trump and the
          billionaire class alone. There is only one way we win - and that is
          together.
        </StyledParagraph>
        <CallToActionHeader>
          Add your name to tell Bernie you're in!
        </CallToActionHeader>
        <TemporaryInputBox type="email" placeholder="Email Address*" />
        <TemporaryInputBox type="zip" placeholder="Zip Code*" />
        <TemporaryInputBox type="phone" placeholder="Phone Number (optional)" />
        <RedButton fullWidth>Add Your Name</RedButton>
        <SmallPrint>
          Mobile alerts from Bernie 2020. Periodic messages. Bernie 2020 will
          never charge for these updates, but carrier message & data rates may
          apply. Text STOP to 67760 to stop receiving messages. Text HELP to
          67760 for more information. <a href="#">Terms & Conditions</a>
        </SmallPrint>
      </InputContainer>
      <ImageOverlayGradient />
    </Root>
  )
}
