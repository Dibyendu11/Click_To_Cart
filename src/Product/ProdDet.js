import React from 'react'
 import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer';
 import ProD from './Product.json'
 import './ProdDet.css'
 import { useNavigate } from 'react-router-dom';

function ProdDet() {
 const navigate1=useNavigate();
 const navigate2=useNavigate();
 const navigate3=useNavigate();
 const paym=()=>{
   navigate1('/payment')
 }
 const cartpg=()=>{
  navigate2('/Cart')
 }
 const hompg=()=>{
  navigate3('/')
 }
    const val=useParams()
    console.log(val);
    let X=ProD.Product.find((dta)=>dta.Prod_id === val.id)
    // console.log(X);
    let Y=X.subCatagory.find((Data)=>Data.s_id === val.did)
    console.log(Y);

  return (
    <>
    <section id="me">
    <div class="container">
      <div class="row">
        <div class="col">
          <img className='photo' src={Y.image} width='550'></img><br></br>
          
          
          <button onClick={paym} className="buy"><i class="fa-solid fa-bag-shopping"></i>&nbsp; Buy Now </button>   <button onClick={cartpg} className='crt'> <i class="fa-solid fa-cart-arrow-down"></i> Add To Cart </button> <button onClick={hompg} className='crtsd'> <i class="fa-solid fa-house-chimney"></i> Back To Home </button>

        </div>
        <div class="col">
          <h2 className='text'>{Y.Item} </h2>
          <h5 className='rating'><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half"></i> &nbsp;&nbsp;{Y.rating}</h5>

          <h3 className='pric'> &#8377;{Y.price}  <i className='strik'> &#8377;{Y.pp}</i></h3>
          <h4 className='comp'>Company: {Y.company}</h4>
          <h5 className='item'>Item:{Y.Item}</h5>
          <h4 className='offer'>Special Offers:</h4>
          <h4 className='des'> <i class="fa-solid fa-tag Ss"></i> &nbsp;{Y.s_description} </h4>
          <h4 className='des'> <i class="fa-solid fa-tag Ss"></i> &nbsp;{Y.s_description} </h4>
          <h4 className='des'> <i class="fa-solid fa-tag Ss"></i> &nbsp;{Y.s_description} </h4>
          <h4 className='des'> <i class="fa-solid fa-tag Ss"></i> &nbsp;{Y.s_description} </h4>
          <h4 className='des'> <i class="fa-solid fa-tag Ss"></i> &nbsp;{Y.s_description} </h4>
          <h4 className='des'> <i class="fa-solid fa-tag Ss"></i> &nbsp;{Y.s_description} </h4>
          <h4 className='des'> <i class="fa-solid fa-tag Ss"></i> &nbsp;{Y.s_description} </h4>
          
          
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quae porro consequatur aliquam, incidunt eius magni provident, doloribus corrupti consectetur.
        </div>
      </div>
    </div>
  </section>
  <Footer />
    </>
  )
}

export default ProdDet