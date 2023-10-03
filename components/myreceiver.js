// import React, { useState } from 'react';
// import '../assets/css/style.css'; // Import your CSS file (update the file path)

// function MyRecievers() {
//     const [showMore, setShowMore] = useState(false);
//     const [showMore1, setShowMore1] = useState(false);
//     const [showMore2, setShowMore2] = useState(false);
  
//     const toggleText = () => {
//       setShowMore(!showMore);
//     };
  
//     const toggleText1 = () => {
//       setShowMore1(!showMore1);
//     };
  
//     const toggleText2 = () => {
//       setShowMore2(!showMore2);
//     };

//   return (
//     <div>
//       <header>
//         <div className="header" style={{ padding: '42px 80px !important' }}>
//           <div className="white_bg bg2">
//             <div className="container-fluid">
//               <div className="row">
//                 <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
//                   <div className="full">
//                     <div className="center-desk">
//                       <div className="logo lg1">
//                         <p style={{
//                           color: '#ddb95d',
//                           fontSize: '22px',
//                           fontWeight: 500,
//                         }}>REMITTANCE</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
//                   <nav className="navigation navbar navbar-expand-md navbar-dark">
//                     <button
//                       className="navbar-toggler"
//                       type="button"
//                       data-toggle="collapse"
//                       data-target="#navbarsExample04"
//                       aria-controls="navbarsExample04"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarsExample04">
//                       <ul className="navbar-nav mr-auto">
//                         <li className="nav-item">
//                           <a className="nav-link" href="index.html"> Home </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="#" >About</a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="#">Services </a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="#">News</a>
//                         </li>
//                         <li className="nav-item">
//                           <a className="nav-link" href="#">Contact Us</a>
//                         </li>
//                         <li className="nav-item d_none le_co">
//                           <a className="nav-link" href="Login.html">
//                             <i className="fa fa-user" aria-hidden="true"></i> Login
//                           </a>
//                         </li>
//                         <li className="nav-item d_none le_co">
//                           <a className="nav-link" href="#">
//                             <i className="fa fa-search" aria-hidden="true"></i>
//                           </a>
//                         </li>
//                       </ul>
//                     </div>
//                   </nav>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <br />
//       <div className="boxlogin1">
//         <h3 className="boxhead">Show Receiver Account</h3>
//         <br />
//         <div className="getremit">
//           <div className="card rcard">
//             <p>
//               <i className="fa fa-user-circle" aria-hidden="true"></i>
//               <table className="remitinfo">
//                 <tr>
//                   <td className="tdh">Bank Name :</td>
//                   <td>HDFC</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Bank Address :</td>
//                   <td>Seattle</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Bank Country :</td>
//                   <td>USA</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Swift Code :</td>
//                   <td>iban</td>
//                 </tr>
//               </table>
//               <span id="points">...</span>
//               {showMore && (
//                 <span id="moreText">
//                   <table className="remitinfo">
//                     <tr>
//                       <td className="tdh">Account Holder Name :</td>
//                       <td>Amit</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh">Account No. :</td>
//                       <td>682949092737</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Address :</td>
//                       <td>C-102 Vijay Nagar</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">City :</td>
//                       <td>Ghaziabad</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">State :</td>
//                       <td>Uttar Pradesh</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Country :</td>
//                       <td>India</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Postal Code :</td>
//                       <td>3003</td>
//                     </tr>
//                   </table>
//                 </span>
//               )}
//             </p>
//             <button
//               className="btn draw-border"
//               onClick={toggleText}
//               id="textButton"
//             >
//               {showMore ? 'Show Less' : 'View More'}
//             </button>
//           </div>
//           {/* Repeat the above structure for the other cards */}
//           {/* Card 2 */}
//                       {/* Card 2 */}
//           <div className="card rcard">
//             <p>
//               <i className="fa fa-user-circle" aria-hidden="true"></i>
//               <table className="remitinfo">
//                 <tr>
//                   <td className="tdh">Bank Name :</td>
//                   <td>ICICI</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Bank Address :</td>
//                   <td>Ghaziabad</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Bank Country :</td>
//                   <td>India</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Swift Code :</td>
//                   <td>iban</td>
//                 </tr>
//               </table>
//               <span id="points1">...</span>
//               {showMore1 && (
//                 <span id="moreText1">
//                   <table className="remitinfo">
//                     <tr>
//                       <td className="tdh">Account Holder Name :</td>
//                       <td>Tania</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh">Account No. :</td>
//                       <td>267949092737</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Address :</td>
//                       <td>C-102 Kamla Nagar</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">City :</td>
//                       <td>Ghaziabad</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">State :</td>
//                       <td>Uttar Pradesh</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Country :</td>
//                       <td>India</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Postal Code :</td>
//                       <td>1293</td>
//                     </tr>
//                   </table>
//                 </span>
//               )}
//             </p>
//             <button
//               className="btn draw-border"
//               onClick={toggleText1}
//               id="textButton1"
//             >
//               {showMore1 ? 'Show Less' : 'View More'}
//             </button>
//           </div>

