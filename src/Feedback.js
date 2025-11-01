import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Feedback.css'; 
const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0); 
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Feedback:', { name, email, rating, message });
  
    // SweetAlert for feedback success message
    Swal.fire({
      title: 'Success!',
      text: 'Feedback submitted successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      navigate('/'); // Navigate to home after user clicks OK
    });
  };


  const renderStars = () => {
    return Array(5)
      .fill(0) 
      .map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={index}
            className={`star ${starValue <= (hoverRating || rating) ? 'filled' : ''}`}
            onClick={() => setRating(starValue)} 
            onMouseEnter={() => setHoverRating(starValue)} 
            onMouseLeave={() => setHoverRating(0)} 
          >
            ★
          </span>
        );
      });
  };

  return (
    <div className="container">
      <div className="feedback wrap">
        <h1>Feedback</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Your Name"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <input
            placeholder="Your Email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <div className="rating">
            <label>Rating:</label>
            <div className="stars">{renderStars()}</div>
          </div>
          <textarea
            placeholder="Write your feedback..."
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            required
          ></textarea>
          <input value="Submit Feedback" className="btn" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Feedback;
