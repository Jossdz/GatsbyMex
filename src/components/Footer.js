import React from "react"
import { StyledFooter } from "../styles/components"
import Button from "./Button"

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://gatsbsday.boletia.com/">
          <Button text="Registro" small />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="https://www.gatsbyjs.org/contributing/code-of-conduct/">
              Código de conducta
            </a>
          </li>
        </ul>
      </nav>
    </StyledFooter>
  )
}

export default Footer
