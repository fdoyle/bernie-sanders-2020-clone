import styled from "@emotion/styled"

export const RedButton = styled.button`
  font-size: 17px;
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  text-decoration: none;
  color: white;
  border: none;
  background-color: #F51E47;
  padding: 12px;
  border-radius: 4px;
  width: ${props => props.fullWidth ? "100%" : "auto"};
`

export const BlueButton = styled(RedButton)`
  background-color: #339dd7;
`

export const WhiteButton = styled(RedButton)`
  color: #0c2d42;
  background: white;
`
