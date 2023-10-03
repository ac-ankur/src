// import React from 'react';
// import Header from './header';
// import Footer1 from './footer1';
// import BHeader from './beforeheader';
// import '../components/fontawesome'

// function Login() {
//   return (
//     <div>
//       <BHeader />
//       <div className="boxlogin">
//         <h3 className="boxhead">Welcome Back</h3>
//         <p className="boxpara">
//           New to Remittance?{' '}
//           <span onClick={() => window.location.href = 'signup'} className="loginsign">
//             Sign up
//           </span>
//         </p>
//         <form action="" className="loginform">
//           <p className="logine">Your email address</p>
//           <input type="email" className="loginei" />
//           <p className="loginp">Your password</p>
//           <input type="password" className="loginpp" />
//           <button className="loginbtn">Login</button>
//           <p className="Trouble">Trouble logging in?</p>
//           <p className="login">Or log in with</p>
//           <div className="media">
//             <div className="social"><i className="fa fa-facebook" aria-hidden="true"></i></div>
//             <div className="social"><i className="fa fa-google" aria-hidden="true"></i></div>
//             <div className="social"><i className="fa fa-twitter" aria-hidden="true"></i></div>
//           </div>
//         </form>
//         {/* <Footer1 /> */}
//       </div>

//     </div>
//   );
// }

// export default Login;
// import React, { useState } from 'react';
// import BHeader from './beforeheader';
// import axios from 'axios';

// function Login() {

//  const [email, setEmail] = useState('');
//  const [emailError, setEmailError] = useState('');

//  const [password, setPassword] = useState('');
//  const [passwordError, setPasswordError] = useState('');

//  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

// const abcd=()=>{
//   alert(email,password)
// }

//  const handleEmailChange = (e) => {
//   const inputValue = e.target.value;
//   setEmail(inputValue);

//   if (!emailRegex.test(inputValue)) {
//     setEmailError('Invalid email format.');
//   } else {
//     setEmailError('');
//   }
// };


// const handlePasswordChange = (e) => {
//   const inputValue = e.target.value;
//   setPassword(inputValue);

//   if (inputValue.length < 8) {
//     setPasswordError('Password must be at least 6 characters long.');
//   } else {
//     setPasswordError('');
//   }
// };

// const apilogin=async()=>{

//   try{
//     const result=await axios.post('http://localhost:3000',{
//       userId:"nishu@gmail.com",
//       password:"Password@1"
//     })

//   }
//   catch(err){
//     console.log(err)
//   }
//   fetch('http//localhost/3000')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // Process the data from the API response
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('There was a problem with the fetch operation:', error);
//   });

// }
// const handleSubmit = (e) => {
//   apilogin();
//   e.preventDefault();
// alert('Login Successful')
// setEmail('');
// setPassword('')
//   // Perform form submission or validation logic here
// };
// // {/* <span onClick={() => { /* Add your sign-up logic here */ }} 
//   return (
//     <div>
//       <BHeader/>

//       <div className="boxlogin">
//         <h3 className="boxhead">Welcome Back</h3>
//         <p className="boxpara">
//             New to Remittance?<a href='/signup' className="loginsign">Sign up</a>
//           </p>
//         <form
//       onSubmit={handleSubmit}
//       style={{ width: '32%', margin: '0 auto', marginTop: '0px' }}
//     >


//       {/* Email */}
//       <p className="signp">Email</p>
//       <input
//         id="email"
//         type="email"
//         name="email"
//         required
//         value={email}
//         onChange={handleEmailChange}
//       />
//       <span id="message">{emailError}</span>


//       {/* Password */}
//       <p className="signp">Password</p>
//       <input
//         id="password"
//         type="password"
//         name="password"
//         required
//         value={password}
//         onChange={handlePasswordChange}
//       />
//       <span id="message">{passwordError}</span>

//       <div className="tacbox">
//         <input id="checkbox" type="checkbox" required />
//         <label htmlFor="checkbox" style={{color:'#150a49', fontSize:'16px'}}>
//           I agree to these <a href="#">Terms and Conditions</a>.
//         </label>
//       </div>
//       <button type="submit" id="submitsign">
//       Login
//       </button>
//     </form>
//       </div>
//       </div>
//   );
// };

// export default Login;

/* <div className="header loginhead">
        <div className="white_bg" style={{ height: '72px' }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div className="full">
                  <div className="center-desk">
                    <div className="logo">
                      <p className="loginlogo">REMITTANCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav className="navigation navbar navbar-expand-md navbar-dark" style={{ width: '164px', height: '72px' }}>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item d_none le_co back">
                        <a className="nav-link" href="index.html">
                          <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div> */

import React, { useState } from 'react';
import BHeader from './beforeheader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    if (!emailRegex.test(inputValue)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    if (inputValue.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (emailError || passwordError) {
      // Prevent form submission if there are errors
      return;
    }

    try {
      const result = await axios.post('http//localhost:3000', {
        userId: email,
        password: password,
      });

      // Handle the API response here (e.g., store user session/token)
      console.log(result.data);
      const rescode = JSON.parse(JSON.stringify(result.data)).statuscode;
      console.log(rescode);
      if (rescode === 1) {
        // Navigate to the next page
        navigate('/createremitter'); // Replace '/next-page' with the actual path of your next page
      }
      else {
        alert(JSON.parse(JSON.stringify(result.data)).message)
      }

      // Clear form fields
      setEmail('');
      setPassword('');

    } catch (error) {
      console.error('Axios Error:', error);
      // console.error('There was a problem with the login:', error);
      // Handle login error (e.g., display error message to the user);
    }
  };

  return (
    <div>
      <BHeader />
      <div className="boxlogin">
        <h3 className="boxhead">Welcome Back</h3>
        <p className="boxpara" style={{fontSize:'18px'}}>
          New to Remittance? <a href="/signup" className="loginsign">Sign up</a>
        </p>
        <form
          onSubmit={handleSubmit}
          style={{ width: '32%', margin: '0 auto', marginTop: '0px' }}
        >
          {/* Email */}
          <p className="signp" style={{fontSize:'17px'}}>Email</p>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
          />
          <span id="message">{emailError}</span>

          {/* Password */}
          <p className="signp"style={{fontSize:'17px'}}>Password</p>
          <input
            id="password"
            type="password"
            name="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <span id="message">{passwordError}</span>

          {/* <div className="tacbox">
            <input id="checkbox" type="checkbox" required />
            <label htmlFor="checkbox" style={{ color: '#150a49', fontSize: '16px' }}>
              I agree to these <a href="#">Terms and Conditions</a>.
            </label>
          </div> */}
          <button type="submit" id="submitsign">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

