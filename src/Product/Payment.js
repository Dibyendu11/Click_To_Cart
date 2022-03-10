import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Payment.css'
import Footer from '../Components/Footer';

const ValidateForm=(formVal)=>{
    const errors ={};
   

if(!formVal.username){
     errors.username="Please Enter Your Username";
}else if(formVal.username.length<5){
    errors.username="Atleast 5 Characters are Required"; 
}
if(!formVal.number){
    errors.number="Please Enter a Valid Card number";
 }else if(formVal.number.length<16){
    errors.number="Atleast 16 Characters are Required"; 
}
if(!formVal.bdaymonth){
    errors.bdaymonth="Please Enter Expiry Month & Year";
 }
 if(!formVal.cvv){
    errors.cvv="Please Enter Your 3 Digit CVV Number";
}else if(formVal.cvv.length<3){
   errors.cvv="Only3 Characters are Required"; 
   }

console.log("Error:",errors);
return errors;
}
const Login = () => {


   const navigate=useNavigate();

    const formik1=useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validate:ValidateForm,
        onSubmit:(values)=>{
            console.log("values Received ",values);
            alert("Payment Successful")
            navigate('/')
        
    //     axios.post('https://project-node-1.herokuapp.com/postUserData',values)
    // .then(res=>{
    //     console.log("Axios Response",res);
    //     navigate('/')

    //     window.localStorage.setItem("Token Value:",res.data.token)
    //     alert("Payment Successful")
    //     navigate('/')
    // })
    // .catch(err=>{console.log("Axios error",err);
    // })
        }
    })
  return( <div className='ACRD'>
     
       <form onSubmit={formik1.handleSubmit}>
           
           <h3 className='a1'>Payment Page..</h3>

     <b> Username</b>
       <input id="EML" type="text" placeholder=" Enter You Username" name="username" value={formik1.values.username} onChange={formik1.handleChange} onBlur={formik1.handleBlur}></input> <br></br>
       {formik1.touched.username &&formik1.errors.username? <span style={{color:'blue'}}>{formik1.errors.username}</span>:null}
       <br></br>
      <b>Card No.</b>
       <input id="PWD" type="number" placeholder="  Enter Your Card Number"  name="number" value={formik1.values.number} onChange={formik1.handleChange} onBlur={formik1.handleBlur} maxLength={16}></input><br></br>
       {formik1.touched.number && formik1.errors.number? <span style={{color:'red'}}>{formik1.errors.number}</span>:null}
       <br></br><br></br>
       <label for="bdaymonth"><b>Expiry Date </b></label>&nbsp;
         <input type="month"  name="bdaymonth" value={formik1.values.bdaymonth} onChange={formik1.handleChange} onBlur={formik1.handleBlur}></input>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
         <b>CVV</b> <input type='number' name='cvv'  value={formik1.values.cvv} onChange={formik1.handleChange} onBlur={formik1.handleBlur}></input><br></br>
         {formik1.touched.bdaymonth && formik1.errors.bdaymonth? <span style={{color:'red'}}>{formik1.errors.bdaymonth}</span>:null}
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         {formik1.touched.cvv && formik1.errors.cvv? <span style={{color:'orange'}}>{formik1.errors.cvv}</span>:null}
         <br></br><br></br>
       <button type="submit" id='B'>Submit</button> <br></br>
       
       
      <img className='pmnt' src='../../../Image/foot.jpg'></img>
       </form>
      <Footer />
  </div>
  );
};
export default  Login;