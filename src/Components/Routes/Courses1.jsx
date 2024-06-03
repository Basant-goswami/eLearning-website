import React from 'react'
import Navbar from '../Pages/Navbar'
import Header from '../Pages/Header'
import Cources from '../Pages/Courses'
import Footer from '../Pages/Footer'
import Spinner from '../Pages/Spinner'

export default function Courses1() {
  return (
    <>
    <Spinner/>
    <Navbar/>
    <Header name="Courses"/>
    <Cources/>
    <Footer/>
    </>
  )
}
