import React from 'react'
import Coursecart from './Coursecart'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'

export default function Css() {
    return (
        <>
            <Navbar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">CSS Tutorial in one video</h1>
                    </div>
                    <div className="row g-2 justify-content-center">

                        <Coursecart link="http://localhost:8080/Learn CSS.mp4" title="Full CSS Tutorial" desc="Full css video tutorial in one video" />

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
