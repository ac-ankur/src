// import React from 'react';
// import '../assets/css/otpverify.css'; // Assuming this is the correct path to your CSS file
// import AHeader from './afterloginheader';

// const Otpverify = () => {
//   return (
//     <div>
//       <AHeader/>
//       <div className="box1">
//         <h3 className="boxhead">Verify your phone number with a code</h3>
//         <p className="boxparaotp">
//           It helps us keep your account secure.
//           <span
//             onClick={() => {
//               // Handle click, e.g., navigate to another page
//             }}
//             className="learn-more-link"
//           >
//             Learn more
//           </span>
//         </p>

//         <div className="d-flex justify-content-center align-items-center container"style={{height:'fit-content',color:'white'}}>
//           <div className="otpcard py-3 px-3" style={{
//             paddingTop: '0',
//             marginTop: '0'
//           }}>
//             <div className="d-flex flex-row mt-5">
//               <input type="text" className="form-control" autoFocus />
//               <input type="text" className="form-control" />
//               <input type="text" className="form-control" />
//               <input type="text" className="form-control" />
//             </div>
//             <div className="text-center mt-5">
//               <span className="d-block mobile-text">Didn't receive the code?</span>
//               <span className="font-weight-bold text-danger cursor">Resend</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otpverify;

import React, { useRef } from 'react';
import '../assets/css/otpverify.css'; // Assuming this is the correct path to your CSS file
import AHeader from './afterloginheader';

const Otpverify = () => {
  // Create refs for each OTP input field
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  // Function to handle input change and move focus to the next input
  const handleInputChange = (e, index) => {
    if (e.target.value.length >= 1 && index < inputRefs.length - 1) {
      // Move focus to the next input field
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <div>
      <AHeader/>
      <div className="box1">
        <h3 className="boxhead">Verify your phone number with a code</h3>
        <p className="boxparaotp">
          It helps us keep your account secure.
          <span
            onClick={() => {
              // Handle click, e.g., navigate to another page
            }}
            className="learn-more-link"
          >
            Learn more
          </span>
        </p>

        <div className="d-flex justify-content-center align-items-center container" style={{height:'fit-content',color:'white'}}>
          <div className="otpcard py-3 px-3" style={{
            paddingTop: '0',
            marginTop: '0'
          }}>
            <div className="d-flex flex-row mt-5">
              {inputRefs.map((inputRef, index) => (
                <input
                  key={index}
                  type="text"
                  className="form-control"
                  autoFocus={index === 0}
                  ref={inputRef}
                  onChange={(e) => handleInputChange(e, index)}
                />
              ))}
            </div>
            <div className="text-center mt-5">
              <span className="d-block mobile-text">Didn't receive the code?</span>
              <span className="font-weight-bold text-danger cursor">Resend</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otpverify;

