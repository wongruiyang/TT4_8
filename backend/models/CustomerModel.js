const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({

    CustomerId: {
        type: Number,
        required: true,
        ref: 'Customer' 
    },

    customer_name: {
        type: String,
        required: [true, ' Customer name is missing']
    },

    customer_phone: {
        type: Number,
        required: [true, 'Phone number is missing']
    },

    customer_address: {
        type: String,
        required: [true, 'Address is missing']
    },

    balance: {
        type: Number,
        required: [true, ' Balance is missing']
    },

    email:{
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password:{
        type: String,
        required: [true, 'Please add a password']
    },

},{
    timestamps: true
})

module.exports = mongoose.model('Customer', CustomerSchema)