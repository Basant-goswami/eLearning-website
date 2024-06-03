import React from 'react'
import Navbar from '../Pages/Navbar'
import Header from '../Pages/Header'
import Footer from '../Pages/Footer'
import Testimonial from '../Pages/Testimonial'
import Spinner from '../Pages/Spinner'

export default function () {
  return (
    <>
    <Spinner/>
    <Navbar/>
    <Header name="Testimonial"/>
    <Testimonial/>
    <Footer/>
    </>
  )
}
