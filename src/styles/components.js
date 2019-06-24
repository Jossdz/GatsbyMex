import styled from "styled-components"

export const StyledHero = styled.main`
  box-sizing: border-box;
  padding: 60px 12%;
  width: 100%;
  height: 100vh;
  background-color: #663399;
  height: 100vh;
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
    font-size: 0.9rem;
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
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
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
