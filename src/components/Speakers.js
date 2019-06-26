import React from "react"
import { StyledSpeakers } from "../styles/components"
import Image from "./image"

const Speakers = () => {
  return (
    <StyledSpeakers>
      <h2>Speakers</h2>
      <Image name="quezada" />
      <Image name="kaufman" />
      <Image name="rojas" />
    </StyledSpeakers>
  )
}

export default Speakers
