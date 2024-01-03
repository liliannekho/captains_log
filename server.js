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

app.post('/logs', async (req, res) => {
    if(req.body.shipIsBroken === 'on'){
        req.body.shipIsBroken = true
    }else{
        req.body.shipIsBroken = false
    }
    try{
        // const createdLog = await Log.create(req.body)
        res.send('received')
        // res.redirect(`/logs/${createdLog._id}`)
    }catch(error){
        res.status(400).send({message: error.message})
    }
})


// Show Route




app.listen(PORT, () => {
  console.log(`${PORT} is working`)
})