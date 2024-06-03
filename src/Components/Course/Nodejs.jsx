import React from 'react'
import Coursecart from './Coursecart'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'

export default function Nodejs() {
    return (
        <>
            <Navbar />
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">Node Js Tutorial videos</h1>
                    </div>
                    <div className="row g-2 justify-content-center">

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\01. What is node.js.mp4" title="01. What is Node js" desc="Introduction of Node js."/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\02. Node Installation.mp4" title="02. Node Installation" desc="Node Installation setup into system"/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\04. Node REPL.mp4" title="03. Node REPL" desc="learn about Node REPL"/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\06. Process in Node.mp4" title="04. Process in Node" desc="learn about what is Process in Node"/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\07. Export in Files.mp4" title="05. Export in Files" desc="learn Export in Files in node js"/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\08. Export in Directories.mp4" title="06. Export in Directories" desc="Files Export in Directories"/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\09. What is npm_.mp4" title="07. What is npm_" desc="Introdution : npm and its uses"/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\10. Installing Packages.mp4" title="08. Installing Packages" desc="How to install a packages into a directoris or file."/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\11. package.json.mp4" title="09. package.json" desc="Learn about package.json file"/>

                        <Coursecart link="http://localhost:8080/App Developer\Day - 30 (18_08_23) 1. Node js\35. Backend 1 (Node.js)\13. import modules.mp4" title="10. import modules" desc="how to import modules from one file to another."/>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
