import React from 'react'
import { useParams } from 'react-router-dom'
import Prod from './Product.json'
import { Row,Col,Card } from 'react-bootstrap'
import './ProdCat.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'

const ProdCat = () => {
  const val=useParams();
  console.log("Recieved:",val);
  let k=Prod.Product.find((data)=>data.Prod_id=== val.id)
  console.log(k);

  const [search,setSearch]=useState("")
  return (
    <div>
      <input className='aaa' placeholder=" Search Your Favourite Items Here...Ex:Mobile,Laptop,Electronics,Television,Microwave,Smart Watches,Fashion etc." type="text" onChange={event=>{setSearch(event.target.value)}}></input>
      <button id="BT">Search</button>
       <Row xs={1} md={3} className="g-4 BB">
       {k.subCatagory.filter((dta)=>{
    if (search == null){
      return dta;
    }else if(dta.Item.toLowerCase().includes(search.toLowerCase())){
      return dta;
    }
  }).map((dta)=>(
    <Col>
      <Card>
        <Card.Img className='ZA' variant="top" src={dta.image} />
        <Card.Body>
          <Card.Title className='ZB'>Item: {dta.Item}</Card.Title>
          <Card.Title className='QQ'> Company: {dta.company}</Card.Title>
          <button id='B'><Link to={`/Details/${val.id}/${dta.s_id}`}>Details</Link></button>
          
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
<Footer />
    </div>
  )
}

export default ProdCat