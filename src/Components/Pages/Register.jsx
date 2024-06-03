import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Register() {
    return (
        <>
            <Navbar />
            <div className="m-5" style={{minHeight:"70vh"}}>
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Sign Up Page</h6>
                    <h1 className="mb-5">User Register Page</h1>
                </div>

                <form method='post' action='http://localhost:8080/register'>
                    <div className="row mb-3">
                        <label for="name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" name='name' className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="phone" className="col-sm-2 col-form-label">Phone</label>
                        <div className="col-sm-10">
                            <input type="tel" name='phone' className="form-control" id="phone" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input type="email" name='email' className="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="inputPassword3" className="col-sm-2 col-form-label">Set Password</label>
                        <div className="col-sm-10">
                            <input type="password1" name='password1' className="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="RePassword" className="col-sm-2 col-form-label">Re-enter Password</label>
                        <div className="col-sm-10">
                            <input type="password" name='password2' className="form-control" id="RePAssword" />
                        </div>
                    </div>
                    <br></br>
                    <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Register</button>                
                    </div>
                </form>

            </div>

            <Footer />
        </>
    )
}
