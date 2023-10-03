import React from 'react';
import AHeader from './afterloginheader';

function MySenders() {
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

  return (
        <div>
        <AHeader/>
        <div className="receiver_box">
          <h3>Great Job! Receiver Added</h3>
        </div>
        <div className="boxlogin1">
          <h3 className="boxhead">Show Sender Detail</h3>
          <div className="getremit">
            <div className="card rcard1">
              <p>
                <div className="remitcard">
                  <div className="userremit">
                    <i
                      className="fa fa-user-circle userpic"
                      aria-hidden="true"
                    ></i>
                    <h3 className="remithead username">Mehak</h3>
                  </div>
                  <div className="receive_detail">
                    <h3
                      className="remithead btn draw-border10 show"
                      onClick={toggleText}
                      id="textButton"
                    >
                      Show Details
                    </h3>
                    <h3 className="receiver_del">
                      <i className="fa fa-trash" aria-hidden="true"></i>
                      Delete
                    </h3>
                  </div>
                </div>
                <span id="points">...</span>
                <span id="moreText">
                  <div className="sender_tab">
                    <table className="remitinfo">
                      <tr>
                        <td className="tdh">Email :</td>
                        <td>mehak@123@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="tdh">Phone Number :</td>
                        <td>9278345678</td>
                      </tr>
                      <tr>
                        <td className="tdh">Date Of Birth :</td>
                        <td>12/03/1992</td>
                      </tr>
                      <tr>
                        <td className="tdh">Pan No. :</td>
                        <td>AC485020</td>
                      </tr>
                      <tr>
                        <td className="tdh">Aadhar No. :</td>
                        <td>1245675020</td>
                      </tr>
                      <tr>
                        <td className="tdh">Nationality :</td>
                        <td>Indian</td>
                      </tr>
                      <tr>
                        <td className="tdh">State :</td>
                        <td>Uttar Pradesh</td>
                      </tr>
                    </table>
                    <table>
                      <tr>
                        <td className="tdh1">City :</td>
                        <td>Ghaziabad</td>
                      </tr>
                      <tr>
                        <td className="tdh1">Address :</td>
                        <td>C-102 Vijay Nagar</td>
                      </tr>
                      <tr>
                        <td className="tdh">Bank Name :</td>
                        <td>HDFC</td>
                      </tr>
                      <tr>
                        <td className="tdh">Bank Code :</td>
                        <td>HDFC2345</td>
                      </tr>
                      <tr>
                        <td className="tdh">Account No. :</td>
                        <td>682949092737</td>
                      </tr>
                      <tr>
                        <td className="tdh1">IFSC :</td>
                        <td>HDFC1234</td>
                      </tr>
                      <tr>
                        <td className="tdh1">Postal Code :</td>
                        <td>3003</td>
                      </tr>
                    </table>
                  </div>
                </span>
              </p>
            </div>
          </div>
          <button
            className="addreceiver"
            onClick={() => (window.location.href = 'addsenderinfo.html')}
          >
            ADD SENDER
          </button>
        </div>
        </div>
  );
}

export default MySenders;
