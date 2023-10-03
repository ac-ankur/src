import React from 'react';
// import './App.css'; // Import your CSS styles here
import '../assets/css/footer.css'
function Footer1() {
  return (
    <div>
      {/* Footer */}
      <footer>
        <div className="footer">
          <div className="container">
            <div className="row footerbox">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <h5 className="footerfollow">Follow us</h5>
                <ul className="social_icon">
                  <li><a href="#"><i className="fa fa-facebook-f"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <h3 className="contactfooter"><span className="underline underline--stars">Get in Touch</span></h3>
                <ul className="location_icon">
                  <li className="emailfooter"><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>remitance@gmail.com</li>
                  <li className="emailph"><a href="#"><i className="fa fa-phone" aria-hidden="true"></i></a>+01 102586954775</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1">
                  <p>Remitance ©️ 2023. All Rights Reserved.<a href="https://html.design/"> </a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer1;
