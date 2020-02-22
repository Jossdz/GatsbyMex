import React from "react"
import { StyledHero } from "../styles/components"
import Image from "../components/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faMapMarkerAlt,
  faLongArrowAltRight,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons"
import Button from "./Button"

const Hero = () => {
  return (
    <StyledHero>
      <div>
        <Image name="logo" />
        <h1>Ciudad de México</h1>
      </div>
      <div id="info">
        <h2>
          <FontAwesomeIcon icon={faCalendarCheck} />
          &nbsp; Marzo 21 &nbsp;
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          &nbsp; Ironhack Mex
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
        <a href="https://gatsbsday.boletia.com/">
          <Button text="Registro" />
        </a>
      </div>
    </StyledHero>
  )
}

export default Hero
