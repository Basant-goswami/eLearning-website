import React from 'react'
import Coursecart from './Coursecart'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'

export default function EXpress() {
    return (
        <>
        <Navbar/>
             <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Programming Languages Tutorials</h1>
                    </div>
                    <div className="row g-2 justify-content-center">
                        <Coursecart link="http://localhost:8080/App Developer\Day - 31 (21_08_23) 2.Express\36. Backend 2 (Express)\01. What is Express_.mp4" title="01. What is Express js" desc="Introduction of Express js." />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 31 (21_08_23) 2.Express\36. Backend 2 (Express)\02. Getting started with Express.mp4" title="02. Getting started with Express" desc="Getting started with Express Js" />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 31 (21_08_23) 2.Express\36. Backend 2 (Express)\03. Handling requests.mp4" title="03. Handling requests" desc="Basics of Express Js and Handling requests" />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 31 (21_08_23) 2.Express\36. Backend 2 (Express)\04. Sending a Response.mp4" title="04. Sending a Response" desc="Sending a Response via express" />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 31 (21_08_23) 2.Express\36. Backend 2 (Express)\05. Routing.mp4" title="05. Routing" desc="Routing with Express Js" />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 31 (21_08_23) 2.Express\36. Backend 2 (Express)\07. Path Parameters.mp4" title="06. Path Parameters" desc="Adding Path Parameters in express" />

                        <Coursecart link="http://localhost:8080/App Developer\Day - 31 (21_08_23) 2.Express\36. Backend 2 (Express)\08. Query Strings.mp4" title="07. Query Strings" desc="Query Strings in express and node js" />

                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}
