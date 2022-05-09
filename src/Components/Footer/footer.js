import React from 'react'
import './footer.css'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
  return (
    <div className='footerSection'>

<div className='row footerrow'>
<div className='col-lg-4 col-md-4 col-sm-12 col-12 footercol'>

<Form>
<h4 style={{marginBottom:"15%"}}>Contact Us</h4>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Bijay Thakur" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button  type="submit" style={{backgroundColor:"#2596be"}}>
    Submit
  </Button>
</Form>

</div>
<div className='col-lg-4 col-md-4 col-sm-12 col-12 footercol'>

<div className='row sitemaprow' style={{height:"50%"}}>
<div className='col-12 sitemapcol' >
<h4>All our links</h4>
</div>
<div className='col-12'>

<ul id='myLinks' type='none' style={{padding:"0"}}>

    <li href="#home">Home</li>
    <li href="#book">Books</li>
    <li href="#audiobooks">Audiobooks</li>
</ul>
</div>
</div>
</div>
<div className='col-lg-4 col-md-4 col-sm-12 col-12 footercol'>
<div className='row contactRow' style={{padding:"0"}}>
<div className='col-12 contactCol' >
<img src={Logo} height={200} width={200}  style={{marginTop:"-18%"}}/>
</div>
<div className='col-12 contactCols'>

<ul id='myLinks' type='none' style={{marginTop:"-30%"}}>
<li><FontAwesomeIcon icon={faPhone} style={{marginRight:"5px"}} /> 9749761111</li>
<li><FontAwesomeIcon icon={faEnvelope} style={{marginRight:"5px"}}/> loginbooknepal@gmail.com</li>
<li><FontAwesomeIcon icon={faLocationDot} style={{marginRight:"5px"}}/> Samakhusi, Kathmandu</li>

</ul>
</div>
</div>
</div>





</div>

    </div>
  )
}
