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
      }
    `
  )

  return <Img fluid={data[name].childImageSharp.fluid} />
}
