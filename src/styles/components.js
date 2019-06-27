import styled from "styled-components"

export const StyledHero = styled.main`
  box-sizing: border-box;
  padding: 60px 12%;
  width: 100%;
  height: 100vh;
  background-color: #663399;
  height: 100vh;
  min-height: 600px;
  background-image: url("https://i.postimg.cc/3N2mShMt/bubbles.png");
  background-repeat: repeat;
  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 90px;
  }
  div > div {
    width: 100%;
  }
  div > h1 {
    color: white;
    margin: -6px 15px 0 0;
    font-size: 1.1rem;
  }
  h2 {
    color: #73fff7;
    font-size: 1.1rem;
    font-weight: 100;
  }
  p {
    color: white;
    font-weight: 100;
    font-size: 0.8rem;
  }
  a {
    color: #ffdf37;
    text-decoration: none;
    cursor: pointer;
    small {
      svg {
        vertical-align: middle;
      }
    }
  }
  button {
    margin-top: 90px;
  }
`

export const StyledButton = styled.button`
  width: 100%;
  display: block;
  max-width: 320px;
  padding: 1rem 3rem;
  border-radius: 13px;
  background-image: linear-gradient(91deg, #ffdf37, #fde97d);
  border: none;
  font-family: "Futura";
  color: #663399;
  font-size: 1.2rem;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s all ease;
  &:hover {
    transform: scale(1.1);
  }
`

export const StyledInfo = styled.main`
  padding: 30px 12%;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  min-height: 600px;
  &::before {
    content: " ";
    background-image: url("https://i.postimg.cc/fLzjGgj8/graphql.png");
    background-size: cover;
    width: 110px;
    height: 110px;
    display: block;
    position: absolute;
    top: 10px;
    left: -50px;
  }
  &::after {
    content: " ";
    background-image: url("https://i.postimg.cc/nz3YpY3p/data-image-svg-xml.png");
    background-size: cover;
    width: 110px;
    height: 110px;
    display: block;
    position: absolute;
    bottom: 30%;
    right: -50px;
  }
  & h2 {
    font-size: 1.45rem;
  }
  & p {
    font-size: 0.9rem;
    color: #393939;
  }
  & h2:nth-child(1) {
    color: #663399;
  }
  & div:nth-child(3) {
    h2 {
      color: #ffb238;
    }
  }
  img {
    max-width: 225px;
  }
  & span {
    color: #ffb238;
  }
`

export const StyledSpeakers = styled.section`
  height: 100vh;
  width: 100%;
  min-height: 600px;
  display: flex;
  box-sizing: border-box;
  padding: 0 12%;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  & .gatsby-image-wrapper {
    width: 124px;
    max-width: 200px;
    height: 124px;
    max-height: 200px;
  }
  article {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2 {
      font-size: 1.1rem;
      margin: 0;
    }
    &:nth-child(2) h2 {
      color: #ffd188;
    }
    &:nth-child(3) h2 {
      color: #ffe76c;
    }
    &:nth-child(4) h2 {
      color: #915fc3;
    }
    & small {
      font-weight: 300;
      color: #707070;
      font-family: "Futura";
    }
  }
  & > h2 {
    justify-self: flex-end;
    color: #663399;
    margin: 0;
  }
`

export const StyledOrganizers = styled.section`
  height: 100vh;
  width: 100%;
  min-height: 600px;
  display: flex;
  box-sizing: border-box;
  padding: 0 12%;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  article {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h2 {
      font-size: 1.1rem;
      margin: 0.5rem 0 0;
      color: #663399;
    }
    & small {
      font-weight: 300;
      color: #707070;
      font-family: "Futura";
    }
  }
  & .gatsby-image-wrapper {
    width: 124px;
    max-width: 200px;
    height: 124px;
    max-height: 200px;
    border-radius: 50%;
  }
  & > h2 {
    justify-self: flex-end;
    color: #ffb238;
    margin: 0;
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  div {
    padding: 3rem 12%;
    background-color: #663399;
    background-image: url("https://i.postimg.cc/3N2mShMt/bubbles.png");
    background-repeat: repeat;
  }
  nav {
    background-color: #393939;
    color: white;
    ul {
      list-style: none;
    }
  }
`
