import React from "react";
import "./About.css";
import Footer from "../../Components_hub/Footer/Footer.jsx";

const About = () => {
  return (
    <>
      <header>
        <h1>About the Hostel Warden</h1>
        <p>Learn more about the person who takes care of our students.</p>
      </header>

      <div className="col mb-2 p-5">
        <div className="p-5">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h1>
                <strong className="d-inline-block mb-2 text-primary">
                  PCOS
                </strong>
              </h1>
              <p className="card-text mb-auto">
                It is a condition in which the ovaries produce an abnormal
                amount of androgens, male sex hormones that are usually present
                in women in small amounts.
              </p>
            </div>
            <div className="col-auto d-none d-lg-block img-fluid ">
              <img
                className="responsive"
                src="https://source.unsplash.com/200x300/?hospital"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <h1>
                <strong className="d-inline-block mb-2 text-success">
                  Diabetes
                </strong>
              </h1>
              <br />
              <p className="mb-auto">
                Diabetes is a chronic (long-lasting) health condition that
                affects how your body turns food into energy
              </p>
            </div>
            <div className="col-auto d-none d-lg-block img-fluid ">
              <img
                className="responsive"
                src="https://source.unsplash.com/200x300/?diabetes"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
