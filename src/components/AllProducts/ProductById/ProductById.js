import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import Stars from './Stars'
// import { Link } from 'react-router-dom'

class ProductById extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      product: []
    }
  }

  async componentDidMount() {
    await axios
      .get(`/api/products/shop/${this.props.match.params.productId}`)
      .then((res) => {
        const data = res.data
        this.setState({ product: data })
        console.log('Data has been received!!')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <Wrapper>
        <section className="section section-center page">
          {/* <Link to="/shop" className="btn btn-outline-dark">
                back to products
              </Link> */}
          <div className="product-center">
            <img
              src={this.state.product.image}
              alt=""
              className="product-img"
            />
            <section className="content">
              <h1>{this.state.product.title}</h1>
              <br />
              <Stars reviews={19} stars={4.5} />
              <br />
              <h2 className="price">${this.state.product.price}</h2>
              <br />
              <p className="info">{this.state.product.description}</p>
              <br />
              <button class="btn btn-outline-dark">Add To Cart</button>
            </section>
          </div>
        </section>
      </Wrapper>
    )
  }
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .product-img {
    width: 85%;
    display: block;
    padding: 3rem 5rem;
    object-fit: cover;
  }
  .price {
    color: olivedrab;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 525px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default withRouter(ProductById)
