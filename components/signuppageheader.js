import React, { useEffect, useState } from 'react';
import '../assets/css/header-1.css'
import mylogo from '../assets/images/Black___White_Minimalist_Business_Logo-removebg-preview.png'
function SBHeader() {
  // State for managing the dropdown menu
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // Function to handle the dropdown toggle
  function toggleDropdown() {
    setDropdownOpen(!isDropdownOpen);
  }

  // Add event listeners when the component mounts
  useEffect(() => {
    const navToggle = document.querySelector(".nav__toggle");
    const navWrapper = document.querySelector(".nav__wrapper");

    navToggle.addEventListener("click", () => {
      if (navWrapper.classList.contains("active")) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "menu");
        navWrapper.classList.remove("active");
      } else {
        navWrapper.classList.add("active");
        navToggle.setAttribute("aria-label", "close menu");
        navToggle.setAttribute("aria-expanded", "true");
      }
    });

    // Close the dropdown if the user clicks outside of it
    window.onclick = (e) => {
      if (!e.target.matches('.dropbtn')) {
        const myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show1')) {
          myDropdown.classList.remove('show1');
        }
      }
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="#" className="brand">
          <img className="logo_pic" src={mylogo} alt="" />
        </a>
        <nav className="nav">
          <button className="nav__toggle" aria-expanded={isDropdownOpen} type="button" onClick={toggleDropdown}>
            {isDropdownOpen ? 'Close Menu' : 'Menu'}
          </button>
          <ul className="nav__wrapper">
            <li className="nav__item1"><a href="#" className="hover-underline-animation">Currency Calculator</a></li>
            <li className="nav__item1"><a href="#" className="hover-underline-animation">Send money</a></li>
            <li className="nav__item1"><a href="#" className="hover-underline-animation">Receive money</a></li>
            <li className="nav__item1"><a href="#" className="hover-underline-animation">Contact us</a></li>
            <div className="navbarah">
              <div className="dropdown">
                <button className="btn_header"  ><i onClick={toggleDropdown} className="fa fa-bars dropbtn" aria-hidden="true"></i>
                  {/* <!-- <i className="fa fa-caret-down"></i> --> */}
                </button>
                <div className={` dropdown-content ${isDropdownOpen ? 'show1' : ''}`} id="myDropdown">
                  <a href="#">History</a>
                  <a href="#">My senders</a>
                  <a href="#">My Receivers</a>
                  {/* <!-- <a href="#">Currency Calculator</a> --> */}
                  <a href="#">Refer a Friend</a>
                  <a href="#">Settings</a>
                </div>
              </div>
            </div>
            {/* <li className="nav__item1"><a href="#" className="hover-underline-animation login">Login</a></li> */}
            <li className="nav__item1"><a href="/login" className="hover-underline-animation register">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default SBHeader;
