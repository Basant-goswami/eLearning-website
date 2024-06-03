import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import ClearIcon from "@mui/icons-material/Clear";

export default function FeedbackAll() {
  const [value, setValue] = React.useState(2);
  const [feedbackData, setFeedbackData] = useState([]);
  let url = "https://elearning-backend-lfxb.onrender.com/feedback";

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch(url);
        let data = await response.json();
        setFeedbackData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  function formatDate(date) {
    return date.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      // second: "numeric",
      // hour12: true,
    });
  }

  return (
    <>
      <Navbar />
      <Header name="Feedbacks" />

      {/* feedback form */}
      <div className="conainer mt-4">
        <div className="row mt-4 wow fadeInUp" data-wow-delay="0.3s">
          <h1 className="text-center">Give your Feedback</h1>
          <form
            action="https://elearning-backend-lfxb.onrender.com/feedback/new"
            method="post"
            className="col-md-6 offset-md-3 mb-4 wow fadeInUp"
          >
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingInput"
                placeholder="John Deo"
                required
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <textarea
                name="comment"
                className="form-control"
                id="flotingInput"
                placeholder="Enter Your Feedback"
                style={{ height: "100px" }}
                required
              ></textarea>
              <label htmlFor="floatingInput">Comment</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="image"
                class="form-control"
                id="floatingInput"
                placeholder="Enter Your Image URL"
              />
              <label htmlFor="floatingInput">Image Url</label>
            </div>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <div>
              <input type="text" hidden name="rating" value={value} />
            </div>
            <br></br>
            <button className="btn btn-primary">Submit</button>
            <hr />
          </form>
        </div>

        {/* All feedback  */}

        <div className="text-center wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-center text-primary px-3">
            All Feedbacks of Users
          </h6>
          <h1 className="mb-5">All Feedbacks</h1>
        </div>
      </div>

      <div className="row offset-md-2">
        {feedbackData.map((feedback) => (
          <div
            key={feedback._id}
            className="col-md-5 ms-2 mt-3 card mb-3 pl-2 wow fadeInUp"
            style={{ maxWidth: "540px" }}
            data-wow-delay="0.3s"
          >
            <a
              href={`https://elearning-backend-lfxb.onrender.com/feedback/${feedback._id}`}
            >
              <span
                class="material-symbols-outlined position-absolute top-0 end-0"
                style={{ cursor: "pointer" }}
              >
                close
              </span>
            </a>
            <div className="row g-0">
              <div className="col-md-3 mt-3">
                <img
                  style={{ width: "6rem", height: "6rem" }}
                  src={feedback.image}
                  className="d-block border rounded-circle p-2 mx-auto mb-3"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <p className="card-text mb-0 ps-3">
                  <small className="text-body-secondary">
                    {formatDate(new Date(feedback.date))}
                  </small>
                </p>
                <div className="card-body pt-0 mt-0">
                  <p className="card-text p-0 fw-bold">{feedback.name}</p>
                  <p className="card-text">{feedback.comment}</p>
                  <Rating name="read-only" value={feedback.rating} readOnly />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
