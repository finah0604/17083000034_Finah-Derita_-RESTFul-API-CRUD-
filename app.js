const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

//Midleware
app.use(bodyParser())

//import routes
const biodataRoutes = require('./routes/biodata')

// routes example
app.use('/biodata', biodataRoutes)

// connect to DB
mongoose.connect(process.env.DB_CONNECTION,
	{ useNewUrlParser: true, useUnifiedTopology: true})
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connect Error!'))
db.once('open', () => {
	console.log('Database is Connected')
})

//Listen
app.listen(process.env.PORT, () => {
  console.log(`Server running in ${process.env.PORT}`)
});