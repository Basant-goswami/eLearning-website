import React from 'react'
import QuizStructure from './QuizStructure'
import Questions from './FullstackQues'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import { Route } from 'react-router-dom'

export default function FullstackQuiz() {
    let route = "/courses/fullstack";
    return (
        <>
            <Navbar />
            
            <QuizStructure Questions={Questions} path={route}/>

            <Footer />
        </>
    )
}
