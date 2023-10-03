import React from "react";
import Header from '../header/header.jsx';
import Footer from "../footer/footer.jsx";

function About() {
  return (
    <div className="">
      <Header />
      <div className="about" id="about">
        <h1 className="heading">About Us </h1>
        <div className="row">
          <div className="image">
            <img src='images/about.jpg' alt="about" />
          </div>
          <div className="content">
            <h3>Why Us?</h3>
            <p>We come across this question often! Because we are honored to offer the customer our best quality,
              most affordable, coolest and most useful lenses. Customer satisfaction is our pride! That's why we
              do our job with confidence and care. Also we provide payment at the door.</p>
            <a href='images/learn more.png' className="btn">learn more</a>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default About;
