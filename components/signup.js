import React, { useState } from 'react';
import SBHeader from './signuppageheader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/css/register.css'

// class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//     };
//   }

//   handleEmailChange = (e) => {
//     this.setState({ email: e.target.value });
//   };

//   handleSubmit = () => {
//     const { email } = this.state;

//     if (email === '') {
//       alert('Please write your email');
//     } else if (email.indexOf('@') <= 0) {
//       alert('@ position is invalid');
//     } else {
//       // Redirect to signup2.html or handle the logic as needed
//       // window.location.href = 'signup2.html';
//     }
//   };

// render() {
//     return (
//       <div>
//          <header>
//       <div className="header loginhead">
//         <div className="white_bg" style={{ height: '72px' }}>
//           <div className="container-fluid">
//             <div className="row">
//               <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
//                 <div className="full">
//                   <div className="center-desk">
//                     <div className="logo">
//                       <p className="loginlogo">REMITTANCE</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
//                 <nav className="navigation navbar navbar-expand-md navbar-dark" style={{ width: '164px', height: '72px' }}>
//                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                   </button>
//                   <div className="collapse navbar-collapse" id="navbarsExample04">
//                     <ul className="navbar-nav ml-auto">
//                       <li className="nav-item d_none le_co back">
//                         <a className="nav-link" href="index.html">
//                           <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Back
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//         <div className="box1">
//           <h3 className="boxhead">Create your Remittance account</h3>
//           <p className="boxpara">
//             Already have an account?{' '}
//             <span onClick={() => window.location.href = 'login.html'} className="loginsign">
//               Log in
//             </span>
//           </p>
//           <form
//             action="Login.html"
//             method="post"
//             name="frm"
//             style={{
//               width: '32%',
//               margin: '0 auto',
//               marginTop: '0px',
//             }}
//           >
//             <p className="signp">Full Name -As per your PAN Card</p>
//             {/* <label htmlFor="name">As per your PAN card</label> */}
//             <input id="name" type="text" required ></input>
//             <span id="message"></span>
//             <p className="signp">Email</p>
//             <input
//               id="email"
//               type="email"
//               name="email"
//               required
//               value={this.state.email}
//               onChange={this.handleEmailChange}
//             />
//             <span id="message"></span>
//             <p className="signp">Mobile Number</p>
//             <input id="country" type="tel" name="mobile" required />
//             <span id="message5"></span>
//             <p className="signp">PAN Number</p>
//             <input id="PAN" type="number" name="pan" required />
//             <span id="message5"></span>
//             <p className="signp">Purpose</p>
//             <select name="" id="Education">
//               <option value="Select Purpose" selected>--Select Purpose--</option>
//               <option value="Education">Education</option>
//             </select>
//             <span id="message"></span>
//             <p className="signp">Address -As per your PAN Card</p>
//             <textarea name="" id="addsign" cols="72" rows="3" style={{ marginTop: '0px' }}></textarea>
//             <span id="message"></span>
//             <p className="signp">Nationality</p>
//             <select name="" id="nation">
//               <option value="Select Nationality" selected>--Select Nationality--</option>
//               <option value="Indian">Indian</option>
//               <option value="Canadian">Canadian</option>
//               <option value="American">American</option>
//             </select>
//             <span id="message3"></span>
//             <p className="signp">Password</p>
//             <input id="password" type="password" name="password" required />
//             <span id="message2"></span>
//             <div className="tacbox">
//               <input id="checkbox" type="checkbox" />
//               <label htmlFor="checkbox">
//                <span style={{color:'black'}} > I agree to these   </span><a href="#">Terms and Conditions</a>.
//               </label>
//             </div>
//             <button type="button" id="submitsign" onClick={this.handleSubmit}>
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }
// function Signup() {
//   return(
//   <div className="App main-layout">
//     {/* loader */}
//     {/* <div className="loader_bg">
//         <div className="loader"><img src="images/loading.gif" alt="#" /></div>
//       </div> */}
//     {/* end loader */}
//     {/* header */}
//     <RHeader/>
//     {/* form */}
//     <div className="boxlogin1">
//       <h3 className="boxhead">Create your Remittance account</h3>
//       <form action="" className="receive" >
//         <input className="receiveinput" type="number" placeholder="Name" />
//         <input className="receiveinput right" type="email" placeholder="Email" />
//         <input className="receiveinput" type="tel" placeholder="Phone Number" />
//         <input className="receiveinput right" type="text" onFocus={() => { }} placeholder="Date Of Birth" />
//         <input className="receiveinput" type="number" placeholder="PAN Number" />
//         <input className="receiveinput right" type="number" placeholder="Address" />
//         <select className="receiveinput">
//           <option value="select code">--Select Nationality--</option>
//           <option value="sort code">Indian</option>
//           <option value="transit code">Canadian</option>
//           <option value="bsb number">American</option>
//         </select>
//         {/* <input className="receiveinput right" type="text" placeholder="State" />
//         <input className="receiveinput " type="text" placeholder="City" /> */}
//         {/* <input className="receiveinput right" type="text" placeholder="Address" />
//         <input className="receiveinput" type="text" placeholder="Bank Name" />
//         <input className="receiveinput right" type="number" placeholder="Bank Code" />
//         <input className="receiveinput" type="number" placeholder="Account Number" />
//         <input className="receiveinput right" type="number" placeholder="IFSC Code" />
//         <input className="receiveinput" type="number" placeholder="Postal Code" /> */}
//         <select className="receiveinput">
//           <option value="select code">--Select Purpose--</option>
//           <option value="sort code">Education</option>
//           {/* <option value="transit code">Canadian</option>
//           <option value="bsb number">American</option> */}
//         </select>
//         <button className="receivebtn">Register</button>

