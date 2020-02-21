import React from "react"
import { StyledButton } from "../styles/components"

const Button = ({ text, small }) => {
  return <StyledButton small={small}>{text}</StyledButton>
}

export default Button
