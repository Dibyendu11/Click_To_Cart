import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        
        <footer>
  <div class="container">
    <div class="row">

    <div class="col">
    <h4 class="vq"><b className='ssQ'>Our Contact</b></h4>
          <i class="fa-solid fa-location-dot"></i> &nbsp;
          JC Main Road, Near Silnile Tower.<br></br>
          Pin-21542 , NewYork , US.<br></br><br></br>
          <i class="fa-solid fa-phone"></i> &nbsp;&nbsp;
          Ph-(123) 456-789 - 1255-12584<br></br><br></br>
          <i class="fa-solid fa-envelope-open-text"></i>&nbsp;&nbsp;
          Email-email@domainname.com
    </div>
    <div class="col">
          <h5 class="vq"><b className='ssQ'>Quick Links</b></h5>
          Social Media <br></br>

          <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;
         Facebook<br></br>
         <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;
          Instagram<br></br>
    <i class="fa-brands fa-twitter"></i> &nbsp;&nbsp;
         Twitter<br></br>
         <i class="fa-brands fa-youtube"></i>&nbsp;&nbsp;
         YouTube
        </div>
        <div class="col">
          <h5 class="vq" className='ssQ'><b>ABOUT</b></h5>
          <li>Contact Us<br></br></li>
          <li>About Us<br></br></li>
          <li>Click to Cart <br></br></li>
         <li>Store</li>
        </div>
        <div class="col">
          <h5 class="vq"><b className='ssQ'>Let Us Help</b></h5>
          <i class="fa-solid fa-handshake-angle"></i>&nbsp;&nbsp;
          Help Covid-19 Patient <br></br>
          <i class="fa-solid fa-hand-holding-medical"></i>&nbsp;&nbsp;
          Donate in Covid Trearment.<br></br> 
         
          <i class="fa-solid fa-hand-holding-dollar"></i>&nbsp;&nbsp;
          Help to Needy People <br></br> 
          <i class="fa-solid fa-hand-holding-dollar"></i>&nbsp;&nbsp;
          Donate to Poor Children<br></br> 
        </div>
         
    </div><br></br><br></br>

    <Container>
  <Navbar expand="lg" variant="light" >
    <Container>
      <Navbar.Brand><h5 className='Opp'> &copy; copyright 2021 All right reserved. By Dibyendu Ghosh. </h5></Navbar.Brand>
      <img src='../../../Image/foot.jpg' height={34} width={520}></img>
    </Container>
  </Navbar>
</Container>
  </div>
</footer>

</div>
  )
}

export default Footer