import React from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b9fd69e0-c307-4f57-b90f-9c4106746fcb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <h5>Get In Touch</h5>
              <p className="mb-4">
                The contact form is currently inactive. Please contact on phone,
                mail or social-media.
              </p>
              <div className="d-flex align-items-center mb-3">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="fa fa-map-marker-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">DSCET chennai,Tamil Nadu</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="fa fa-phone-alt text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+91 705 088 9705</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i className="fa fa-envelope-open text-white" />
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">basantgoswami7050@gmail.com</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4327.512444698837!2d80.17810250948644!3d12.620432297105136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53ab5250243c71%3A0xbb338ff75412f3f5!2sDhanalakshmi%20Srinivasan%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1710127521636!5m2!1sen!2sin"
                frameBorder={0}
                style={{ minHeight: "300px", border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form onSubmit={onSubmit}>
                <input type="hidden" name="from_name" value="eLearning" />

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Mobile No"
                        required
                      />
                      <label htmlFor="subject">Mobile No</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        name="message"
                        style={{ height: "150px" }}
                        defaultValue={""}
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <input
                    type="hidden"
                    name="subject"
                    value="New Submission from contact page"
                  ></input>
                  <div className="col-8">
                    <HCaptcha
                      sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                      reCaptchaCompat={false}
                      onVerify={onHCaptchaChange}
                    />
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
