const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
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

// Product.create(
//   {
//     title: 'Succulent Dish Garden',
//     description:
//       'Are you a sucker for succulents? It’s no surprise. Succulents have exotic beauty and are easy to care for! Our dish garden comes with a unique variety, adding lush color and lots of texture. And the neutral-toned bowl it’s designed in plays perfectly into any decorating style. Plant Perk: Succulents give a continuous burst of oxygen to freshen the air and improve breathing.',
//     price: 49.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/dish-garden.jpg?raw=true',
//     id: 1,
//     category: 'Succulents'
//   },
//   {
//     title: 'Wood Succulent Garden',
//     description:
//       'An assortment of succulents in three unique varieties, they arrive in a rustic square container of weathered reclaimed wood. Neglect tolerant and room enhancing, these succ’ers are real winners. Plant Perk: Achieve a sense of accomplishment while doing next to nothing to keep this plant happy.',
//     price: 59.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/wood-garden.png?raw=true',
//     id: 2,
//     category: 'Succulents'
//   },
//   {
//     title: 'Black Echevaria Succulent',
//     description:
//       'The succulent with a dark and mysterious side. Also known as the “Black Prince” because of its color, our echeveria rules the houseplant scene with its uniquely colored rosettes and glowing green center. Designed in a white geometric planter for contrast, the perfect low maintenance plant.',
//     price: 25.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/echevaria.jpg?raw=true',
//     id: 3,
//     category: 'Succulents'
//   },
//   {
//     title: 'Rose Garden Succulents',
//     description:
//       'Succulents made even easier to maintain than they already are? Yes way. How about a garden of 3 in a beautiful eco-friendly gift box that doubles as a planter? Now we’re talking easy plant parenting! Plant Perk: Garden gifting made exceptionally easy. Just add water!',
//     price: 54.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/lula.jpeg?raw=true',
//     id: 4,
//     category: 'Succulents'
//   },
//   {
//     title: 'Succulent Garden',
//     description:
//       'Like a desert daydream for your décor, this succulent garden is easy to care for and even easier to love. Filled with a lush assortment of plants inside a simple-chic white container, these exotic favorites add warmth and style wherever they’re lucky enough to call home. Arrives in a white ceramic planter.',
//     price: 29.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/succulent.jpg?raw=true',
//     id: 5,
//     category: 'Succulents'
//   },
//   {
//     title: 'Safari Animal Succulents',
//     description:
//       'Got a bit of a wild side? Show it off with these mini safari animal succulents. An adorable herd of planters—elephant, rhino and giraffe—carry their own easy-to-care-for succulents inside. Small in size, but big on style, it’s an exotic-meets-eclectic way to spruce up any space.',
//     price: 29.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/animal.jpg?raw=true',
//     id: 6,
//     category: 'Succulents'
//   },
//   {
//     title: 'Wood Rectangle Succulents',
//     description:
//       'An assortment of succulents in three unique varieties, they arrive in a rustic rectangular container of weathered reclaimed wood. Neglect tolerant and décor enhancing, these succ’ers are real winners. Plant Perk: So easy to care for that doing next to nothing will still earn you a sense of accomplishment.',
//     price: 49.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/rectangle.png?raw=true',
//     id: 7,
//     category: 'Succulents'
//   },
//   {
//     title: 'Rose Garden Succulent',
//     description:
//       'Succulents made even easier to maintain than they already are? Yes way. How about one in a beautiful eco-friendly gift box that doubles as a planter? Now we’re talking easy plant parenting! Plant Perk: Garden gifting made exceptionally easy. Just add water!',
//     price: 32.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/rose.jpeg?raw=true',
//     id: 8,
//     category: 'Succulents'
//   },
//   {
//     title: 'Hoya Heart Succulent',
//     description:
//       'A plant that says how you feel (without having to say a word). Also known as the “lucky heart” because it’s thought to keep you lucky in love, this succulent brings feel-good warmth to any space. So, if you’re a sucker for easy-care plants, this one’s for you. Plant Perk: Succulents are drought-resistant, pulling moisture from around them so that all it takes is a simple spritz to keep them thriving. (They’re great for people who travel often.)',
//     price: 35.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/heart.jpg?raw=true',
//     id: 9,
//     category: 'Succulents'
//   },
//   {
//     title: 'Hoya Heart Succulent',
//     description:
//       'A plant that says how you feel (without having to say a word). Also known as the “lucky heart” because it’s thought to keep you lucky in love, this succulent brings feel-good warmth to any space. So, if you’re a sucker for easy-care plants, this one’s for you. Plant Perk: Succulents are drought-resistant, pulling moisture from around them so that all it takes is a simple spritz to keep them thriving. (They’re great for people who travel often.)',
//     price: 35.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/heart.jpg?raw=true',
//     id: 9,
//     category: 'Palms'
//   },
//   {
//     title: 'Hoya Heart Succulent',
//     description:
//       'A plant that says how you feel (without having to say a word). Also known as the “lucky heart” because it’s thought to keep you lucky in love, this succulent brings feel-good warmth to any space. So, if you’re a sucker for easy-care plants, this one’s for you. Plant Perk: Succulents are drought-resistant, pulling moisture from around them so that all it takes is a simple spritz to keep them thriving. (They’re great for people who travel often.)',
//     price: 35.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/heart.jpg?raw=true',
//     id: 9,
//     category: 'Cacti'
//   },
//   {
//     title: 'Hoya Heart Succulent',
//     description:
//       'A plant that says how you feel (without having to say a word). Also known as the “lucky heart” because it’s thought to keep you lucky in love, this succulent brings feel-good warmth to any space. So, if you’re a sucker for easy-care plants, this one’s for you. Plant Perk: Succulents are drought-resistant, pulling moisture from around them so that all it takes is a simple spritz to keep them thriving. (They’re great for people who travel often.)',
//     price: 35.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/heart.jpg?raw=true',
//     id: 9,
//     category: 'Florals'
//   },
//   {
//     title: 'Hoya Heart Succulent',
//     description:
//       'A plant that says how you feel (without having to say a word). Also known as the “lucky heart” because it’s thought to keep you lucky in love, this succulent brings feel-good warmth to any space. So, if you’re a sucker for easy-care plants, this one’s for you. Plant Perk: Succulents are drought-resistant, pulling moisture from around them so that all it takes is a simple spritz to keep them thriving. (They’re great for people who travel often.)',
//     price: 35.99,
//     image:
//       'https://github.com/tessa-woodard/urban-roots-revised/blob/main/src/assets/plants/heart.jpg?raw=true',
//     id: 9,
//     category: 'Pothos'
//   }
// )

module.exports = Product
