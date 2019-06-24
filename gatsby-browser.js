/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const { GlobalStyles } = require("./src/styles")
const React = require("react")

exports.wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  )
}
