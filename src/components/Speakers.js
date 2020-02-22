import React from "react"
import { StyledSpeakers } from "../styles/components"
import Image from "./image"

const Speakers = () => {
  return (
    <StyledSpeakers>
      <h2>Ponentes</h2>
      <article>
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jmolivas/"
            target="_blank"
          >
            <h2>
              Jesus <br />
              Olivas
            </h2>

            <small>@jmolivas</small>
          </a>
        </div>
        <Image name="jesus" />
      </article>
      <article>
        <Image name="bliss" />
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/hectorbliss/"
            target="_blank"
          >
            <h2>
              Hector <br />
              Bliss
            </h2>

            <small>@HectorBlisS</small>
          </a>
        </div>
      </article>
      <article>
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/diurivj"
            target="_blank"
          >
            <h2>
              Diego <br />
              Vazquez
            </h2>

            <small>@diurivj</small>
          </a>
        </div>
        <Image name="diurivj" />
      </article>
      <article>
        <Image name="correa" />
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jossdz"
            target="_blank"
          >
            <h2>
              Joss <br />
              Correa
            </h2>

            <small>@jossdz</small>
          </a>
        </div>
      </article>
      <article>
        <div>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/salemm-jugr"
            target="_blank"
          >
            <h2>
              Emmanuel <br />
              Juárez
            </h2>

            <small>@salemm-jugr</small>
          </a>
        </div>
        <Image name="emma" />
      </article>
    </StyledSpeakers>
  )
}

export default Speakers
