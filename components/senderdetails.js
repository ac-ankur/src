import React from 'react';
// import '../assets/css/styles.css';
// import '../assets/css/style.css';
import '../assets/css/senderdetail.css';
import AHeader from './afterloginheader';
// import 'font-awesome/css/font-awesome.min.css';
// import 'font-awesome/css/font-awesome.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function SenderDetails() {
  return (
    <div>
      <AHeader/>
      <div className="receiver_box">
        <h3>Great Job! Receiver Added</h3>
      </div>
      <div className="boxlogin11">
        <h3 className="boxheadsender">Show Sender Detail</h3>
        <div className="getremit">
          <div className="scard srcard1">
           
              <div className="sremitcard">
                <div className="suserremit">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                  <h3 className="remithead username">Siddharth</h3>
                </div>
                <div className="receive_detail">
                  <h3 className="remithead btn draw-border10 show" onClick={toggleText} id="textButton">Show Details</h3>
                  <h3 className="receiver_del"><i className="fa fa-trash" aria-hidden="true"></i>Delete</h3>
                </div>
              </div>
              <span id="points">...</span>
              <span id="moreText">
                <div className="sender_tab">
                  <table className="remitinfo">
                    <tr>
                      <td className="tdh">Bank Name :</td>
                      <td>HDFC</td>
                    </tr>
                    <tr>
                      <td className="tdh">Bank Address :</td>
                      <td>Seattle</td>
                    </tr>
                    <tr>
                      <td className="tdh">Bank Country :</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td className="tdh">Swift Code :</td>
                      <td>iban</td>
                    </tr>
                    <tr>
                      <td className="tdh">Holder Name :</td>
                      <td>Amit</td>
                    </tr>
                    <tr>
                      <td className="tdh">Account No. :</td>
                      <td>682949092737</td>
                    </tr>
                  </table>
                  <table>
                    <tr>
                      <td className="tdh1">Address :</td>
                      <td>C-102 Vijay Nagar</td>
                    </tr>
                    <tr>
                      <td className="tdh1">City :</td>
                      <td>Ghaziabad</td>
                    </tr>
                    <tr>
                      <td className="tdh1">State :</td>
                      <td>Uttar Pradesh</td>
                    </tr>
                    <tr>
                      <td className="tdh1">Country :</td>
                      <td>India</td>
                    </tr>
                    <tr>
                      <td className="tdh1">Postal Code :</td>
                      <td>3003</td>
                    </tr>
                  </table>
                </div>
              </span>
           
          </div>
        </div>
        <button className="addreceiver" onClick={() => window.location.href = 'AddReceiverInformation.html'}>ADD SENDER</button>
      </div>
    </div>
  );
}

function toggleText() {
  let points = document.getElementById("points");
  let showMoreText = document.getElementById("moreText");
  let buttonText = document.getElementById("textButton");

  if (points.style.display === "none") {
    showMoreText.style.display = "none";
    points.style.display = "inline";
    buttonText.innerHTML = "Show Details";
  } else {
    showMoreText.style.display = "inline";
    points.style.display = "none";
    buttonText.innerHTML = "Hide Details";
  }
}

export default SenderDetails;
