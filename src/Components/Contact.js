import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
        <p className='txt'>
        What is Lorem Ipsum?
<br></br><br></br>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <img src='../../../Image/gps.jpg'></img> <br></br>
<br></br><br></br>
        <div class="txt">
    <h4 class="vq"><b>Our Contact</b></h4>
    
        
          <i class="fa-solid fa-location-dot"></i> &nbsp;
          JC Main Road, Near Silnile Tower.<br></br>
          Pin-21542 , NewYork , US.<br></br><br></br>
          <i class="fa-solid fa-phone"></i> &nbsp;&nbsp;
          Ph-(123) 456-789 - 1255-12584<br></br><br></br>
          <i class="fa-solid fa-envelope-open-text"></i>&nbsp;&nbsp;
          Email-email@domainname.com
    </div>

    <Footer />
    </div>
  )
}

export default Contact