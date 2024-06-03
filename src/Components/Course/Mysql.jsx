import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Coursecart from './Coursecart'

export default function Mysql() {
    return (
        <>
            <Navbar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Mysql Tutorial</h1>
                    </div>
                    <div className="row g-2 justify-content-center">

                        <Coursecart link="http://localhost:8080/SQL - Complete Course in 3 Hours _ SQL One Shot using MySQL.mp4" title=" SQL using MySQL" desc="SQL One Shot video using MySQL (3 Hrs)." />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
