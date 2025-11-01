import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar'; 
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="bus-booking">
      {/* <Navbar />  */}
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Bus Booking</h1>
          <h2>Your gateway to efficient and seamless travel planning</h2>
          <Link to="/login" className="btn">Book Your Ticket</Link>
        </div>
      </div>

<div className="main-container">
  <h3 className="service-heading">Our Services</h3>
  
  <div className="rotator-section">
    <div className="card">
      <h5>🎉 50% Diwali Sale</h5>
      <p>Enjoy 50% off on all bus bookings during the Diwali season!</p>
    </div>
    <div className="card">
      <h5>📄 Ticket Cancellation Policy</h5>
      <p>Flexible cancellation options for all types of bookings.</p>
    </div>
  </div>

{/* Top Schedules Section */}
<div className="schedule-section">
  <h2>Top Bus Schedules</h2>
  <div className="schedule-items-container">
    <div className="schedule-item">
      <h3>🚌 Bus from City Pune to City Mumbai</h3>
      <p>Departure Time: 11:00 AM</p>
      <Link to="/login" className="btn">Book Ticket</Link>
    </div>
    <div className="schedule-item">
      <h3>🚌 Bus from City Pune to City Nagpur</h3>
      <p>Departure Time: 11:00 AM</p>
      <Link to="/login" className="btn">Book Ticket</Link>
    </div>
    <div className="schedule-item">
      <h3>🚌 Bus from City Mumbai to City Nasik</h3>
      <p>Departure Time: 11:00 AM</p>
      <Link to="/login" className="btn">Book Ticket</Link>
    </div>
  </div>
</div>


<div className="client-feedback-section">
  <h2>Client Feedback</h2>
  <div className="client-feedback">
    <div className="feedback-card">
      <p>"The bus booking system is so easy to use!"</p>
      <h4>John Doe</h4>
      <div className="star-rating">⭐⭐⭐⭐⭐</div>
    </div>
    <div className="feedback-card">
      <p>"Quick and reliable service every time."</p>
      <h4>Jane Smith</h4>
      <div className="star-rating">⭐⭐⭐⭐</div>
    </div>
    <div className="feedback-card">
      <p>"Great experience, highly recommended!"</p>
      <h4>Emily Johnson</h4>
      <div className="star-rating">⭐⭐⭐⭐⭐</div>
    </div>
  </div>
</div>
</div>
      {/* Footer Section */}
      <footer className="footer">
        <p>© 2024 Bus Booking. All Rights Reserved.</p>
      </footer>
    </div>

  );
};

export default HomePage;
