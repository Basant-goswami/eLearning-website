import React from 'react'
import Navbar from '../Pages/Navbar'
import Questions from './JavascriptQues'
import QuizStructure from './QuizStructure'
import Footer from '../Pages/Footer'

export default function JavascriptQuiz() {
  let route = "/cources/programming/javascript";
  return (
    <>
    <Navbar/>
    <QuizStructure Questions={Questions} path={route}/>
    <Footer/>
    </>
  )
}
