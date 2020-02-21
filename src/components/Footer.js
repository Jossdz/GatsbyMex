import React from "react"
import { StyledFooter } from "../styles/components"
import Button from "./Button"

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://www.eventbrite.es/e/gatsby-mexico-tickets-64944088517?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing">
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
