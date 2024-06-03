import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Feedback() {
  return (
    <>
      <Navbar />
      <h1>Hello Feedback</h1>
      <div className="feedback vh-100">
        <form action="/feedback">
          <input
            className="form-control"
            type="text"
            name="name"
            id="name"
            placeholder="John deo"
          />
          <input
            className="form-control"
            type="text"
            name="image"
            id="image"
            placeholder="Image Url"
          />
          <textarea
            className="form-control"
            name="comment"
            id="comment"
            cols="50"
            rows="5"
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
