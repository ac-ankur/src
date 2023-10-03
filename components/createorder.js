import React from 'react';
import AHeader from './afterloginheader';
import '../assets/css/order.css'


class CreateOrder extends React.Component {
  render() {
    return (
        <div>
          <AHeader/>
          <div className="coreceiver_information">
            <div className="coreceiver_info">
              <h3 className="coboxhead">Create Order</h3>
              <hr />
              <form action="" className="coreceive">
                <select className="coreceiveinput">
                  <option value="select Currency" selected>
                    Select Currency
                  </option>
                  <option value="INR">INR</option>
                  <option value="CAD">CAD</option>
                  <option value="USD">USD</option>
                </select>

                <input className="coreceiveinput right" type="number" placeholder="Amount" />
                <select className="coreceiveinput">
                  <option value="Sender Name" selected>
                    Sender Name
                  </option>
                  <option value="Amit">Amit</option>
                  <option value="Sumit">Sumit</option>
                  <option value="Tania">Tania</option>
                </select>
                <select className="coreceiveinput right">
                  <option value="Receiver Name" selected>
                    Receiver Name
                  </option>
                  <option value="Mayank">Mayank</option>
                  <option value="Vidhi">Vidhi</option>
                  <option value="Sneha">Sneha</option>
                </select>
                <select className="coreceiveinput">
                  <option value="Customer Relationship" selected>
                    Customer Relationship
                  </option>
                  <option value="Son">Son</option>
                  <option value="Daughter">Daughter</option>
                </select>
                <div className="coreceiveinput right">
                  <input type="file" placeholder="Upload Document" />
                  <label id="fileLabel">Upload Document</label>
                </div>
                <textarea name="" id="" rows="4">
                  Remarks
                </textarea>
                <select className="coreceiveinput payment">
                  <option value="Payment Modes" selected>
                    Payment Modes
                  </option>
                  <option value="UPI">UPI</option>
                  <option value="Net Banking">Net Banking</option>
                </select>
                <input type="checkbox" />
                <span className="inspan">
                  I agree to these{' '}
                  <a href="TermsandConditions.html" className="inspana">
                    Terms and Conditions
                  </a>
                </span>
                <button className="receivebtn">Submit</button>
              </form>
            </div>
          </div>
          </div>
    );
  }
}

export default CreateOrder;
