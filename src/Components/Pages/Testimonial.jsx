import React from "react";
import Header from "./Header";

export default function Testimonial() {
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
                <h5 className="mb-0">Selena </h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    The video lectures are clear and concise, and the quizzes
                    are helpful for reviewing material.
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
                <h5 className="mb-0">Cris Levon</h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    The e-learning site has a user-friendly interface and a
                    diverse range of courses to choose from. The video lectures
                    are informative and well-presented, and the quizzes are a
                    great way to test knowledge retention.{" "}
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
                <h5 className="mb-0">Magnus Carlson</h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    The video content is engaging and easy to follow, and the
                    quizzes are beneficial for self-assessment.
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
                <h5 className="mb-0">Nyra Carl</h5>
                <p>Student</p>
                <div className="testimonial-text bg-light text-center p-4">
                  <p className="mb-0">
                    The e-learning site is intuitive and offers a broad
                    selection of courses.It would be helpful to have more
                    interactive elements, such as live Q&A sessions with
                    instructors, to enhance the learning experience.{" "}
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
