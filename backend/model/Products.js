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
    name: 'Lula Garden Succulents',
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
      'https://www.plants.com/images/r_preview%20new_20200117-1579282468048.jpeg',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Safari Animal Succulents',
    price: 29.99,
    image:
      'https://www.plants.com/images/r_177604ger_20201027-1603831514550.jpg',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Wood Rectangle Succulents',
    price: 49.99,
    image:
      'https://www.plants.com/images/r_1566419432375_20190821-1566419433339_20191127-1574831465024.png',
    id: 3,
    category: 'Succulents'
  },
  {
    name: 'Rose Garden Succulent',
    price: 32.99,
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
