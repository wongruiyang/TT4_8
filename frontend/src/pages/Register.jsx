import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
    const [formData, setFormData] = useState({
        customer_name: '',
        email: '',
        password: '',
        password2: '',
        balance:0,
        customer_address:'',
        customer_phone:0,
        CustomerId:0
    })

    const {customer_name, email, password, password2, ba} = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {customer, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect(()=>{
        if (isError) {
            toast.error(message)
        }

        if(isSuccess || customer) {
            navigate('/')
        }

        dispatch(reset())

    }, [customer, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,

        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (password !== password2){
            toast.error('Passwords do not match')
        } else {
            const customerData = {
                customer_name,
                email,
                password,
            }

          dispatch(register(customerData))
        }

    }

    if(isLoading){
        return <Spinner />
    }
 
    return <>
        <section className = 'heading'>
            <h1>
                <FaUser /> Register
            </h1>
            <p>
            Please create an account
            </p>
        </section>

        <section className = 'form'>
            <form onSubmit = {onSubmit}>
                 <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id = 'customer_name'
                      name = 'customer_name' 
                      value = {customer_name} 
                      placeholder = 'Enter your name'
                      onChange = {onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id = 'email'
                      name = 'email' 
                      value = {email} 
                      placeholder = 'Enter your email'
                      onChange = {onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id = 'password'
                      name = 'password' 
                      value = {password} 
                      placeholder = 'Enter your password'
                      onChange = {onChange}
                    />
                </div>
                <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      id = 'password2'
                      name = 'password2' 
                      value = {password2} 
                      placeholder = 'Confirm password'
                      onChange = {onChange}
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className = 'btn btn-block'>
                        Submit
                    </button>
                </div>
            </form>
        </section>
    </>
}

export default Register