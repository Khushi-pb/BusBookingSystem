
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Signup.css'; 

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
   
    Swal.fire({
      title: 'Registration successfull!!',
      text: 'You will now be redirected to Login!',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      navigate('/login'); // Navigate to home after user clicks OK
    });
  };

  return (
    <div className="container">
      <div className="signup wrap">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Username"
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <input
            pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
            placeholder="Email"
            id="email"
            name="email"
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
          <input
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required 
          />
          <input
            value="Signup"
            className="btn"
            type="submit" 
          />
        </form>
        <p  className="bounce-text">Already have an account? <Link to="/login">Login</Link></p> 
      </div>
    </div>
  );
};

export default Signup;
