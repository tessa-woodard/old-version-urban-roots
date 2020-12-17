require('dotenv').config()

const express = require('express')

const mongoose = require('mongoose')

const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

// import routes
const productRoutes = require('../routes/product')

// route middlewares
app.use('/api/products', productRoutes)

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log('Error in server setup')
  console.log(`👨 To Infinity & Beyond on Port => ${process.env.SERVER_PORT}`),
    mongoose.connect(
      process.env.DB_CONNECT,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      },
      () => console.log(`Our oven is set to ${process.env.SERVER_PORT} deg`)
    )
  mongoose.connection.on('error', (e) => {
    console.log('mongo connect error!')
  })
  mongoose.connection.on('connected', () => {
    console.log(`🚀 DB Blasting Off in ${process.env.SERVER_PORT} seconds`)
  })
})
