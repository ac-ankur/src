import React from 'react'
import payment from './images/payment-service2.png';

const Money = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row d_flex">
          <div className="col-md-12 col-lg-5">
            <div className="about_img">
              <figure><img src={payment} alt="#" /></figure>
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <div className="titlepage">
              <h2>
                <span style={{
                  color: 'black',
                  fontSize: '28px',
                  lineHeight: '50px',
                  fontWeight: 'bold'
                }}>Why Send Money with Our Payment Service</span>
              </h2>
              <p>
                <ul style={{ listStyle: 'circle', fontSize: '16px' }}>
                  <li style={{ color: 'black', listStyleType: 'disc' }}>You and your loved ones can track your transfer every step of the way.</li>
                  <li style={{ color: 'black', listStyleType: 'disc' }}>More money makes it home thanks to our great rates, special offers, and no hidden fees.</li>
                  <li style={{ color: 'black', listStyleType: 'disc' }}>You can trust that transfers will be delivered on time or we’ll refund your fees.</li>
                </ul>
              </p>
              <a className="read_more" href="#" style={{ marginTop: '26px' }}>Try it now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Money