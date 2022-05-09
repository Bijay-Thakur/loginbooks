import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './heropageSlider.css';
import Logo from '../../assets/images/logo.png'

import Book1 from '../../assets/images/book1.jpg';
import Book2 from '../../assets/images/book2.jpg';
import Book3 from '../../assets/images/book3.jpg';
import Book4 from '../../assets/images/Book4.jpg'
import Navigationbar from '../Menu bar/menubar';



const MainSlider = () => {
    return (<div className='myCarousel' >
        <Carousel interval={3000} loop={true} fade style={{zIndes:"-1"}}>
      
       
        <Carousel.Item className='sliderOverlay' >
    <img
      className="d-block  w-100  slide "
      src={Book1} 
      alt="First slide"
    //  height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">

                <div className='info'>

                     <h4 className="animate__animated animate__fadeInDown">Ramayana</h4><br/>
                     The Rāmāyana is a Sanskrit epic from ancient India.
                      Ramayana is one of the two Itihasas of Hinduism, 
                      the other being the Mahābhārata. Ramayana.
                 </div>
              </div>
     </div>
     </div>

    
    
  </Carousel.Item>
  <Carousel.Item className='sliderOverlay'>
    <img
      className="d-block w-100 "
      src={Book2}
      alt="Second slide"
    //   height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">
           
                <div className='info'>
                     <h4 className="animate__animated animate__fadeInUp">Ramayana</h4><br/>
                     The Rāmāyana is a Sanskrit epic from ancient India.
                      Ramayana is one of the two Itihasas of Hinduism,
                       the other being the Mahābhārata. Ramayana.                    </div>
                 </div>
              </div>
     </div>
    
  </Carousel.Item>
  
  <Carousel.Item className='sliderOverlay' >
    <img
      className="d-block w-100"
      src={Book3}
      alt="Third slide"
    //   height="510"
    />
    <div class="content">
              <div class="container">
                <div class="content-box">
            
                <div className='info'>

                <h4 className="animate__animated animate__fadeInDown">Ramayana</h4><br/>
                The Rāmāyana is a Sanskrit epic from ancient India.
                 Ramayana is one of the two Itihasas of Hinduism,
                  the other being the Mahābhārata. Ramayana.                 </div>
              </div>
     </div>
     </div>
    
  </Carousel.Item>
 
</Carousel>
</div>
)
    }
    

export default MainSlider;
