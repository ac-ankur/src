import React from 'react';
import sicon1 from './images/services_icon1.png'
import sicon1h from './images/services_icon1h.png'
import sicon2 from './images/services_icon2.png'
import sicon2h from './images/services_icon2h.png'
import sicon3 from './images/services_icon3.png'
import sicon3h from './images/services_icon3h.png'
import sicon4 from './images/services_icon4.png'
import sicon4h from './images/services_icon4h.png'

const Services = () => {
  return (
    <div className="services">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="titlepage">
                     <h2> <span className="yellow">Services</span><br/><span className="indextrans">Transfer Money in a Minute with Secure Way</span></h2>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div id="ho_color" className="services_main">
                     <i><img src={sicon1} alt="#"/></i>
                     <img className="ho" src={sicon1h} alt="#"/>
                     <h3>Safe & Secure</h3>
                     <p>We use 2-factor authentication to protect your account
                     </p>
                     <a className="read_more" href="#">Read More</a>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div id="ho_color" className="services_main">
                     <i><img src={sicon2} alt="#"/></i>
                     <img className="ho" src={sicon2h} alt="#"/>
                     <h3>Fully Encrypted</h3>
                     <p>All your data is protected by 256+ bit encryption and Two-Factor Authentication (2FA) for login
                     </p>
                     <a className="read_more" href="#">Read More</a>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div id="ho_color" className="services_main">
                     <i><img src={sicon3} alt="#"/></i>
                     <img className="ho" src={sicon3h} alt="#"/>
                     <h3>Instant Cashout</h3>
                     <p>Our service is convenient, fast, and reliable.
                     </p>
                     <a className="read_more" href="#">Read More</a>
                  </div>
               </div>
               <div className="col-md-3 col-sm-6">
                  <div id="ho_color" className="services_main">
                     <i><img src={sicon4} alt="#"/></i>
                     <img className="ho" src={sicon4h} alt="#"/>
                     <h3>Experts Support</h3>
                     <p>Our dedicated fraud and security teams work to keep your money safe
                     </p>
                     <a className="read_more" href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
  )
}

export default Services