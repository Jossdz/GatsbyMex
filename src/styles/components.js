import styled from "styled-components"
import { above } from "./"

export const StyledHero = styled.main`
  box-sizing: border-box;
  padding: 60px 12%;
  width: 100%;
  min-height: 750px;
  height: 100vh;
  background-color: #663399;
  height: 100vh;

  background-image: url("https://i.postimg.cc/3N2mShMt/bubbles.png");
  background-repeat: repeat;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
    margin-bottom: 60px;
  }
  #info {
    align-items: flex-start;

    a {
      width: 100%;
    }
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
    font-size: 1.2rem;
  }
  a {
    color: #ffdf37;
    text-decoration: none;
    font-size: 1.1rem;
    cursor: pointer;
    small {
      svg {
        vertical-align: middle;
      }
    }
  }
  button {
    margin-top: 10px;
  }
  ${above.large`
    display: flex;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
    & > div {
      width:400px;
    }
    & #info{
      display: flex;
      justify-content: center;
      align-items: end;
      margin: 0;
      h2{
        font-size: 1.3rem;
        margin: 0;
      }
      p{
        font-size: 1rem;
      }
      a{
        font-size: 1.1rem;
      }
      button{
        margin-top: 30px;
        align-self: center;
      }
    }

  `}
`

export const StyledButton = styled.button`
  width: 100%;
  display: block;
  ${props => (props.small ? `max-width: 350px;` : "")}
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
    font-size: 1.1rem;
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
  ${above.large`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 50vh;
    min-height: 0;
    div{
      width: 30%;
    }
    & h2 {
      font-size: 1.6rem;
    }
    & p {
      font-size: 1rem;
      color: #393939;
    }
    &::before {
      width:200px;
      height:200px;
      left: -85px;
      top: 10px;
    }
    &::after {
      width:200px;
      height: 200px;
      right: -90px;
    }
  `}
`

export const StyledSpeakers = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  box-sizing: border-box;
  padding: 0 12%;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 30px 0;
  & .gatsby-image-wrapper {
    width: 124px;
    max-width: 200px;
    height: 124px;
    max-height: 200px;
    border-radius: 50%;
  }
  article {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    h2 {
      font-size: 1.1rem;
      margin: 0;
      color: #915fc3;
    }

    small {
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
  ${above.large`
    position: relative;
    flex-direction: row;
    height: 50vh;
    min-height: 0;
    & > h2{
      position: absolute;
      top: 30px;
      font-size: 1.8rem;
    }
    article h2 {
      font-size: 1.3rem;
    }
    article small{
      font-size: 0.9rem;
    }
    article:nth-child(odd){
      flex-direction: column;
    }
    article:nth-child(even){
      flex-direction: column-reverse;
    }
  `}
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
  ${above.large`
    position:relative;
    flex-direction: row;
    height: 50vh;
    min-height: 0;
    & > h2{
      position: absolute;
      top: 30px;
      font-size: 1.8rem;
    }
  `}
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div > a {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  nav {
    background-color: #393939;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      list-style: none;
      padding: 0;
    }
  }
`

export const AgendaList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  justify-content: space-evenly;
  align-items: center;
  margin: 0;
  padding: 0 12%;
  position: relative;
  overflow: hidden;
  & > h2 {
    justify-self: flex-end;
    color: #663399;
    margin: 0;
  }
  div {
    width: 100%;
    li {
      margin: 5px 0;
    }
  }
  & li {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
    color: #323232;
    font-size: 1.1rem;
  }
  &::before {
    content: " ";
    background-image: url("https://i.postimg.cc/wThL2kVn/back.png");
    background-size: cover;
    width: 380px;
    height: 380px;
    display: block;
    position: absolute;
    opacity: 0.25;
    top: 30px;
    left: -10px;
  }
  ${above.large`
  height: 55vh;
    & > h2{
      position: absolute;
      top: 30px;
      font-size: 1.8rem;
    }
    div{
      width: 28%;
    }
    & > li{
      width: 28%;
    }
    flex-direction: row;
    &::before {
      width: 500px;
    height: 500px;
    }
  `}
`
export const AgendaItem = styled.li`
  margin: 0;

  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 5px;
  background-color: ${props =>
    props.type === "conference"
      ? "rgba(246,178,62, 0.3)"
      : props.type === "workshop"
      ? "rgba(102,51,153, 0.3)"
      : "none"};
  & span {
    font-size: 1rem;
    font-weight: 900;
  }
`

export const AgendaInfo = styled.div`
  padding: 0 12%;
  display: inline-block;
  p::before {
    content: " ";
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props =>
      props.type === "conference"
        ? "rgba(246,178,62, 0.7)"
        : props.type === "workshop"
        ? "rgba(102,51,153, 0.7)"
        : "none"};
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px;
  }
`
