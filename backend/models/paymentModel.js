const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({

    PaymentId: {
        type: Number,
        required: true,
    },

    LoanId: {
        type: Number,
        required: [true, ' Please add the amount to be borrowed']
    },

    payment_date: {
        type: Date
    },

    payment_amount: {
        type: Number
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Payment', paymentSchema)