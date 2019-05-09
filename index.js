const express = require('express')
const bodyParser = require('body-parser') // this comes with express
const mongoose = require('mongoose')
const routes = require('./config/routes')
// const errorHandler = require('./lib/errorHandler')
// const { port, dbUri } = require('./config/environment')

const app = express()

mongoose.connect('mongodb://localhost:27017/after-midnight')

// this tells express that the frontend files are in the `dist` folder
app.use(express.static(`${__dirname}/dist`))

// this allows us to handle JSON input
// it creates `req.body`
app.use(bodyParser.json())
app.use('/api', routes)
// app.use(errorHandler)

app.listen(4000, () => console.log( 'it\'s after mightnight mofos on port 4000'))
