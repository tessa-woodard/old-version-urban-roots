import React from 'react'
import { Carousel } from 'react-bootstrap'
import './carousel.css'

const Images = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item className="carousel-item">
          <img
            src="https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/profile.jpg?raw=true"
            alt=""
          />
          <Carousel.Caption>
            <h3>Rose Garden Succulents</h3>
            <p>
              Succulents made even easier to maintain than they already are? Yes
              way. How about a garden of 3 in a beautiful eco-friendly gift box
              that doubles as a planter? Now we’re talking easy plant parenting!
              Plant Perk: Garden gifting made exceptionally easy. Just add
              water!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/background.jpeg?raw=true"
            alt=""
            className="carousel-image"
          />
          <Carousel.Caption>
            <h3>Rose Garden Succulents</h3>
            <p>
              Succulents made even easier to maintain than they already are? Yes
              way. How about a garden of 3 in a beautiful eco-friendly gift box
              that doubles as a planter? Now we’re talking easy plant parenting!
              Plant Perk: Garden gifting made exceptionally easy. Just add
              water!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            src="https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/background.jpeg?raw=true"
            alt=""
            className="carousel-image"
          />
          <Carousel.Caption>
            <h3>Rose Garden Succulents</h3>
            <p>
              Succulents made even easier to maintain than they already are? Yes
              way. How about a garden of 3 in a beautiful eco-friendly gift box
              that doubles as a planter? Now we’re talking easy plant parenting!
              Plant Perk: Garden gifting made exceptionally easy. Just add
              water!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Images
