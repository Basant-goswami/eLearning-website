import React from 'react'
import Navbar from '../Pages/Navbar'
import Header from '../Pages/Header'
import Team from '../Pages/Team'
import Footer from '../Pages/Footer'
import Spinner from '../Pages/Spinner'

export default function Team1() {
  return (
    <>
    <Spinner/>
    <Navbar/>
    <Header name="Our Team"/>   
    
    {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Instructors</h6>
                        <h1 className="mb-5">Expert Instructors</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-1.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-2.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-3.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-4.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-2.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-3.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-4.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="team-item bg-light">
                                <div className="overflow-hidden">
                                    <img className="img-fluid" src="src/assets/img/team-1.jpg" alt="" />
                                </div>
                                <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                    <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                                        <a className="btn btn-sm-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                                <div className="text-center p-4">
                                    <h5 className="mb-0">Instructor Name</h5>
                                    <small>Designation</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

    <Team/>
    <Team/>

    <Footer/>
    </>
  )
}
