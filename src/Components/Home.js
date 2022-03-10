import React,{useState} from 'react'
import { Row,Col,Card,Carousel } from 'react-bootstrap'
import './Home.css'
import prodData from '../Product/Product.json'
import { Link } from 'react-router-dom'
import Footer from './Footer'


const Home = () => {
 
  const [search,setSearch]=useState("")
  return (
    <div>
      {/* <input className='aaa' type="text" onChange={event=>{setSearch(event.target.value)}}></input> */}
      
  <Carousel className='caro'>
  <Carousel.Item>
    <img
      className="d-block"
      src="../../../Image/ec.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Buy More, Spend Less</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 man"
      src="../../../Image/mn.jpg"
      alt="Second slide"
    />

    <Carousel.Caption className='mn'>
      <h3 >Where Fun Meets Fashion!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 man"
      src="../../../Image/online-sh.jpg"
      alt="Third slide"
    />

    <Carousel.Caption className='wmn'>
      <h3>Stock As Much You Can. Hurry Up, Grab The Best</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../../../Image/clothing1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption className='last'>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<Row xs={1} md={3} className="g-4">
  {prodData.Product.filter((data)=>{
    if (search == null){
      return data;
    }else if(data.Name.toLowerCase().includes(search.toLowerCase())){
      return data;
    }
  }).map((data)=>(
    <Col key={data.Prod_id}>
      <Card className='aba'>
        <Card.Img className='aa' src={data.Image} />
        <Card.Body>
          <Card.Title>{data.Name}</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
         <div className='wrap'> 
         <button id='B'> <Link to={`/Catagory/${data.Prod_id}`}> Buy Now </Link> </button>
         </div>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>

<Footer />

{/* <footer>
  <div class="container">
    <div class="row">
    <div class="col">
    <h5 class="vq"><b>Our Contact</b></h5>
    <i class="fa-solid fa-location-dot"></i>
          Overtake company Inc<br></br>
          JC Main Road, Near Silnile tower<br></br>
          Pin-21542 NewYork US.<br></br>
          Ph-(123) 456-789 - 1255-12584<br></br>
          Email-email@domainname.com
    </div>
    <div class="col">
          <h5 class="vq"><b>Quick Links</b></h5>
          Latest Events<br></br>
          Overtake company<br></br>
          Terms and conditions<br></br>
          Privacy policy<br></br>
          Career<br></br>
          Contact us
        </div>
        
    
    </div>

  </div>
</footer> */}

    </div>
  )
}

export default Home