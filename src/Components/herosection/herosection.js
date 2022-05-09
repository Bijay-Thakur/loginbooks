import React from 'react'
import './herosection.css'
import MainSlider from '../heropageSlider/heropageSlider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,

} from "@fortawesome/free-brands-svg-icons";

import Bookstack from '../../assets/images/bookstack.jpg'
import bookandglass from '../../assets/images/bookandglass.jpg'
import SecondSection from '../secondSection/secondSection';
import TopPicks from '../topPicks/topPicks';
import Navigationbar from '../Menu bar/menubar';
import Originalnavbar from '../originalNavbar/originalnavbar';



export default function Herosection() {
  return (
  <div className='hero'> 
    <Navigationbar/>
    {/* <Originalnavbar/> */}
 <MainSlider/>
 <SecondSection/>
 <TopPicks/>
 </div>
  )
}
