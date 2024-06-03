import React from 'react'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Coursecart from './Coursecart'

export default function Advjava() {
    return (
        <>
            <Navbar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Full Advance java Tutorial</h1>
                    </div>
                    <div className="row g-2 justify-content-center">

                        <Coursecart link="http://localhost:8080/Advanced Java Full Course 2023.mp4" title="Advanced Java Full Course" desc="Leran Advance Java Tutorial J2EE, JSP, JDBC, Java API, SpringBoot etc." />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
