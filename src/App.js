
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Login from './Login';
import Signup from './Signup';
import Seatbook from './Seatbook';
import Feedback from './Feedback';
import Notfound from './Notfound';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
    
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/seatbook" element={<Seatbook/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="*" element={<Notfound/>} />
    </Routes>
  </Router>
  );
}

export default App;
