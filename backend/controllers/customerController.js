const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Customer = require('../models/CustomerModel')

// @desc Register new user
// @route POST /api/users
// @access Public

const registerCustomer = asyncHandler(async (req,res) => {
    const {customer_name, email, password } = req.body
    
    if (!customer_name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }

    //Check if user exists
    const customerExists = await Customer.findOne({email})

    if(customerExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //Create user
    const customer = await Customer.create({
        customer_name,
        email,
        password: hashedPassword,
    })

    if (customer) {
        res.status(201).json({
            _id: customer.id,
            name: customer.name,
            email: customer.email,
            token: generateToken(customer._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

    res.json({message: 'Register User'})
})

// @desc Authenticate new user
// @route POST /api/users/login
// @access Public

const loginCustomer = asyncHandler(async (req,res) => {
    const {email,password} = req.body

    // Check for user email
    const customer = await Customer.findOne({email})

    if (customer && (await bcrypt.compare(password, customer.password))){
        res.json({
            _id: customer.id,
            name: customer.name,
            email: customer.email,
            token: generateToken(customer._id)  
        })
    } else {
        res.status(400)
        throw new Error('Invalid credentials')      
    }

    res.json({message: 'Login User'})
})

// @desc Get user data
// @route GET /api/users/me
// @access Private

const getMe = asyncHandler(async (req,res) => {
    
    res.status(200).json(req.user)
})

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerCustomer,
    loginCustomer,
    getMe,
}