import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default ({ name }) => {
  const data = useStaticQuery(
    graphql`
      query GET_IMAGE {
        logo: file(relativePath: { eq: "gatsby_logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        quezada: file(relativePath: { eq: "quezada.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kaufman: file(relativePath: { eq: "kaufman.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rojas: file(relativePath: { eq: "rojas.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  return <Img fluid={data[name].childImageSharp.fluid} />
}
