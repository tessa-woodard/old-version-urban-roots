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
              <h1 className="product-title">{this.state.product.title}</h1>
              <Stars reviews={19} stars={4.5} />
              <br />
              <h1 className="price">${this.state.product.price}</h1>
              <br />
              <p className="info">{this.state.product.description}</p>
              <br />
              <p className="info">
                <span>Available : In Stock </span>
              </p>

              <p className="info">
                <span>Type : {this.state.product.category}</span>
              </p>
              <br />
              <button
                class="snipcart-add-item btn btn-outline-dark"
                data-item-id={this.state.product._id}
                data-item-price={this.state.product.price}
                // data-item-url="http://localhost:3000/product/5fd816c367878752c4330a1f"
                data-item-description={this.state.product.description}
                data-item-image={this.state.product.image}
                data-item-name={this.state.product.title}
              >
                Add to cart
              </button>
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
    gap: 3rem;
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  .product-img {
    width: 85%;
    display: block;
    padding: 3rem 1rem;
    object-fit: cover;
  }
  .product-title {
    font-family: 'Playfair Display', serif;
    font-size: 3.3rem;
    font-weight: bold;
  }
  .price {
    font-size: 2rem;
    color: olivedrab;
    font-weight: 600;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 600px 1fr;
    span {
      font-weight: 600;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    /* .price {
      font-size: 1.25rem;
    } */
  }
`

export default withRouter(ProductById)
