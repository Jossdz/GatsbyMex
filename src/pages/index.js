import React from "react"

import { SEO, Hero, Info, Speakers, Organizers, Footer } from "../components"

const IndexPage = () => (
  <>
    <SEO
      title="Gatsby Mexico meetup"
      description="Evento para conocer gatsby, la tecnología más moderna para generar sitios estáticos y la arquitectura moderna basada en javascript: JAM Stack."
    />
    <Hero />
    <Info />
    <Speakers />
    <Organizers />
    <Footer />
  </>
)

export default IndexPage
