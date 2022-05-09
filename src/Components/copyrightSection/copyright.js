import React from 'react'
import './copyright.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCopyright } from '@fortawesome/free-regular-svg-icons';

export default function Copyright() {
  return (
    <div className='copyright'>
Copyright 2022 All <FontAwesomeIcon icon={faCopyright} style={{alignItems:"center",margin:"5px"}}/> Rights Reserved || Login Books

    </div>
  )
}
