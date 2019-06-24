import React from "react"
import { StyledInfo } from "../styles/components"

const Info = () => {
  return (
    <StyledInfo>
      <div>
        <h2>¿Qué es Gatsby?</h2>
        <p>
          Gataby es un Framework abierto y gratuito basado en React y Graphql
          para crear sitios y aplicaciones increíblemente rápidas y seguras, ya
          que se construye en el servidor y te entrega una aplicación que se
          siente como una spa (single page application).
        </p>
      </div>
      <img src="https://i.postimg.cc/bwF97RFP/JAM.png" alt="JAM Stack" />
      <div>
        <h2>JAM Stack</h2>
        <p>
          Arquitectura de desarrollo web moderna basada en <span>J</span>
          avaScript del lado del cliente, <span>A</span>PI reutilizables y{" "}
          <span>M</span>arcado precompilado. Crea sitiios que se sienten como
          aplicaciones sin necesidad de servidores, el primer factor de
          vulnerabilidad en tu stack.
        </p>
      </div>
    </StyledInfo>
  )
}

export default Info
