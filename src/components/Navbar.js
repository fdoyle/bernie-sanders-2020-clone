import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import logo from "../images/bernie-logo.svg"

const drawerBreak = "700px"

//root container for the nav bar
//contains the logo, nav list, donate button, and show menu button
const Root = styled.div`
  position: sticky;
  background: white;
  top: 0;
  display: flex;
  align-items: center;
  z-index: 100;
  box-shadow: 0px 0px 4px grey;
`

const Spacer = styled.div`
  flex: 1;
`

const Drawer = styled.div`
  background: white;
  position: absolute;
  // height: calc(100vh - 100%);
  // top: 100%;

  right: 0;
  width: 50%;
  margin: 0;
  padding: 0;
  transition: all 0.5s;
  overflow: hidden;

  @media only screen and (min-width: ${drawerBreak}) {
    position: static;
    width: auto;
    height: auto;
    top: auto;
  }
`

const CloseBackgroundButton = styled.div`
  position: absolute;
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  transition: background-color 0.5s;

  @media only screen and (min-width: ${drawerBreak}) {
    display: none;
  }
`

const baseNavItem = css`
  font-size: 18px;
  color: #0c2d42;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: none;
`

const DonateButton = styled.a`
  ${baseNavItem}
  color: white;
  background-color: #f00038;
  padding: 12px;
  border-radius: 4px;
`

const ToggleMenuButton = styled.button`
  ${baseNavItem}
  background: transparent;
  border: none;
  margin-left: 10px;
  @media only screen and (min-width: ${drawerBreak}) {
    display: none;
  }
`

const DrawerList = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  list-style-type: none;
  overflow: visible;
  align-items: flex-end;
  @media only screen and (min-width: ${drawerBreak}) {
    flex-direction: row;
    align-items: center;
  }
`

const DrawerLink = styled(Link)`
  ${baseNavItem}
  padding: 10px;
`

export default () => {
  let [isDrawerOpen, setDrawerOpen] = useState(false)
  let [iseMoreOpen, setMoreOpen] = useState(false)

  return (
    <Root
      css={css`
        padding: 4px 20px;
      `}
    >
      <Link to="/">
        <img
          css={css`
            height: 32px;
            padding: 10px;
          `}
          src={logo}
        />
      </Link>
      <Spacer></Spacer>
      <CloseBackgroundButton
        css={css`
          background-color: ${isDrawerOpen ? "#00000070" : "#00000000"};
          visibility: ${isDrawerOpen ? "auto" : "hidden"};
        `}
        onClick={() => setDrawerOpen(false)}
      />
      <div
        css={css`
        pointer-events: none;
          position: absolute;
          overflow: hidden;
          top: 100%;
          height: 100vh;
          right: 0;
          left: 0;
        `
        
        }>
        
      <Drawer
        css={css`
          right: ${isDrawerOpen ? "0" : "-50%"};
          height: 100%;
          pointer-events: auto;
        `}
      >
        <DrawerContent />
        </Drawer>
        
      </div>
      <DonateButton href="https://secure.actblue.com/donate/bern-site?refcode=splash-top-right">
        Donate
      </DonateButton>
      <ToggleMenuButton onClick={() => setDrawerOpen(!isDrawerOpen)}>
        Menu
      </ToggleMenuButton>
    </Root>
  )
}

const DrawerContent = () => {
  return (
    <DrawerList>
      <DrawerLink to="./meet-bernie">Meet Bernie</DrawerLink>
      <DrawerLink to="./issues">Issues</DrawerLink>
      <DrawerLink to="./volunteer">Volunteer</DrawerLink>
      <DrawerLink to="./events">Events</DrawerLink>
      <DrawerLink to="./store">Store</DrawerLink>
    </DrawerList>
  )
}
