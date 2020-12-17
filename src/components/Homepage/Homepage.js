import React from 'react'
import styled from 'styled-components'
import homepageMain from '../../assets/homepage-main.jpeg'
import homepageAccent from '../../assets/homepage-accent.webp'
// import Carousel from './Carousel'

const Homepage = () => {
  return (
    <>
      <Wrapper className="section-center">
        <article className="content">
          <h1>Urban Roots</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            iure quasi odit tenetur
          </p>
          <a href="/shop" class="btn btn-outline-dark lg">
            Shop Now
          </a>
        </article>
        <article className="img-container">
          <img src={homepageMain} alt="nice table" className="main-img" />
          <img
            src={homepageAccent}
            alt="person working"
            className="accent-img"
          />
        </article>
      </Wrapper>
      {/* <Carousel /> */}
    </>
  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  padding: 5rem;
  .img-container {
    display: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      font-size: 50;
      font-style: italic;
      letter-spacing: 0.8rem;
      margin: 0;
      font-family: "'Playfair Display', serif";
      color: #474747;
    }
    p {
      font-size: 1.25rem;
      color: #707070;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: 5px;
      border: solid 3px black;
      display: block;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50%;
      border: solid 3px black;
      transform: translateX(-40%);
      border-radius: 5px;
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 20%;
      height: 90%;
      background: #355c37;
      border: solid 3px black;
      bottom: 0%;
      left: -13%;
      border-radius: 5px;
    }
  }
`

export default Homepage
