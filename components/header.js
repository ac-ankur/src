import React from 'react';
// import './App.css'; // Import your CSS styles here
import '../assets/css/header-1.css'; // Import your additional CSS
 // Import your JavaScript (if needed)

function Header() {
  return (
    <div className="App">
      {/* Header Start */}
      <header className="site-header">
        <div className="wrapper site-header__wrapper">
          <a href="#" className="brand">REMITANCE</a>
          <nav className="nav">
            <button className="nav__toggle" aria-expanded="false" type="button">
              menu
            </button>
            <ul className="nav__wrapper">
              <li className="nav__item"><a href="#" className="hover-underline-animation">HOME</a></li>
              <li className="nav__item"><a href="#" className="hover-underline-animation">ABOUT</a></li>
              <li className="nav__item"><a href="#" className="hover-underline-animation">SERVICES</a></li>
              <li className="nav__item"><a href="#" className="hover-underline-animation">NEWS</a></li>
              <li className="nav__item"><a href="#" className="hover-underline-animation">CONTACT US</a></li>
              <li className="nav__item"><a href="#" className="hover-underline-animation"><i className="fa fa-user" aria-hidden="true"></i>Register</a></li>
              <li className="nav__item"><a href="#" className="hover-underline-animation"><i className="fa fa-search" aria-hidden="true"></i></a></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Header End */}
    </div>
  );
}

export default Header;
