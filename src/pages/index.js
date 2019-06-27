import React from "react"

import { SEO, Hero, Info, Speakers, Organizers } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Gatsby Mexico meetup" description="Evento para conocer gatsby, la tecnología más moderna para generar sitios estáticos y la arquitectura moderna basada en javascript: JAM Stack."/>
    <Hero />
    <Info />
    <Speakers />
    <Organizers />
  </>
)

export default IndexPage
