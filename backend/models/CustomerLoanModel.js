const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({

    CustomerLoanId: {
        type: Number,
        required: [true, ' Please add CustomerLoadId']
        //ref: 'User'
    },

    CustomerId: {
        type: Number,
        required: [true, ' Please add a CustomerId']
    },
    LoanId: {
        type: Number,
        required: [true, ' Please add LoanId']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('CustomerLoanId', goalSchema)