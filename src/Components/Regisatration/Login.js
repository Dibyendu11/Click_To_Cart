import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import Footer from '../Footer';

const ValidateForm=(formValue)=>{
    const errors ={};
    const reg_exp_email=/^[a-z0-9._%/+-]+@[a-z0-9.-]+\.[a-z]{2,4}$ /

if(!formValue.email){
    errors.email="Please enter email";
// }else if(!reg_exp_email.test(formValue.email)){
//     errors.email="Invalid Email";
}
if(!formValue.password){
    errors.password="Please enter Password";
}
console.log("Error:",errors);
return errors;
}
const Login = () => {


   const navigate=useNavigate();
    const lgn=()=>{
    navigate('/Registration')
    }  

    const formik=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:ValidateForm,
        onSubmit:(values)=>{
            console.log("values Received ",values);
        
        axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
    .then(res=>{
        console.log("Axios Response",res);
        navigate('/')

        window.localStorage.setItem("Token Value:",res.data.token)
        alert("you have successfully logged in")
    })
    .catch(err=>{console.log("Axios error",err);
    })
        }
    })
  return( 
  <div className='main'>
       <div class="container">
      <div class="row">
        <div class="col">
          <img className='photo' src= '../../../Image/back.jpg' width='650'></img><br></br> 

        </div>
        <div class="col">
         
          <form className='from' onSubmit={formik.handleSubmit}>
           <img className='login' src='../../../Image/login.png' ></img>
           <h3 className='llogin'>Log In Page..</h3>

      <b> Email:</b>
       <input id="EML" type="email" placeholder="  name@example.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input> <br></br>
       {formik.touched.password &&formik.errors.email? <span style={{color:'blue'}}>{formik.errors.email}</span>:null}
       <br></br>
       <b>Password: </b>
       <input id="PWD" type="text" placeholder="  Enter Your Password"  name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br></br>
       {formik.touched.password && formik.errors.password? <span style={{color:'red'}}>{formik.errors.password}</span>:null}
       <br></br>
          <button type="submit" id='B1'>Submit</button> <br></br>
     <b> Not an User?</b>
      <button onClick={lgn} className='lst' type="submit" id='as'> Sign Up now</button>
       </form>
        </div>
      </div>
    </div>
<Footer />
  </div>







  );
};
export default  Login;


