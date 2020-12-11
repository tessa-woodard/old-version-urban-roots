import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './shop.css'

class Shop extends React.Component {
  state = {
    title: '',
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
          {this.state.products.map((product) => (
            <div id="cardItem" className="col-xs-1 mx-5 my-5">
              <div
                className="card"
                style={{
                  border: 'none',
                  minHeight: '100%'
                }}
              >
                <div style={{ maxHeight: '500px' }}>
                  <Link to={`/product/${product._id}`}>
                    <img
                      src={product.image}
                      alt=""
                      style={{ borderRadius: '15px' }}
                    />
                  </Link>
                </div>
                <div className="card-body text-center">
                  <h1 className="product-title">{product.title}</h1>
                  <h1 className="product-price">${product.price}</h1>
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
