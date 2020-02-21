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

          <small>@rodikana</small>
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

          <small>@sparragus</small>
        </div>
      </article>
      <article>
        <div>
          <h2>
            Yony <br />
            Rojas
          </h2>

          <small>@yony_dev</small>
        </div>
        <Image name="rojas" />
      </article>
    </StyledSpeakers>
  )
}

export default Speakers
