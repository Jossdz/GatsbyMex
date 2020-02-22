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
        jesus: file(relativePath: { eq: "Jesus.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bliss: file(relativePath: { eq: "bliss.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        diurivj: file(relativePath: { eq: "diurivj.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        emma: file(relativePath: { eq: "emma.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        nieva: file(relativePath: { eq: "nieva.png" }) {
          childImageSharp {
            fluid(maxWidth: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        correa: file(relativePath: { eq: "correa.png" }) {
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
