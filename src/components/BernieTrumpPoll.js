import React from "react"
import styled from "@emotion/styled"
import pollImage from "../images/bernie-trump.webp"
import { RedButton } from "./StyledButton"

const Root = styled.div`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(245, 246, 240, 1) 100%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #00324D;
  padding: 10px 20px;
`

const Title = styled.h1`
font-size: 60px;

    `

const PollChecklistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: start;
  font-family: sans-serif;
`

const PollImage = styled.img`
  max-height: 400px;
  max-width: 100%;
`

const DonateButtonContainer = styled.div`
  display: flex;
  margin: 0 20px;
  width: 100%;
  flex-wrap: wrap;
  max-width: 800px;
  flex-direction: row;
`

const DonateContainerChild = styled.div`
  flex: 0 0 33.3333%;
  box-sizing: border-box;

  align-items: stretch;
  display: ${props => (props.hideIfSmall ? "none" : "inline")};
  padding: 3px;
  @media (min-width: 700px) {
      flex 1;
    display: inline;
  }
`

const DonateButton = styled(RedButton)`
  padding: 10px 10px;
  font-size: 14px;
`

const NoBulletList = styled.li`
  list-style: none;
  display: inline;
  margin: 0 20px;
`

const CheckedListItem = styled.li`
  margin: 18px 0px;
  &:before {
    content: "✓ ";
  }
`

const ActBlueInfo = styled.p`
  color: #83899C;
  font-size: 14px;

`

export default () => {
  return (
    <Root>
      <Title>Bernie beats Trump</Title>
      <PollChecklistContainer>
        <PollImage src={pollImage} />
        <NoBulletList>
          <CheckedListItem>
            Only campaign with more donations than Trump
          </CheckedListItem>
          <CheckedListItem>
            Beating Trump by 7+ points in 26 polls
          </CheckedListItem>
          <CheckedListItem>
            Fastest campaign ever to reach 1 million donors
          </CheckedListItem>
        </NoBulletList>
      </PollChecklistContainer>
      <h2>Join the movement to beat Trump and transform our country</h2>
      <DonateButtonContainer>
        {[2.7, 27, 50, 100, 270, 500, 1000].map(value => {
          return (
            <DonateContainerChild href="#" hideIfSmall={value >= 500}>
              <DonateButton fullWidth>
                ${value < 10 ? value.toFixed(2) : value}
              </DonateButton>
            </DonateContainerChild>
          )
        })}
        <DonateContainerChild>
          <DonateButton fullWidth>Other</DonateButton>
        </DonateContainerChild>
      </DonateButtonContainer>
      <ActBlueInfo>
        If you've saved payment info with ActBlue Express, your donation will go
        through immediately.
      </ActBlueInfo>
    </Root>
  )
}
