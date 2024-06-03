import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";
import Coursestructure from "./Coursestructure";

export default function Mern() {
  const obj1 = {
    time: "0.1s",
    img: "/img/react.jpg",
    readlink:
      "https://en.wikipedia.org/wiki/Outline_of_web_design_and_web_development",
    join: "/courses/mern/react",
    price: "$149.00",
    review: 285,
    title: "React Js Tutorials",
    teachername: "Basant",
    duration: "1.50 Hrs",
    totalstudent: "35",
  };

  const obj2 = {
    time: "0.3s",
    img: "/img/mongodb.jpg",
    readlink: "https://en.wikipedia.org/wiki/mongodb",
    join: "/courses/mern/mongodb",
    price: "$89.00",
    review: 156,
    title: "Mongodb Tutorials",
    teachername: "Basant",
    duration: "1.50 Hrs",
    totalstudent: "35",
  };

  const obj3 = {
    time: "0.5s",
    img: "/img/express.jpg",
    readlink: "https://en.wikipedia.org/wiki/expressjs",
    join: "/courses/mern/express",
    price: "$89.00",
    review: 115,
    title: "Express Js Tutorials",
    teachername: "Basant",
    duration: "1.50 Hrs",
    totalstudent: "35",
  };

  const obj4 = {
    time: "0.6s",
    img: "/img/nodejs.jpg",
    readlink: "https://en.wikipedia.org/wiki/nodejs",
    join: "/courses/mern/nodejs",
    price: "$89.00",
    review: 85,
    title: "Node JS Tutorials",
    teachername: "Basant",
    duration: "1.50 Hrs",
    totalstudent: "35",
  };
  return (
    <>
      <Navbar />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Courses
            </h6>
            <h1 className="mb-5">MERN Stack Web Devlopment Cources</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <Coursestructure data={obj1} />
            <Coursestructure data={obj2} />
            <Coursestructure data={obj3} />
            <Coursestructure data={obj4} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
