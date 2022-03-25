const mongoose = require('mongoose')

const loanSchema = mongoose.Schema({

    user: {
        type: Number,
        required: true,
        ref: 'User'
    },

    loan_amount: {
        type: Number,
        required: [true, ' Please add the amount to be borrowed']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Loan', loanSchema)