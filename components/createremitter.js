import React from 'react';
// import './App.css'; // Import your CSS styles here
import '../assets/css/createremitter.css';
import AHeader from './afterloginheader';

function CreateRemitter() {
  return (
    <div className="App main-layout">
      {/* loader */}
      {/* <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
      </div> */}
      {/* end loader */}
      {/* header */}
      <AHeader></AHeader>
      {/* form */}
      
      <div className="crboxlogin1">
        <h3 className="boxhead1">Add Sender's Information</h3>
        <hr></hr>
        <h2 className='sendersbankinfo'>Sender's Personal Information</h2>
        <form action="" className="receive1" >
          <input className="receiveinput1" type="text" placeholder="Name" />
          <input className="receiveinput1 right" type="email" placeholder="Email" />
          <input className="receiveinput1" type="tel" placeholder="Phone Number" />
          <input className="receiveinput1 right" type="date" onFocus={() => { }} placeholder="Date Of Birth" />
          <input className="receiveinput1 " type="text" placeholder="Address" />
         
          <input className="receiveinput1 right" type="text" placeholder="State" />
          <input className="receiveinput1 " type="text" placeholder="City" />
          <select className="receiveinput right">
            <option value="select code">--Select Nationality--</option>
            <option value="sort code">Indian</option>
            <option value="transit code">Canadian</option>
            <option value="bsb number">American</option>
          </select>
          <input className="receiveinput1" type="number" placeholder="Postal Code" />
          <h2 className='sendersbankinfo1'>Sender's Bank Information</h2>
          <input className="receiveinput1" type="text" placeholder="Bank Name" />
          <input className="receiveinput1 right" type="number" placeholder="Bank Code" />
          <input className="receiveinput1" type="number" placeholder="Account Number" />
          <input className="receiveinput1 right" type="text" placeholder="IFSC Code" />
          <input className="receiveinput1" type="text" placeholder="PAN Number" />
          <input className="receiveinput1 right" type="number" placeholder="Aadhar Number" />
          <input className="receiveinput1" type="number" placeholder="Postal Code" />
          <input className="receiveinput1 right" type="text" placeholder="Country" title="Country" />
          <button className="receivebtn">Submit</button>
        </form>
      </div>
    </div>
    
  );
}

export default CreateRemitter;
