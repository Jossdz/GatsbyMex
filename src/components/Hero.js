import React from "react"
import { StyledHero } from "../styles/components"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"
import Button from "./Button"

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <Image name="logo" />
        <h1>México meetup</h1>
      </div>
      <div id="info">
        <h2>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp; Agosto 17 · Ironhack Mex
        </h2>
        <p>
          Asiste a las conferencias para aprender a diseñar, desarrollar y
          desplegar aplicaciones modernas sobre el JAM stack. Contruye sitios y
          aplicaciones rápidas, seguras y sin servidores.
        </p>
        <a href="#agenda">
          <small>
            Ver agenda <FontAwesomeIcon icon={faLongArrowAltRight} />
          </small>
        </a>
        <a href="https://www.eventbrite.es/e/gatsby-mexico-tickets-64944088517?utm-medium=discovery&utm-campaign=social&utm-content=attendeeshare&aff=escb&utm-source=cp&utm-term=listing">
          <Button text="Registro" />
        </a>
      </div>
    </StyledHero>
  )
}

export default Hero
