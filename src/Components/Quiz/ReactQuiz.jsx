import React from 'react'
import Navbar from '../Pages/Navbar'
import QuizStructure from './QuizStructure'
import Questions from './ReactQues'
import Footer from '../Pages/Footer'

export default function ReactQuiz() {
    return (
        <>
            <Navbar />
            <QuizStructure Questions={Questions} path = "/courses/mern/react"/>
            <Footer />
        </>
    )
}
