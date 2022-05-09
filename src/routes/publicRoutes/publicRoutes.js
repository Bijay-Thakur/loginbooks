import React from 'react'
import Books from '../../Components/Books/books'
import Herosection from '../../Components/herosection/herosection'

export default function publicRoutes() {
  return (
    <>
    <Route path="/" element={<Herosection/>}/>
    <Route path="/books" element={<Books/>}/>
    </>
  )
}
