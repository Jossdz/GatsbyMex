import { css, createGlobalStyle } from "styled-components"

export const size = {
  small: 400,
  large: 1000,
}

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
  @font-face {
    font-family: "Futura";
    src: url("./futur.ttf") format('truetype');
  }
  * {
    font-family: 'Open Sans', sans-serif
  }
  h1,h2,h3,h4{
    font-family: 'Futura';
  }
  .___gatsby{
    position: absolute;
  }

  body{
    margin: 0;
  }

  a{
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`
