import React from "react"
import { linkTo } from "@storybook/addon-links"
import { Welcome } from "@storybook/react/demo"
import { BannerAnchor, BannerLink } from "./CallToActionBanner"

export default {
  title: "call to action banner",
  component: BannerAnchor,
}

export const anchor = () => <BannerAnchor href="#">Hello World</BannerAnchor>

export const link = () => <BannerLink to="#">Hello World</BannerLink>
