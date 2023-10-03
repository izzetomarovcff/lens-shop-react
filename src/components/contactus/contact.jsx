import React from "react";

import Header from '../header/header.jsx';
import Footer from "../footer/footer.jsx";
function Contact() {
  return (
    <div className="">
      <Header />
      <div className="contact" id="contact us">
        <h1 className="heading">contact us</h1>
        <div class="row">
          <iframe class="map"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d24080.29794842491!2d28.958047359744217!3d41.024441125127645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVsLCBUw7xya2l5ZQ!3m2!1d41.0082376!2d28.9783589!4m5!1s0x14cab7650656bd63%3A0x8ca058b28c20b6c3!2zVGFrc2ltIE1leWRhbsSxLCBHw7xtw7zFn3N1eXUsIDM0NDM1IEJleW_En2x1L8Swc3RhbmJ1bCwgVMO8cmtpeWU!3m2!1d41.0370023!2d28.985091699999998!5e0!3m2!1str!2saz!4v1684459600436!5m2!1str!2saz"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <form>
            <h3>contact information</h3>
            <div class="content">
              <p>Our Number:</p>
              <span class="icon"><i class="fa-solid fa-phone"></i></span>
              <p1>+90 525 555 ** **</p1>
              <a href="https://outlook.live.com/owa/" class="btn">contact with our mail</a>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
