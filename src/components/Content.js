import React from "react";
import {Link} from "react-router-dom"

export default function Content() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202108/whatsapp_mod-sixteen_nine.jpg?size=948:533"
              width="600"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Welcome To The Tech Hack Channel
            </h1>
            <p className="lead">
              TechHack is the only training firm in India to provide regular
              live training sessions, assured internships and over 10 industry
              projects. We have trained over 800 students in the field of cyber
              security and our students have been recognised by the government
              of India. Our major objective is to create a one stop solution for
              learning Cyber security from scratch. We offer courses right from
              extreme beginner level up-to super advanced. Each training program
              is packed with tons of Internship and freelancing opportunities.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
                Learn more About Tech
              </button>
             
                <Link to="/about" className="btn btn-outline-secondary btn-lg px-4">Read more about us</Link>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