//           {/* Card 3 */}
//           <div className="card rcard">
//             <p>
//               <i className="fa fa-user-circle" aria-hidden="true"></i>
//               <table className="remitinfo">
//                 <tr>
//                   <td className="tdh">Bank Name :</td>
//                   <td>PNB</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Bank Address :</td>
//                   <td>Aligarh</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Bank Country :</td>
//                   <td>India</td>
//                 </tr>
//                 <tr>
//                   <td className="tdh">Swift Code :</td>
//                   <td>iban</td>
//                 </tr>
//               </table>
//               <span id="points2">...</span>
//               {showMore2 && (
//                 <span id="moreText2">
//                   <table className="remitinfo">
//                     <tr>
//                       <td className="tdh">Account Holder Name :</td>
//                       <td>Sneha</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh">Account No. :</td>
//                       <td>190239092737</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Address :</td>
//                       <td>A-10 Jail Road</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">City :</td>
//                       <td>Aligarh</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">State :</td>
//                       <td>Uttar Pradesh</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Country :</td>
//                       <td>India</td>
//                     </tr>
//                     <tr>
//                       <td className="tdh1">Postal Code :</td>
//                       <td>1233</td>
//                     </tr>
//                   </table>
//                 </span>
//               )}
//             </p>
//             <button
//               className="btn draw-border"
//               onClick={toggleText2}
//               id="textButton2"
//             >
//               {showMore2 ? 'Show Less' : 'View More'}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default MyRecievers;


import React, { useState } from 'react';
import '../assets/css/styles.css'
import '../assets/css/style.css';
import AHeader from './afterloginheader';


function MyRecievers() {
  const [showMore, setShowMore] = useState(false);
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const toggleText = () => {
    setShowMore(!showMore);
  };

  const toggleText1 = () => {
    setShowMore1(!showMore1);
  };

  const toggleText2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <div>
      <AHeader/>
      <br />
      <div className="boxlogin1">
        <h3 className="boxhead">Show Receiver Account</h3>
        <br />
        <div className="getremit">
          <div className="card rcard">
            <p className='xyz'>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <span className="remitinfomr">
                Bank Name : HDFC<br />
                Bank Address : Seattle<br />
                Bank Country : USA<br />
                Swift Code : iban
              </span>
              <span id="points">...</span>
              {showMore && (
                <span >
                  <span className="remitinfomr">
                    Account Holder Name : Amit<br />
                    Account No. : 682949092737<br />
                    Address : C-102 Vijay Nagar<br />
                    City : Ghaziabad<br />
                    State : Uttar Pradesh<br />
                    Country : India<br />
                    Postal Code : 3003
                  </span>
                </span>
              )}
            </p>
            <button className="btn draw-border" onClick={toggleText} id="textButton">
              {showMore ? 'Show Less' : 'View More'}
            </button>
          </div>
          {/* Card 2 */}
          <div className="card rcard">
            <p>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <span className="remitinfomr">
                Bank Name : ICICI<br />
                Bank Address : Ghaziabad<br />
                Bank Country : India<br />
                Swift Code : iban
              </span>
              <span id="points1">...</span>
              {showMore1 && (
                <span>
                  <span className="remitinfomr">
                    Account Holder Name : Tania<br />
                    Account No. : 267949092737<br />
                    Address : C-102 Kamla Nagar<br />
                    City : Ghaziabad<br />
                    State : Uttar Pradesh<br />
                    Country : India<br />
                    Postal Code : 1293
                  </span>
                </span>
              )}
            </p>
            <button className="btn draw-border" onClick={toggleText1} id="textButton1">
              {showMore1 ? 'Show Less' : 'View More'}
            </button>
          </div>

          {/* Card 3 */}
          <div className="card rcard">
            <p>
              <i className="fa fa-user-circle" aria-hidden="true"></i>
              <span className="remitinfomr">
                Bank Name : PNB<br />
                Bank Address : Aligarh<br />
                Bank Country : India<br />
                Swift Code : iban
              </span>
              <span >...</span>
              {showMore2 && (
                <span>
                  <span className="remitinfomr">
                    Account Holder Name : Sneha<br />
                    Account No. : 190239092737<br />
                    Address : A-10 Jail Road<br />
                    City : Aligarh<br />
                    State : Uttar Pradesh<br />
                    Country : India<br />
                    Postal Code : 1233
                  </span>
                </span>
              )}
            </p>
            <button className="btn draw-border" onClick={toggleText2} id="textButton2">
              {showMore2 ? 'Show Less' : 'View More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRecievers;
