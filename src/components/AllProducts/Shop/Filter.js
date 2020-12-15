import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown as BootstrapDropdown } from 'react-bootstrap'
import './shop.css'

const Dropdown = (props) => {
  console.log(props)
  return (
    <BootstrapDropdown>
      <BootstrapDropdown.Toggle variant="success" id="dropdown">
        <span>Selection</span>
      </BootstrapDropdown.Toggle>

      <BootstrapDropdown.Menu>
        {props.products.map((category, index) => (
          <BootstrapDropdown.Item
            key={index}
            onClick={(event) => {
              console.log(event.target.text)
              props.setSelected(event.target.text)
            }}
            value={category}
          >
            {category}
          </BootstrapDropdown.Item>
        ))}
      </BootstrapDropdown.Menu>
    </BootstrapDropdown>
  )
}

function Filter(props) {
  console.log(props.products)
  const [typeFilter, setTypeFilter] = useState('')

  const itemsToShow = props.products
    .filter((products) => {
      if (typeFilter) {
        return products.category === typeFilter
      }
      return true
    })
    .map((products, i) => {
      return (
        <>
          <Link to={`/product/${products._id}`}>
            <img src={products.image} alt="" style={{ borderRadius: '15px' }} />
          </Link>

          <h1 className="product-title">{products.title}</h1>
          <h1 className="product-price">${products.price}</h1>
        </>
      )
    })

  return (
    <>
      <Dropdown
        products={['Succulents', 'Cacti', 'Florals', 'Palms', 'Pothos']}
        setSelected={setTypeFilter}
      />
      {itemsToShow}
    </>
  )
}

export default Filter
