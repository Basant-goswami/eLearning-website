import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Sign() {
    return (
        <>
            <Navbar />
            
            <div className=" m-4 ">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Sign In Page</h6>
                    <h1 className="mb-5">Sign In</h1>
                </div>
                <div className="singin container" style={{ height: "50vh", minWidth: "70%" }}>

                    <form method='post' action='http://localhost:8080/signIn/'>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" name='pwd' class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className='text-center'>
                        <button type="submit" class="btn btn-primary  me-4 animated slideInLeft"> Submit </button>
                        <button className="btn btn-primary animated slideInRight"><Link to="/register" style={{ color: "white" }}>Sign Up</Link></button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}
