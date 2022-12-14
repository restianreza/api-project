// (5) Buat router Mahasiswa
const express = require('express')
const router = express.Router()
const Customer = require('../models/Customer')

//import verifyToken
const verifyToken = require('../config/verifyToken')


// Create 
router.post('/', async (req, res) => {
    // tampung input mahasiswa 
    const customerPost = new Customer({
        nama: req.body.nama,
        alamat: req.body.alamat
    })

    try {
        // simpan data 
        const customer = await customerPost.save()
        // response
        res.json(customer)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

//Read (method get)
router.get('/',verifyToken, async (req, res) => {
    try {
        const customer = await Customer.find()
        res.json(customer)
    } catch (error) {
        res.json({
            message: error
        })
    }

})

// Update 
router.put('/:customerId', async (req, res) => {
    // tampung input customer 
    const data = {
        nama: req.body.nama,
        alamat: req.body.alamat
    }

    try {
        // update data 
        const customer = await Customer.updateOne({
            _id: req.params.customerId
        }, data)
        // response
        res.json(customer)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

// Delete 
router.delete('/:customerId', async (req, res) => {
    try {
        // delete data 
        const customer = await Customer.deleteOne({
            _id: req.params.customerId
        })
        // response
        res.json(customer)
    } catch (error) {
        res.json({
            message: error
        })
    }
})

module.exports = router