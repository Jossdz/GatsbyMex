import React from "react"
import { StyledOrganizers } from "../styles/components"
import Image from "./image"

const Organizers = () => {
  return (
    <StyledOrganizers>
      <h2>Organizadores</h2>
      <article>
        <Image name="correa" />
        <div>
          <h2>
            José <br />
            Correa
          </h2>
          <small>@jossdz</small>
        </div>
      </article>
      <article>
      <Image name="nieva" />
        <div>
          <h2>
            Mike <br />
            Nieva
          </h2>
          <small>@mikenieva</small>
        </div>
      </article>
    </StyledOrganizers>
  )
}

export default Organizers
