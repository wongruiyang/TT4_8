const asyncHandler = require('express-async-handler')
const Payment = require("../models/paymentModel")

const getPayments = asyncHandler(async (req, res) => {
    const payments =await Payment.find({ user: req.user.id })

    res.status(200).json(payments)
})

const setPayments = asyncHandler(async (req, res)) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a payment amount')
    }

    if 
}