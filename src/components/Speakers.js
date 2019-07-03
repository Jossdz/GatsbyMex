import React from "react"
import { StyledSpeakers } from "../styles/components"
import Image from "./image"

const Speakers = () => {
  return (
    <StyledSpeakers>
      <h2>Ponentes</h2>
      <article>
        <div>
          <h2>
            Rodrigo <br />
            Quezada
          </h2>
          <a href="#">
            <small>@rodikana</small>
          </a>
        </div>
        <Image name="quezada" />
      </article>
      <article>
        <Image name="kaufman" />
        <div>
          <h2>
            Richard <br />
            Kaufman
          </h2>
          <a href="#">
            <small>@sparragus</small>
          </a>
        </div>
      </article>
      <article>
        <div>
          <h2>
            Yony <br />
            Rojas
          </h2>
          <a href="#">
            <small>@yony_dev</small>
          </a>
        </div>
        <Image name="rojas" />
      </article>
    </StyledSpeakers>
  )
}

export default Speakers
