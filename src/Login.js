
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle login logic
    console.log('Email:', email);
    console.log('Password:', password);
  
    const isLoginSuccessful = true; 
  
    if (isLoginSuccessful) {
   
      Swal.fire({
        title: 'Login Successful!',
        text: 'You will now be redirected to seat booking.',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        navigate('/seatbook'); 
      });
    }
  };

  return (
   
    <div className="container">
      <div className="login wrap">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
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
            value="Login"
            className="btn"
            type="submit" 
          />
        </form>
        <p className="bounce-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
