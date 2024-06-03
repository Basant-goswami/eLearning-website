import React from "react";
import { Link } from "react-router-dom";
import Coursestructure from "../Course/Coursestructure";

export default function Cources() {
  const obj1 = {
    time: "0.1s",
    img: "/img/course-1.jpg",
    readlink:
      "https://en.wikipedia.org/wiki/Outline_of_web_design_and_web_development",
    join: "/courses/fullstack",
    price: "$389.00",
    review: 245,
    title: "Web Design & Development Course for Beginners",
    teachername: "Basant",
    duration: "9.50 Hrs",
    totalstudent: "335",
  };

  const obj2 = {
    time: "0.3s",
    img: "/img/java.jpg",
    readlink: "https://en.wikipedia.org/wiki/Java_(programming_language)",
    join: "/courses/java",
    price: "$189.00",
    review: 85,
    title: "Basic & Core Java Programming Language",
    teachername: "Basant",
    duration: "4.50 Hrs",
    totalstudent: "65",
  };

  const obj3 = {
    time: "0.5s",
    img: "/img/course-3.jpg",
    readlink: "https://en.wikipedia.org/wiki/Data_structure",
    join: "/courses/dsa",
    price: "$219.00",
    review: 95,
    title: "Data Structure & Algorithms Using Java",
    teachername: "Basant",
    duration: "4.50 Hrs",
    totalstudent: "57",
  };

  return (
    <>
      {/* *********** CATAGORY ************** */}

      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Categories
            </h6>
            <h1 className="mb-5">Courses Categories</h1>
          </div>

          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div
                  className="col-lg-12 col-md-12 wow zoomIn"
                  data-wow-delay="0.1s"
                >
                  <Link
                    className="position-relative d-block overflow-hidden"
                    to="/courses/mern"
                  >
                    <img className="img-fluid" src="/img/cat-1.jpg" alt="" />
                    <div
                      className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                      style={{ margin: "1px" }}
                    >
                      <h5 className="m-0">MERN Stack</h5>
                      <small className="text-primary">4 Courses</small>
                    </div>
                  </Link>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.3s"
                >
                  <Link
                    className="position-relative d-block overflow-hidden"
                    to="/courses/fullstack"
                  >
                    <img className="img-fluid" src="/img/cat-2.jpg" alt="" />
                    <div
                      className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                      style={{ margin: "1px" }}
                    >
                      <h5 className="m-0">Full Stack Web Devlopment</h5>
                      <small className="text-primary">8 Courses</small>
                    </div>
                  </Link>
                </div>
                <div
                  className="col-lg-6 col-md-12 wow zoomIn"
                  data-wow-delay="0.5s"
                >
                  <Link
                    className="position-relative d-block overflow-hidden"
                    to="/cources/programming"
                  >
                    <img className="img-fluid" src="/img/cat-3.jpg" alt="" />
                    <div
                      className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                      style={{ margin: "1px" }}
                    >
                      <h5 className="m-0">Programming Languages Tutorial</h5>
                      <small className="text-primary">4 Courses</small>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: "350px" }}
            >
              <a
                className="position-relative d-block h-100 overflow-hidden"
                href
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="/img/cat-4.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: "1px" }}
                >
                  <h5 className="m-0">Online Marketing</h5>
                  <small className="text-primary">1 Course</small>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ************** COURSES ***************/}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">Popular Courses</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <Coursestructure data={obj1} />
            <Coursestructure data={obj2} />
            <Coursestructure data={obj3} />
          </div>
        </div>
      </div>
    </>
  );
}
