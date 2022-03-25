const express = require('express')
const router = express.Router()
const { registerCustomer,loginCustomer, getMe } = require('../controllers/customerController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerCustomer)
router.post('/login', loginCustomer)
router.get('/me', protect, getMe)

module.exports = router