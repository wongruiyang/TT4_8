import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'

function MenuButton(props) {
    const [text,setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createGoal({text}))
        setText('')
    }

  return (
    <section className = 'form'>
        <form onSubmit ={onSubmit}>
            <div className='form-group'>
                <label htmlFor='text'>Goal</label>

                <input type = 'text' name = 'text' id='text' 
                value ={text} onChange = {(e)=>setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type = 'getloan'>
                    Get Loan
                </button>
            </div>
            <div className="form-group">
                <button className="btn btn-block" type = 'makepayment'>
                    Make Payment
                </button>
            </div>
        </form>
        <div className="form-group">
            <button className="btn btn-block" type = 'seehistory' onClick={navigate("/history",{replace: true})}>
                See Loan/Payment History
            </button>
        </div>
        
    </section>
  )
}

export default MenuButton