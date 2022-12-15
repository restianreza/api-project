const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    //buat schema data
    nama: {
        type: String,
        required: true
    },
    tanggal: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)