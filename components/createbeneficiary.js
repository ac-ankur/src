import React from 'react';
import '../assets/css/AddReceiverInformation.css'; // Import your additional CSS
import RHeader from './rheader';
import AHeader from './afterloginheader';
function CreateBeneficiary() {
  return (
    <div className="App main-layout">
      {/* loader */}
      {/* <div className="loader_bg">
        <div className="loader"><img src="images/loading.gif" alt="#" /></div>
      </div> */}
      {/* end loader */}
      {/* header */}
      <AHeader/>
      <div className="receiver_information">
        <div className="receiver_info">
          <h3 className="boxhead1" >Add Receiver's Information</h3>
          <p>Know your receiver. After your money transfer has been completed, you may not be eligible for a refund.</p>
          <hr />
          <h2 className="bank_info">Receiver's Bank Information</h2>
          <form action="" className="receive1">
            <input className="receiveinput1" type="number" placeholder="Account Number" />
            <input className="receiveinput1 right" type="text" placeholder="Account Holder's Name" />
            <input className="receiveinput1" type="text" placeholder="Bank Name" />
            <input className="receiveinput1 right" type="text" placeholder="Bank Address" />
            <input className="receiveinput1" type="text" placeholder="Bank Country" />
            <select className="receiveinput1 right">
              <option value="select code">--Select Code--</option>
              <option value="sort code">Sort Code</option>
              <option value="transit code">Transit Code</option>
              <option value="bsb number">Bsb Number</option>
              <option value="iban">Iban</option>
            </select>
            <input className="receiveinput1 " type="text" placeholder="Swift Code" />
            
            <h2 className="bank_info1">Receiver's Personal Information</h2>
            <input className="receiveinput1 " type="text" placeholder="Address" />
            <input className="receiveinput1 right" type="text" placeholder="City" />
            <input className="receiveinput1" type="text" placeholder="State" />
            <input className="receiveinput1 right" type="text" placeholder="Country" />
            <input className="receiveinput1" type="number" placeholder="Postal Code" />
            <button className="receivebtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBeneficiary;
