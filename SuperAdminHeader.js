import React, { useState } from 'react';
import '../Navbar.css'; // Import the CSS file for the styles
import { Link } from 'react-router-dom';

const Navbar = () => {
     const [showLinks, setShowLinks] = useState(false);

     const toggleLinks = () => {
          setShowLinks(!showLinks);
     };

     return (
          <nav className="navbar" id="Nav">
               <div className="navbar-logo">
                    <Link to="/SuperAdminSubSummary">RAINA</Link>
               </div>
               <ul className={`navbar-links ${showLinks ? 'show' : ''}`}>
                    <li>
                         <Link to="/SuperAdminSubSummary">Sub Summary</Link>
                    </li>
                    <li>
                         <Link to="/SuperAdminProfile">Profile</Link>
                    </li>

                    <li>
                         <Link to="/SuperAdminNotification">Notification</Link>
                    </li>

                    <li>
                         <Link to="/SuperAdminPayment">Payment</Link>
                    </li>
                    <li>
                         <Link to="/SuperAdminDriverDeduction">Driver Deduction</Link>
                    </li>
               </ul>
               <ul className="UserLogin">
                    <li>
                         Hi,SuperAdmin <Link to="/SuperAdminSignin">Log Out</Link>{' '}
                    </li>
               </ul>
               <div className="navbar-toggle" onClick={toggleLinks}>
                    <span></span>
                    <span></span>
                    <span></span>
               </div>
          </nav>
     );
};

export default Navbar;
