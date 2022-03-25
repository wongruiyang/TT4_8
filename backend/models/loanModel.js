const mongoose = require('mongoose')

const loanSchema = mongoose.Schema({

    customer: {
        type: Number,
        required: true,
        ref: 'Customer'
    },

    loan_amount: {
        type: Number,
        required: [true, ' Please add the amount to be borrowed']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Loan', loanSchema)