//       </form>
//     </div>
//   </div>
//   );
// }


// export default Signup;
// import React from 'react';
// import './App.css'; // Import your CSS styles here

function Signup() {
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState('');

  const [pan, setPan] = useState('');
  const [panError, setPanError] = useState('');

  const [purpose, setPurpose] = useState('');
  const [purposeError, setPurposeError] = useState('');

  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');

  const [nationality, setNationality] = useState('');
  const [nationalityError, setNationalityError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const fullNameRegex = /^[a-zA-Z ]*$/;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const mobileRegex = /^[0-9]{11}$/;
  const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;

  // const abcd=()=>{
  //   alert('')
  // }
  // const panRegex = /^[6-9]\\d{9}$/;
  const navigate = useNavigate();
  const handleFullNameChange = (e) => {
    const inputValue = e.target.value;
    setFullName(inputValue);

    if (!fullNameRegex.test(inputValue)) {
      setFullNameError('Full Name must contain only letters and spaces.');
    } else if (inputValue.length < 3 || inputValue.length > 50) {
      setFullNameError('Full Name must be between 3 and 50 characters.');
    } else {
      setFullNameError('');
    }
  };

  const handleEmailChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);

    if (!emailRegex.test(inputValue)) {
      setEmailError('Invalid email format.');
    } else {
      setEmailError('');
    }
  };

  const handleMobileChange = (e) => {
    const inputValue = e.target.value;


    if (!mobileRegex.test(inputValue)) {
      setMobileError('Mobile is required');
      setMobile(inputValue);
    } else {
      setMobileError('');
    }

  };


  const handlePanChange = (e) => {
    const inputValue = e.target.value;


    if (!panRegex.test(inputValue)) {
      setPanError('Pan is required');
      setPan(inputValue);
    } else {
      setPanError('');
    }

  };

  // const handlePanChange = (e) => {
  //   const inputValue = e.target.value;

  //   if (!panRegex.test(inputValue)) {
  //     setPanError('Invalid PAN Number format');
  //     setPan(inputValue);
  //   } else {
  //     setPanError('');
  //   }

  // };

  // const handlePanChange = (e) => {
  //   const inputValue = e.target.value;
  //   setPan(inputValue);

  //   if (!panRegex.test(inputValue)) {
  //     setPanError('Invalid PAN Number format');
  //   } else {
  //     setPanError('');
  //   }
  // };

  const handlePurposeChange = (e) => {
    const inputValue = e.target.value;
    setPurpose(inputValue);

    if (inputValue.length < 3 || inputValue.length > 10) {
      setPurposeError('Purpose must be between 10 and 20 characters.');
    } else {
      setPurposeError('');
    }
  };

  const handleAddressChange = (e) => {
    const inputValue = e.target.value;
    setAddress(inputValue);

    if (inputValue.length < 10 || inputValue.length > 50) {
      setAddressError('Address must be between 10 and 50 characters.');
    } else {
      setAddressError('');
    }
  };

  const handleNationalityChange = (e) => {
    const inputValue = e.target.value;
    setNationality(inputValue);

    if (inputValue.length < 2 || inputValue.length > 20) {
      setNationalityError('Select nationality');
    } else {
      setNationalityError('');
    }
  };

  const handlePasswordChange = (e) => {
    const inputValue = e.target.value;
    setPassword(inputValue);

    if (inputValue.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert('Signup Successful')
    setEmail('');
    setFullName('');
    setMobile('');
    setPan('');
    setPurpose('');
    setAddress('');
    setNationality('');
    setPassword('')
    // Perform form submission or validation logic here

    try {
      const result = await axios.post('http//localhost:3000', {
        email: email,
        password: password,
        username: fullName, // Include additional fields here
        mobile: mobile,
        panno: pan,
        purpose: purpose,
        address: address,
        countrycode: nationality
      });

      // Handle the API response here
      console.log(result.data);
      const rescode = result.data.statuscode;

      if (rescode === 1) {
        // Navigate to the next page
        navigate('/createremitter');
      } else {
        // Handle other status codes or display a message to the user
        alert(result.data.message);
      }

      // Clear form fields
      setEmail('');
      setPassword('');
      setFullName('');
      setMobile('');
      setPan('');
      setPurpose('');
      setAddress('');
      setNationality('');
    } catch (error) {
      console.error('Axios Error:', error);
      // Handle login error (e.g., display an error message to the user)
      // You can also navigate back to the login page or show an error message
    }
  }

  return (

    <div className="App">
      {/* Header */}
      <SBHeader />
      {/* End header */}
      <div className="boxloginr1">
        <h3 className="boxheadr">Create your Remitance Account</h3>
        <form onSubmit={handleSubmit} className="regreceive">
          <input className="regreceiveinput" type="text" required placeholder="Name" id="uname" value={fullName}
            onChange={handleFullNameChange} />
          {/* <span id="message">{fullNameError}</span> */}
          <input className="regreceiveinput right" type="email" name="email" placeholder="Email" id="uemail" required
            value={email}
            onChange={handleEmailChange} />
          <span id="message">{emailError}</span>
          <input className="regreceiveinput" type="number" id="ucountry" placeholder="Phone Number" name="mobile" required
            value={mobile}
            onChange={handleMobileChange} />
          <span id="message">{mobileError}</span>
          <input className="regreceiveinput right" type="password" placeholder="Password" id="upassword"

            name="password"
            required
            value={password}
            onChange={handlePasswordChange} />
          {/* <span id="message">{passwordError}</span> */}
          <input className="regreceiveinput" placeholder="PAN Number" id="uPAN"
            type="text"
            name="pan"
            required
            value={pan}
            onChange={handlePanChange} />
          {/* <span id="message">{panError}</span> */}

          <input className="regreceiveinput right" type="date" onFocus={() => { }} placeholder="Date Of Birth" />
          <textarea  id="uaddsign" cols="123" rows="3" required
            value={address} placeholder="Address"onChange={handleAddressChange}></textarea><br></br>
          <select className="regreceiveinput right" id="upurpose"
            type="text"
            required
            value={purpose}
            onChange={handlePurposeChange}>
            <option value="select code">--Select Purpose--</option>
            <option value="Education">Education</option>
          </select>
          <span id="message">{purposeError}</span>
          <select className="regreceiveinput " id="unation"
            required
            value={nationality}
            onChange={handleNationalityChange}>
            <option value="select code">--Select Nationality--</option>
            <option value="Indian">Indian</option>
            <option value="Canadian">Canadian</option>
            <option value="American">American</option>
          </select><span id="message">{nationalityError}</span>
          <br />
          <input type="checkbox" className="larger" style={{ marginTop: '30px' }} /><span className="inspan"> I agree to these <a href="#" className="inspana">Terms and Conditions</a></span>
          <button type="submit" className="receivebtn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
