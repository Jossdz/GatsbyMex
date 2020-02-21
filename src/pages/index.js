import React from "react"

import {
  SEO,
  Hero,
  Info,
  Speakers,
  Organizers,
  Footer,
  Agenda,
} from "../components"

const IndexPage = () => (
  <>
    <SEO
      title="Gatsby Days Mexico City"
      description="Evento para conocer gatsby, la tecnología más moderna para generar sitios estáticos y la arquitectura moderna basada en javascript: JAM Stack."
    />
    <Hero />
    <Info />
    <Agenda />
    <Speakers />
    <Organizers />
    <Footer />
  </>
)

export default IndexPage
