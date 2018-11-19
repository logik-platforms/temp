import React from "react";
import "./FooterPage.css";

const FooterPage = () => {
    return(
        <div>
<footer className="section footer-classic context-dark bg-image">
        <div className="container footerlinks">
          <div className="row row-30">
            <div className="col-md-4 col-xl-5">
              <div className="pr-xl-4">
                <p>We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.</p>
                <p className="rights"><span>©  </span><span className="copyright-year">2018</span><span> </span><span>Logik Platforms</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              {/* <dl className="contact-list">
                <dt>Address:</dt>
                <dd></dd>
              </dl> */}
              <dl className="contact-list">
                <dt>email:</dt>
                <dd><a href="mailto:#">contact@logikplatforms.com</a></dd>
              </dl>
              <dl className="contact-list">
                <dt>phone:</dt>
                <dd><a href="tel:#">+1 4165765795</a> 
                {/* <span>or</span> <a href="tel:#">+91 9571195353</a> */}
                </dd>
              </dl>
            </div>
            <div className="col-md-4 col-xl-3">
              <h5>Links</h5>
              <ul className="nav-list">
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Technologies</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row no-gutters social-container">
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-facebook"></span><span>Facebook</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-instagram"></span><span>instagram</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-twitter"></span><span>twitter</span></a></div>
          <div className="col"><a className="social-inner" href="#"><span className="icon mdi mdi-youtube-play"></span><span>google</span></a></div>
        </div>
      </footer>
        </div>
    )
}

export default FooterPage;