import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', color: '#fff' }}>
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default Notfound;
