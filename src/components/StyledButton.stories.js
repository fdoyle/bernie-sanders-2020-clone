import React from "react"
import {RedButton, BlueButton, WhiteButton} from "./StyledButton"
import { Button } from "@storybook/react/demo"


export default {
    title: "Button",
    component: Button,
}
  
export const Red = () => {
    return <RedButton>Hello World</RedButton>
}

export const Blue = () => {
    return <BlueButton>Hello World</BlueButton>
}

export const White = () => <WhiteButton>Hello World</WhiteButton>

export const FullWidth = () => <BlueButton fullWidth>Hello World</BlueButton>