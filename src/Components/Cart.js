import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.css'


const Cart = () => {
    const navigate=useNavigate();
    const abcd=()=>{
        navigate('/')
    }
  return (
    <div className='cAArt'>
        <br></br><br></br><br></br><br></br> <br></br><br></br><br></br>
        <h3 className='Succ'>Successfully Added This Item to Your Cart.</h3> <br></br>
        <h4 className='SuccD'>Thank You For Choosing This Item.</h4>
        <button onClick={abcd} id='B17'> Back To Product Page</button>
    </div>
  )
}

export default Cart