// import React from 'react';
// import '../assets/css/header-1.css'; // Import your CSS file here
// import mylogo from '../assets/images/Black___White_Minimalist_Business_Logo-removebg-preview.png'


// function AHeader() {
//   // JavaScript functions can be defined within the component
//   function myFunction() {
//     const myDropdown = document.getElementById("myDropdown");
//     myDropdown.classList.toggle("show");
//   }

//   // Add event listener for the "nav__toggle" button
//   function handleNavToggleClick() {
//     const navToggle = document.querySelector(".nav__toggle");
//     const navWrapper = document.querySelector(".nav__wrapper");

//     if (navWrapper.classList.contains("active")) {
//       navToggle.setAttribute("aria-expanded", "false");
//       navToggle.setAttribute("aria-label", "menu");
//       navWrapper.classList.remove("active");
//     } else {
//       navWrapper.classList.add("active");
//       navToggle.setAttribute("aria-label", "close menu");
//       navToggle.setAttribute("aria-expanded", "true");
//     }
//   }

//   // Add event listener to close the dropdown when clicking outside of it
//   function handleWindowClick(e) {
//     if (!e.target.matches('.dropbtn')) {
//       const myDropdown = document.getElementById("myDropdown");
//       if (myDropdown.classList.contains('show')) {
//         myDropdown.classList.remove('show');
//       }
//     }
//   }

//   // Attach the window click event listener when the component mounts
//   React.useEffect(() => {
//     window.addEventListener("click", handleWindowClick);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       window.removeEventListener("click", handleWindowClick);
//     };
//   }, []);

//   return (
//     <header className="site-header">
//       <div className="wrapper site-header__wrapper">
//         <a href="#" className="brand">
//           <img className="logo_pic" src={mylogo} alt="" />
//         </a>
//         <nav className="nav">
//           <button className="nav__toggle" aria-expanded="false" type="button" onClick={handleNavToggleClick}>
//             menu
//           </button>
//           <ul className="nav__wrapper menus">
//           <li className="nav__item1">
//               <a href="#" className="hover-underline-animation">
//                 Currency Calculator
//               </a>
//             </li>
//             <li className="nav__item1">
//               <a className="hover-underline-animation">Send money</a>
//             </li>
//             <li className="nav__item1">
//               <a href="AddReceiver.html" className="hover-underline-animation">
//                 Receive money
//               </a>
//             </li>
//             <li className="nav__item1">
//               <a href="#" className="hover-underline-animation">
//                 Contact us
//               </a>
//             </li>
//             <div className="navbarah">
//               <div className="dropdown">
//                 <button className="btn_header">
//                   <i onClick={myFunction} className="fa fa-bars dropbtn" aria-hidden="true"></i>
//                 </button>
//                 <div className="dropdown-content" id="myDropdown">
//                   <a href="#">History</a>
//                   <a href="#">My Senders</a>
//                   <a href="#">My Receivers</a>
//                   <a href="#">Refer a Friends</a>
//                   <a href="#">Settings</a>
//                 </div>
//               </div>
//             </div>
//             <li className="nav__item1">
//               <a href="Login.html" className="hover-underline-animation user_name">
//                 <i className="headerUserCircle" aria-hidden="true"></i>
//                 <span className="name">TANIA</span>
//                 <span className="logout">Logout</span>
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default AHeader;

import React, { useState } from 'react';
import '../assets/css/header-1.css'; // Import your CSS file here
import mylogo from '../assets/images/Black___White_Minimalist_Business_Logo-removebg-preview.png';

function AHeader() {
    // Define a state variable to track the visibility of the dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to toggle the dropdown
    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    // Add event listener for the "nav__toggle" button
    function handleNavToggleClick() {
        const navToggle = document.querySelector(".nav__toggle");
        const navWrapper = document.querySelector(".nav__wrapper");
    }

    // Add event listener to close the dropdown when clicking outside of it
    function handleWindowClick(e) {
        if (!e.target.matches('.dropbtn')) {
            setIsDropdownOpen(false); // Close the dropdown by updating state
        }
    }

    // Attach the window click event listener when the component mounts
    React.useEffect(() => {
        window.addEventListener("click", handleWindowClick);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, []);

    return (
        <header className="site-header">
            <div className="wrapper site-header__wrapper">
                <a href="#" className="brand">
                    <img className="logo_pic" src={mylogo} alt="" />
                </a>
                <nav className="nav">
                    <button className="nav__toggle" aria-expanded="false" type="button" onClick={handleNavToggleClick}>
                        menu
                    </button>
                    <ul className="nav__wrapper menus">
                        <li className="nav__item1">
                            <a href="/currencycalculator" className="hover-underline-animation">
                                Currency Calculator
                            </a>
                        </li>
                        <li className="nav__item1">
                            <a href="/createbeneficiary" className="hover-underline-animation">Send money</a>
                        </li>
                        <li className="nav__item1">
                            <a href="AddReceiver.html" className="hover-underline-animation">
                                Receive money
                            </a>
                        </li>
                        <li className="nav__item1">
                            <a href="#" className="hover-underline-animation">
                                Contact us
                            </a>
                        </li>
                        <div className="navbarah">
                            <div className="dropdown">
                                <button className="btn_header">
                                    <i onClick={toggleDropdown} className="fa fa-bars dropbtn" aria-hidden="true"></i>
                                </button>
                                {/* Use the state variable to conditionally render the dropdown */}
                                {isDropdownOpen && (
                                    <div className="dropdown-content" id="myDropdown">
                                        {/* Dropdown menu items */}
                                        <a href="#">History</a>
                                        <a href="#">My Senders</a>
                                        <a href="#">My Receivers</a>
                                        <a href="#">Refer a Friends</a>
                                        <a href="#">Settings</a>
                                    </div>
                                )}
                            </div>
                        </div>
                        <li className="nav__item1">
                            <a href="Login.html" className="hover-underline-animation user_name">
                                <i className="headerUserCircle" aria-hidden="true"></i>
                                <span className="name">TANIA</span>
                                <span className="logout">Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default AHeader;
