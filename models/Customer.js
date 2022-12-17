const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    //buat schema data
    nama: {
        type: String,
        required: true
    },
    check_in: {
        type: Date,
        required: true
    },
    check_out: {
        type: Date,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)