import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Banner = css`
  text-align: center;
  background-color: #339dd7;
  color: white;
  padding: 8px;
  font-size: 16px;
  margin: 0px;
  font-family: sans-serif;
  display: block;
  font-weight: bold;
  text-decoration: none;
`

export let BannerLink = styled(Link)`
  ${Banner}
`

export let BannerAnchor = styled.a`
  ${Banner}
`
