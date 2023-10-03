import React, { useState } from 'react';
import AHeader from './afterloginheader';

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <AHeader/>
        <div className="box1">
          <h3 className="boxhead">Reset Password</h3>
          <form
            action=""
            style={{
              width: '32%',
              margin: '0 auto',
              marginTop: '24px',
            }}
          >
            <p style={{ color: '#17094c' }}>Enter new password</p>
            <input
              type={showPassword ? 'text' : 'password'}
              id="myInput"
              style={{
                width: '100%',
                height: '42px',
                borderRadius: '2px',
                marginTop: '8px',
                border: '2px solid #c1ab71',
              }}
            />
            <input
              type="checkbox"
              onClick={togglePasswordVisibility}
              style={{
                height: '1em',
                marginTop: '20px',
              }}
            />
            <span style={{ color: '#150a72', paddingLeft: '4px', fontSize: '13px' ,padding:'5'}}>
              Show Password
            </span>
            <p style={{ color: '#17094c', marginTop: '18px' }}>Confirm password</p>
            <input
              type={showPassword ? 'text' : 'password'}
              style={{
                width: '100%',
                height: '42px',
                borderRadius: '2px',
                marginTop: '8px',
                border: '2px solid #c1ab71',
              }}
            />
            <button
              style={{
                color: '#23164f',
                width: '100%',
                marginTop: '26px',
                height: '48px',
                background: '#c1ab71',
                fontSize: '18px',
                fontWeight: 500,
                borderRadius: '2px',
                border: '1px solid #23165f',
              }}
            >
              Reset
            </button>
          </form>
        </div>
      
    </div>
  );
}

export default ResetPassword;
