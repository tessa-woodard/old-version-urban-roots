import React from 'react'

const Carousel = () => {
  return (
    <>
      <Carousel className="carousel__item-container">
        <Carousel.Item>
          <img alt="" className="carousel__image" />
          <Carousel.Caption className="carousel__caption">
            <h3>-Star Magazine</h3>
            <p>
              This restaurant is the best in North-West Colorado! Stop by if
              your in the boulder area
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" className="carousel__image" />
          <Carousel.Caption className="carousel__caption">
            <h3>-Rolling Stones</h3>
            <p>They got beer and lots of it!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" className="carousel__image" />
          <Carousel.Caption className="carousel__caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img alt="" className="carousel__image" />
          <Carousel.Caption className="carousel__caption">
            <h3>Fourth slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Carousel
