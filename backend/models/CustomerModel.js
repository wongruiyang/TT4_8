const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({

    CustomerId: {
        type: Number,
        required: false,
        ref: 'customers' 
    },

    customer_name: {
        type: String,
        required: [true, ' Customer name is missing']
    },

    customer_phone: {
        type: Number,
        required: [false, 'Phone number is missing']
    },

    customer_address: {
        type: String,
        required: [false, 'Address is missing']
    },

    balance: {
        type: Number,
        required: [false, ' Balance is missing']
    },


},{
    timestamps: true
})

module.exports = mongoose.model('Customer', CustomerSchema)