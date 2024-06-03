import React from "react";

export default function Demo() {
  return (
    <>
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Students Say!</h1>
          </div>

          <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-inner position-relative">
              <div className="carousel-item active testimonial-item text-center">
                <img
                  className="border rounded-circle p-2 mx-auto mb-3"
                  src="/img/testimonial-1.jpg"
                  style={{ width: "80px", minHeight: "80px" }}
                  alt="..."
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  </p>
                </div>
              </div>

              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-2.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="..."
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  </p>
                </div>
              </div>
              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-3.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="..."
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  </p>
                </div>
              </div>
              <div className="carousel-item text-center">
                <img
                  src="/img/testimonial-4.jpg"
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt="..."
                  style={{ width: "80px", minHeight: "80px" }}
                />
                <h5 className="mb-0">Client Name</h5>
                <p>Profession</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit
                    diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
