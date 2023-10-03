import React from 'react'
// import { faHome,faTwitter } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faHouse, faXTwitter, fa, faChevronRight, faMapMarker, faEnvelope, faVolumeControlPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div class="container">
          <div class="row footerbox">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <h4 class="footerlogo">Remitance</h4>
              <div class="follow">
                <p>
                  We are here to enable students and their parents to seamlessly receive money across
                  borders reducing cost and time to send money abroad.
                </p>
                <h5 class="footerfollow">Follow us</h5>
                <ul class="social_icon">
                  <i class="bi-alarm"></i>
                  <li> <a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li> <a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li> <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li> <a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6 quick">
              <h3><span class="underline underline--stars">Quick link</span></h3>
              <div class="flinks">
                <ul class="link_icon">
                  <li><a href="index.html"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Home</a>
                  </li>
                  <li> <a href="#"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> About</a></li>
                  <li> <a href="#"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Currency
                    Calculator</a></li>
                  <li> <a href="CreateRemitter.html"><FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Add Sender Account</a></li>
                  <li><a href="uploadbulkdocument.html"><FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Upload Document</a></li>
                </ul>
                <ul class="link_icon">
                  <li> <a href="CreateBeneficiary.html"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Add Receiver Account</a></li>
                  <li> <a href="Createorder.html"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Send Money</a></li>
                  <li> <a href="GetRemitter.html"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" />
                     Show Sender Detail</a></li>
                  <li> <a href="GetBeneficiary.html"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Show Receiver Account</a>
                  </li>
                  <li> <a href="GetOrder.html"> <FontAwesomeIcon icon={faChevronRight} area-hidden="index.html" /> Show Transaction Details</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <h3 class="contactfooter"><span class="underline underline--stars">Contact us</span></h3>
              <ul class="location_icon">
                <li><a href="#"><FontAwesomeIcon icon={faMapMarked} area-hidden="index.html" /></a>Plot 20, IT Plots, ConsultIT
                  House, TECHZONE 7, West,
                  opposite Bloom International School, Greater Noida, Uttar Pradesh 203207
                </li>
                <h5 class="footerfollow">Get in Touch</h5>
                <li class="emailfooter"><a href="#"><FontAwesomeIcon icon={faEnvelope} area-hidden="index.html" /></a>remitance@gmail.com</li>
                <li class="emailph"><a href="#"><FontAwesomeIcon icon={faVolumeControlPhone} area-hidden="index.html" /></a>+01 102586954775
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright">
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <p>Remitance ©️ 2023. All Rights Reserved.<a href="https://html.design/"> </a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer