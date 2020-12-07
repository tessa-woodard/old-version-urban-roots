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
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/dish-garden.jpg?raw=true',
    id: 1,
    category: 'Succulents'
  },
  {
    name: 'Wood Succulent Garden',
    price: 59.99,
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/wood-garden.png?raw=true',
    id: 2,
    category: 'Succulents'
  },
  {
    name: 'Black Echevaria Succulent',
    price: 25.99,
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/echevaria.jpg?raw=true',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Rose Garden Succulents',
    price: 54.99,
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/lula.jpeg?raw=true',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Succulent Garden',
    price: 29.99,
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/succulent.jpg?raw=true',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Safari Animal Succulents',
    price: 29.99,
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/animal.jpg?raw=true',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Wood Rectangle Succulents',
    price: 49.99,
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/rectangle.png?raw=true',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Rose Garden Succulent',
    price: 32.99,
    image:
      'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/rose.jpeg?raw=true',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Hoya Heart Succulent',
    price: 35.99,
    image: 'https://www.plants.com/images/r_177062D_20200929-1601388831633.jpg',
    id: 3,
    category: 'Succulents'
  }
)

module.exports = Product
