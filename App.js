import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Otpverify from './components/otpverify';
import ResetPassword from './components/passwordreset';
import CreateRemitter from './components/createremitter';
import CreateBeneficiary from './components/createbeneficiary';
import AddReciever from './components/addreciever';
import SenderDetails from './components/senderdetails';
import GetRemitter from './components/getremitter';
import NewFooter from './components/footer2';
import AHeader from './components/afterloginheader';
import AddSender from './components/addsender';
import MyRecievers from './components/myreceiver';
import CreateOrder from './components/createorder';
import Converter from './components/converter';
import MySenders from './components/mysenders';

// import Home from './components/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/myreceivers" element={<MyRecievers/>}/>
        <Route path="/currencyconverter" element={<Converter/>}/>
        <Route path='/addsender' element={<AddSender/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/footer" element={<NewFooter />} />
        {/* <Route path="/" element={<Home/>} /> */}
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/otpverify" element={<Otpverify/>}/>
        <Route path="/resetpassword" element={<ResetPassword/>}/>
        <Route path="/createremitter" element={<CreateRemitter/>}/>
        <Route path="/createbeneficiary"element={<CreateBeneficiary/>}/>
        <Route path="/addreceiver"element={<AddReciever/>}/>
        <Route path="/senderdetails"element={<SenderDetails/>}/>
        {/* <Route path="/getremitter"element={<GetRemitter/>}/> */}
        <Route path="/aheader"element={<AHeader/>}/>
        <Route path="/mysenders"elemenet={<MySenders/>}/>
        <Route path="/createorder" element={<CreateOrder/>}/>
      </Routes>
    </Router>
  );
}

export default App;
