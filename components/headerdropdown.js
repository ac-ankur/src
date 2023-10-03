import React, { useState } from 'react';

const HdropDown = ({ handleDropdownClick }) => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavToggleClick = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <div>
      <button
        className={`nav__toggle ${isNavActive ? 'active' : ''}`}
        aria-expanded={isNavActive ? 'true' : 'false'}
        aria-label={isNavActive ? 'close menu' : 'menu'}
        onClick={handleNavToggleClick}
      >
        menu
      </button>
      {/* Rest of your component JSX */}
      <div className="navbar">
        <div className="dropdown">
          <button className="btn_header" onClick={handleDropdownClick}>
            <i className={`fa fa-bars dropbtn ${isDropdownOpen ? 'show' : ''}`} aria-hidden="true"></i>
          </button>
          <div className={`dropdown-content ${isDropdownOpen ? 'show' : ''}`} id="myDropdown">
            <a href="#">History</a>
            <a href="#">My senders</a>
            <a href="#">My Receivers</a>
            <a href="#">Refer a Friends</a>
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
      {/* Rest of your component JSX */}
    </div>
  );
};

export default HdropDown;
