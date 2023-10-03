import React from 'react';
// import './App.css'; // Import your CSS styles here
import '../assets/css/addreceiverstyle.css'

import NewFooter from './footer2';
import AHeader from './afterloginheader';




function AddSender() {
  return (
    <div className="receiver_body">
      <AHeader/>
      <div className="receiver_box">
        <h3>Your receivers will appear on this page.</h3>
      </div>
      <h3 className="receiver_head">Sender's</h3>
      <div className="addrcard">
        <p className='addp'>Welcome! After you start sending money, your senders will be listed here.</p>
      </div>
      <a href="/createremitter">
      <button className="receiver_btn">
        Add Sender
      </button>
      </a>
      {/* <NewFooter/> */}
    </div>
  );
}

export default AddSender;
