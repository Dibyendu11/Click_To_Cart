import React from 'react'
import './Help.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

const Help = () => {
    const navigate=useNavigate();
    const payy=()=>{
        navigate('/payment')
    }

  return (
    <div>

       <div class="container">
      <div class="row">
        <div class="col">
          <img className='photo' src= '../../../Image/help.jpg' width='650'></img><br></br> 
        </div>
        <div class="col">
        <h4 className='hlp'>Help others without any reason and give without the expectation of receiving anything in return.
        <br></br><br></br>
        --Roy T. Bennett</h4><br></br>
        <h5 className='hlppp'>
        <i class="fa-solid fa-handshake-angle"></i>&nbsp;&nbsp;
          Let us Unitedly Help to Covid-19 Patient </h5>
        <button onClick={payy} className='donate'> Donate Now </button>
          
        </div>
      </div>
    </div>
    <br></br><br></br>
    <div class="container">
      <div class="row">
        <div class="col">
          <img className='photo' src= '../../../Image/covd.jpg' width='650'></img><br></br> 
        </div>
        <div class="col">
    <h4  className='hlp'>"People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed."
    <br></br><br></br>
         --Tony Robbins</h4><br></br>
         <h5 className='hlppp'><i class="fa-solid fa-hand-holding-medical"></i>&nbsp;&nbsp;
          Feel Free To Donate in Covid Trearment.<br></br></h5>
         <button onClick={payy} className='donate'> Donate Now </button>
        </div>
      </div>
    </div>
    <br></br><br></br>
    <div class="container">
      <div class="row">
        <div class="col">
          <img className='photo' src= '../../../Image/child.jpg' width='650'></img><br></br> 
        </div>
        <div class="col">
  
          <h4  className='hlp'>“The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.”
            <br></br><br></br>
         ― Ralph Waldo Emerson</h4><br></br>
         <h5 className='hlppp'><i class="fa-solid fa-hand-holding-dollar"></i>&nbsp;&nbsp;
          Let's Help to Needy & Poor Children  <br></br> </h5>
         
         <button onClick={payy} className='donate' > Donate Now </button>
        </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default Help