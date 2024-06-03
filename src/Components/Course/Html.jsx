import React from 'react'
import Coursecart from './Coursecart'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'

export default function Html() {
    return (
        <>
        <Navbar/>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">HTML Tutorial in one video</h1>
                    </div>
                    <div className="row g-2 justify-content-center">

                        <Coursecart link="http://localhost:8080/HTML Tutorial.mp4" title="HTML Tutorial" desc="HTML full video Tutorial in one video" />

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
