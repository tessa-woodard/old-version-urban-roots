import React from 'react'
import axios from 'axios'
import './shop.css'

class Shop extends React.Component {
  state = {
    name: '',
    price: '',
    image: '',
    products: []
  }

  async componentDidMount() {
    await axios
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

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.products.map((product, index) => (
            <div key={index} id="cardItem" className="col-xs-1 mx-5 my-5">
              <div className="card" style={{ minHeight: '100%' }}>
                <div style={{ maxHeight: '500px' }}>
                  <img src={product.image} alt="plant-img" />
                </div>
                <div className="card-body text-center">
                  <h1 className="product-name">{product.name}</h1>
                  <h1 className="product-name">${product.price}</h1>
                  <button type="button" class="btn btn-outline-dark">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Shop
