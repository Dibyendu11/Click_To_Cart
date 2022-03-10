import React from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import './Regis.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../Footer'


const ValidateForm=(formVal)=>{
  const errors={};

  if(!formVal.username){
    errors.username="Please Enter Your Username";
}else if(formVal.username.length<5){
    errors.username="Atleast 5 Characters are Required"; 
}
if(!formVal.email){
  errors.email="Please Enter a Valid Email";
}
if(!formVal.password){
  errors.password="Please Enter a Password";
}
console.log("Error:",errors);
return errors;
}
const Regis = () => {

  const navigate=useNavigate();
  const googl=()=>{
  navigate('/Login')
  } 

  const formik=useFormik({
    initialValues:{
      username:"",
      email:"",
      password:""
    },
    validate:ValidateForm,
    onSubmit:(values)=>{
      console.log("Received values",values);
      axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
    .then(res=>{
        console.log("Axios Response",res);
        navigate('/Login');
    })
    .catch(err=>{console.log("Axios error",err);
    })
    }
  });
  return (
    
    <div className='regiiiis'>
 <br></br>
        <img className='login' src='../../../Image/login.png' ></img>
          <form className='from' onSubmit={formik.handleSubmit}>
           <h3 className='Registr'>Register Now..</h3>

     <b>Username: </b>
        <input id="UNM" type="text" name="username" placeholder=" Enter Your Username : " value={formik.values.username} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br></br>
            {formik.touched.username && formik.errors.username? <span style={{color:'red'}}>{formik.errors.username}</span>:null}
            <br></br>

      <b> Email:</b>
       <input id="EML" type="email" placeholder="  name@example.com" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input> <br></br>
       {formik.touched.password &&formik.errors.email? <span style={{color:'blue'}}>{formik.errors.email}</span>:null}
       <br></br>
       <b>Password: </b>
       <input id="PWD" type="text" placeholder="  Enter Your Password"  name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input><br></br>
       {formik.touched.password && formik.errors.password? <span style={{color:'red'}}>{formik.errors.password}</span>:null}
       <br></br>
          <button type="submit" id='B1' >Submit</button> <br></br>
      <b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Already Have an Account?</b>
      <button onClick={googl} className='lst' type="submit" id='asa'> Sign In Now</button>
       </form>
       <br></br><br></br><br></br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button><a className='googl' href="https:/www.gmail.com/"> <i class="fa-brands fa-google gggl"></i>&nbsp;Sign Up with Google</a></button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button><i class="fa-brands fa-facebook ffb"></i><a className='fb' href="https://www.facebook.com/">Sign Up with Facebook</a></button>
        <Footer />
     

    </div>
  )
}

export default Regis