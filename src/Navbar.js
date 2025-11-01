import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import Swal from 'sweetalert2';


const Navbar = () => {
  const navigate = useNavigate(); 

  
  const isAuthenticated = false; 

  const handleBookBusClick = () => {
    if (!isAuthenticated) {
      // Show SweetAlert instead of a regular alert
      Swal.fire({
        icon: 'warning',
        title: 'Login Required',
        text: 'Please login to book a bus.',
        showCancelButton: true,
        confirmButtonText: 'Login Now',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login'); // Redirect to login if confirmed
        }
      });
    } else {
      navigate('/seatbook'); // Redirect to seat booking if authenticated
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <Link to="/"> 
          <h1>
            <i className="fa fa-bus-alt" aria-hidden="true"></i> Bus Booking System
          </h1>
      </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <i className="fa-solid fa-house-user" aria-hidden="true"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/login">
            <i className="fa fa-sign-in" aria-hidden="true"></i> Login
          </Link>
        </li>
        <li>
          <Link to="/signup">
            <i className="fa fa-user-plus" aria-hidden="true"></i> Signup
          </Link>
        </li>
        <li>
       
          <span onClick={handleBookBusClick} style={{ cursor: 'pointer' }}>
            <i className="fa fa-bus" aria-hidden="true"></i> Book a Bus
          </span>
        </li>
        <li>
          <Link to="/feedback">
            <i className="fa fa-comments" aria-hidden="true"></i> Feedback
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
