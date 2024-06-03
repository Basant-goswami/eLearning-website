import React from 'react'

export default function Demo() {
    return (
        <>
            {/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay='0.5'>
                <div className="course-item bg-light">
                    <div className="position-relative overflow-hidden">
                    <video width="360" height="240" controls>
                            <source src={link} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="text-center p-4 pb-0">
                        <h3 className="mb-0">{title}</h3>
                        <h5 className="mb-4">{desc}</h5>
                    </div>
                </div>
            </div> */}



            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
                        <h1 className="mb-5">MERN Stack Web Devlopment Cources</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <Demo />
                        <Demo />
                        <Demo />
                        <Demo />
                        <Demo />
                        <Demo />
                        <Demo />

                    </div>
                </div>
            </div>
        </>
    )
}
