import React from 'react'
import './secondSection.css'
import Logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function SecondSection() {
  return (
    <div>

<div className='row secondsection'>
    <div className='col-lg-5 col-md-5 c0l-sm-12 col-12' >
        <div className='image'>
<img src={Logo} height={300} width={300}/>
</div>
    </div>
    <div className='col-lg-7 col-md-7 c0l-sm-12 col-12'>
<div className='title'>
<h1>Ramayana</h1>
</div>
<div className='sub-title'>
    <h4>Maharishi Valmiki</h4>
</div>
<div className='description'>Ramayana – one of India’s greatest epics is a tale of Lord Rama and his fight against evil. 
This story is full of numerous morals and values to learn from.
 Beautifully illustrated and retold in simple words,
  this inspiring story is a delight to read for any age group.
   • 200 pages • Ideal for all age-groups • Eight episodes • Easy-to-understand language •
    Amazing illustrations • Colourful cover •
     Hardbound This is a great book for the entire family to enjoy together. 
     It is indeed an engaging way to teach children about life values, kindness, compassion, and love.
 This book imparts the lesson that no matter how powerful evil is, it will always be defeated by good.
</div>
<div className='read-more-button'>
    <button className='read-more-btn'>
       {/* <FontAwesomeIcon icon={faChevronRight}/> */}
       Read More..
    </button>
</div>
        
        </div>
</div>

    </div>
  )
}
