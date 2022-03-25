import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch } from 'react-redux'
import 


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {customer} = useSelector((state)=> state.auth)


  useEffect(()=>{

    if (!customer){
      navigate('/login')
    }
 
  },[customer, navigate, dispatch])


  return <>
    <section className = 'heading'>
      <h1>{customer && customer.balance}</h1>
    
    </section>


  </>
}

export default Dashboard