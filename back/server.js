const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { config } = require('dotenv')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const shopSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Shop = mongoose.model('Shop', shopSchema)

app.get('/shop', async (req, res) => {
    const response = await Shop.find()
    res.send(response)
})

app.get('/shop/:id', async (req, res) => {
    const {id} = req.params
    const target = await Shop.findById(id)
    res.send(target)
})

app.post('/shop', async (req, res) => {
    const {title, image, price} = req.body
    const newItem = new Shop ({title: title, image: image, price: price})
    await newItem.save()
    const allItems = await Shop.find()
    res.send(allItems)
})

app.delete('/shop/:id', async (req, res) => {
    const {id} = req.params
    await Shop.findByIdAndDelete(id)
    const allItems = await Shop.find()
    res.send(allItems)
})

mongoose.connect(process.env.CONNECTION__STRING)
.then(res => {
    console.log('connected');
})

app.listen(process.env.PORT, (req, res) => {
    console.log('port connected');
})