const asyncHandler = require('express-async-handler')
const Loan = require('../models/loanModel')
const Customer = require('../models/CustomerModel')

// @desc Get goals
// @route GET /api/goals
// @access Private
const getLoans = asyncHandler(async (req, res) => {
    const loans =await Loan.find({ customer: req.customer.id })

    res.status(200).json(loans)
})

// @desc Set goals
// @route POST /api/goals
// @access Private
const setLoan = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const loan = await Loan.create({
        customer: req.customer.id,
        loan_amount: req.body.text
    })

    res.status(200).json(loan)
})

// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateLoan = asyncHandler(async (req, res) => {
    const loan = await Loan.findById(req.params.customerId)

    if(!loan){
        res.status(400)
        throw new Error('Loan not found')
    }

    
    // Check for user
    if(!req.customer){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(loan.customer.toString() !== req.customer.id){
        res.status(401)
        throw new Error('User not authorized') 
    }

    const updatedLoan = await Loan.findByIdAndUpdate(req.params.customerId, req.body, {
        new:true,
    })

    res.status(200).json(updatedLoan)
})

// @desc Get goals
// @route DELETE /api/goals/:id
// @access Private
const deleteLoan = asyncHandler(async (req, res) => {
    const loan = await Loan.findById(req.params.customerId)

    if(!loan){
        res.status(400)
        throw new Error('Loan not found')
    }

    // Check for user
    if(!req.customer){
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(loan.customer.toString() !== req.customer.id){
        res.status(401)
        throw new Error('User not authorized') 
    }

    await loan.remove()

    res.status(200).json({ id: req.params.customerId })
}) 

module.exports = {
    getLoans,
    setLoan,
    updateLoan,
    deleteLoan,
}
