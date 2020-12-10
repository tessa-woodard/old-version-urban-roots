import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router'

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
      <>
        <div>{this.state.product.title}</div>
        <div>{this.state.product.description}</div>
        <div>${this.state.product.price}</div>
        <img src={this.state.product.image} alt="" />
      </>
    )
  }
}

export default withRouter(ProductById)
