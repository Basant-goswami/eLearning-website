import React from 'react'

export default function Coursecart({ link, title, desc}) {

    return (
        <>
            <div className="col-lg-4 col-md-6 wow fadeInUp">
                <div className="course-item bg-light text-center">
                    <div className="position-relative overflow-hidden">
                        <video width="360" height="240" controls>
                            <source src={link} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="text-center p-4 pb-0">
                        <h3 className="mb-0">{title}</h3>
                        <p className="mb-4">{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
