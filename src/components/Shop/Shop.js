import React from 'react'
import axios from 'axios'
// import './shop.css'

class Shop extends React.Component {
  state = {
    name: '',
    price: '',
    image: '',
    products: []
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = () => {
    axios
      .get('/api/products/shop')
      .then((response) => {
        const data = response.data
        this.setState({ products: data })
        console.log('Data has been received!!')
      })
      .catch(() => {
        alert('Error retrieving data!!!')
      })
  }

  displayProducts = (products) => {
    return products.map((product, index) => (
      <div className="product py-5">
        <div className="row">
          <div key={index} className="mx-auto my-3">
            <div className="card" style={{ minHeight: '100%' }}>
              <div style={{ maxHeight: '500px' }}>
                <img
                  src={product.image}
                  alt="plant-img"
                  className="card-img-top"
                />
              </div>
              <div className="card-body text-center">
                <div className="product-text">
                  <h1>{product.name}</h1>
                  <h1>${product.price}</h1>
                </div>
                <button type="button" class="btn btn-outline-dark">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }
  render() {
    return <div>{this.displayProducts(this.state.products)}</div>
  }
}

export default Shop

{
  /* <div className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <div style={{ maxHeight: "500px" }}>
          <Img fluid={product.image.fluid} className="card-img-top" />
          <div className="card-body text-center">
            <h6>{product.title}</h6>
            <h6>${product.price}</h6>
            <button
              className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
              data-item-id={product.id}
              data-item-name={product.title}
              data-item-price={product.price}
              data-item-image={product.image.fluid.src}
              data-item-url="https://impresso-expresso.netlify.app/products"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div> */
}
