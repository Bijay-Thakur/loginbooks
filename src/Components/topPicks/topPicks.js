import React from 'react'
import './topPicks.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Bookstack from '../../assets/images/bookstack.jpg'
import bookandglass from '../../assets/images/bookandglass.jpg'
import { Card } from 'react-bootstrap';

export default function TopPicks() {
  return (
    <div className='top-picks'>
        <div className='heading'>
            <h2>Customers favorite</h2>
        </div>
        <div className='sub-heading'>
           <h5>See our latest books which attract highest numbe rof readers</h5>
        </div>
        <div>
        <OwlCarousel className="owl-theme testimonial" loop={true} center={true} autoplay={true}  nav={false}
            responsiveClass={true}

        responsive={{
            // breakpoint from 0 up
            0 : {
              // stagePadding: 0,
              loop: true,
              center: true,
              autoplay: true,
              nav: true,
              items: 1
            },
            768 : {
              items: 2,
              center: true,
              center: false,

            },
            992 : {
              items: 3,
              center: true,
              margin: 5,
            },
           
          }}
        >
          <div class="item">
            <Card class="cards"
             
            >
              <img className="photo"
               src={Bookstack}
                height={200}
                width={200}>
              </img>
              <Card.Body>
                <Card.Title className="head"><h5>Book</h5></Card.Title>
                <p style={{color:"black",opacity:"50%"}} className="cardText">
Author                </p>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
              
            >
              
              <img
                className="photo"
                src={Bookstack}
                height={200}
                width={200}
              ></img>
             
              <Card.Body>
                <Card.Title className="head"><h5>Book</h5></Card.Title>
                <p style={{color:"black",opacity:"50%"}} className="cardText" >
Author                </p>
              </Card.Body>
            </Card>
          </div>

          <div class="item">
            <Card class="cards"
             
            >
            
              <img
                className="photo"
                src={Bookstack}
                height={200}
                width={200}
              ></img>
          
              
              <Card.Body>
                <Card.Title className="head"><h5>Book</h5></Card.Title>
                <p style={{color:"black",opacity:"50%"}} className="cardText" >
                             Author                </p>
              </Card.Body>
            </Card>
          </div>


        </OwlCarousel>
        </div>


    </div>
  )
}
