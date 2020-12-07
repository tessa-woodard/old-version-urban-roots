const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number,
    required: false
  },
  image: {
    type: String,
    required: true
  },
  quantity: {
    type: Number
  },
  id: {
    type: Number
  },
  category: {
    type: String
  }
})

//Initial database structure. These are the products.
const Product = mongoose.model('Product', productSchema)

Product.create(
  {
    name: 'Succulent Dish Garden',
    price: 59.99,
    image: 'https://www.plants.com/images/r_177068S_20200929-1601407137754.jpg',
    id: 1,
    category: 'Succulents'
  },
  {
    name: 'Wood Succulent Garden',
    price: 59.99,
    image:
      'https://www.plants.com/images/r_RECLAIMED_20191121-1574352224619.png',
    id: 2,
    category: 'Succulents'
  },
  {
    name: 'Black Echevaria Succulent',
    price: 25.99,
    image:
      'https://www.plants.com/images/r_177066BLK_20200929-1601408271520.jpg',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Lula Garden Succulents',
    price: 54.99,
    image: 'https://www.plants.com/images/r_large_20200604-1591280842606.jpeg',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Flaming Katy',
    price: 17,
    image:
      'https://www.plants.com/images/r_1566418513060_20190821-1566418513838.png',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Flaming Katy',
    price: 17,
    image:
      'https://www.plants.com/images/r_1566418513060_20190821-1566418513838.png',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Flaming Katy',
    price: 17,
    image:
      'https://www.plants.com/images/r_1566418513060_20190821-1566418513838.png',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Flaming Katy',
    price: 17,
    image:
      'https://www.plants.com/images/r_1566418513060_20190821-1566418513838.png',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Flaming Katy',
    price: 17,
    image:
      'https://www.plants.com/images/r_1566418513060_20190821-1566418513838.png',
    id: 3,
    category: 'Succulents'
  }
)

module.exports = Product
