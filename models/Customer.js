const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    //buat schema data
    nama: {
        type: String,
        required: true
    },
    check_in: {
        type: String,
        required: true
    },
    check_out: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)