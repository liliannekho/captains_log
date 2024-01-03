require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const PORT = process.env.PORT || 3000
const app = express()

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
  console.log('We are connected to mongodb')
})

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

// Index Route



// New Route

app.get('/logs/new', (req, res) => {
  res.render('New')
})

// Create Route



// Show Route




app.listen(PORT, () => {
  console.log(`${PORT} is working`)
})