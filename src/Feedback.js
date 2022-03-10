import React from 'react'
import './Feedback.css'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import Footer from './Components/Footer'

const Feedback = () => {
    const navigate=useNavigate();
    const backk=()=>{
        alert('Thank You For Your Feedback')
        navigate('/')
    }

    const formik=useFormik({
        initialValues:{
          username:"",
          email:"",
         message:""
        },
        onSubmit:(values)=>{
          console.log("Received values",values);
         
        }
    })

    
  return (
    <div>
        <div class="container">
      <div class="row">
        <div class="col">
          <img className='photo' src= '../../../Image/feedback.jpg' width='650'></img><br></br> 

        </div>
        <div class="col">
         
          <form  onSubmit={formik.handleSubmit} className='from'>
         
           <h3 className='llogin'>Feedback Page..</h3>
        <b>Username:</b>&nbsp;&nbsp;
        <input id="UNM" type='text'  name="username" placeholder=" Enter Your Username : " value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input> <br></br>
      <b> Email:</b>
       <input id="EML" type="email" placeholder="  name@example.com" name="email"  value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input> <br></br>
    
       <br></br>
       <b>Message: </b>
       <input id="PWDs" type="text" placeholder="  Enter Your Feedback"  name="message" value={formik.values.message} onChange={formik.handleChange} onBlur={formik.handleBlur} ></input><br></br>
       
       <br></br>
          <button onClick={backk} type="submit" id='B1'>Submit</button> <br></br>
       </form>        
        </div>
      </div>
    </div>
      <Footer />  
    </div>
  )
}

export default Feedback