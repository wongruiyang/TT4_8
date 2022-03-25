import axios from 'axios'

const API_URL = '/api/customers/'

// Register user
const register = async (customerData) => {
    const response =await axios.post(API_URL, customerData)

    if(response.data){
        localStorage.setItem('customer', JSON.stringify(response.data))
    }
    
    return response.data
}

// Login user
const login = async (customerData) => {
    const response =await axios.post(API_URL + '/login', customerData)

    if(response.data){
        localStorage.setItem('customer', JSON.stringify(response.data))
    }
    
    return response.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('customer')
}

const authService = {
    register,
    logout,
    login, 
}

export default authService