import React, { useState } from 'react';
import './Seatbook.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { useNavigate } from 'react-router-dom'; 

const destinations = [
  { id: 1, name: 'Mumbai' },
  { id: 2, name: 'Pune' },
  { id: 3, name: 'Nashik' },
  { id: 4, name: 'Nagpur' },
];

const Seatbook = () => {
  const [startDestination, setStartDestination] = useState('');
  const [endDestination, setEndDestination] = useState('');
  const [seatType, setSeatType] = useState('Double');
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate(); 

  const seatLayout = [
    { id: 1, type: 'Single', booked: false },
    { id: 2, type: 'Single', booked: false },
    { id: 3, type: 'Double', booked: false },
    { id: 4, type: 'Double', booked: false },
    { id: 5, type: 'Double', booked: false },
    { id: 6, type: 'Single', booked: false },
    { id: 7, type: 'Double', booked: true },
  ];

  const calculatePrice = () => {
    let basePrice = 0;
    if (startDestination && endDestination) {
      if (startDestination === 'Mumbai' && endDestination === 'Nashik') {
        basePrice = 970;
      } else if (startDestination === 'Pune' && endDestination === 'Nagpur') {
        basePrice = 1600;
      }
    }
    const finalPrice = seatType === 'Single' ? basePrice + 300 : basePrice;
    setTotalPrice(finalPrice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsBooked(true);
    console.log('Booking Details:', {
      startDestination,
      endDestination,
      seatType,
      totalPrice,
      selectedSeats,
    });
  };

  const handleDownload = () => {
    const ticketData = `
      Bus Ticket
      ------------
      Start: ${startDestination}
      End: ${endDestination}
      Seat Type: ${seatType}
      Selected Seats: ${selectedSeats.map((s) => s.id).join(', ')}
      Total Price: ₹${totalPrice}
    `;

    const blob = new Blob([ticketData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket.txt';
    a.click();
    URL.revokeObjectURL(url);

    
    setTimeout(() => navigate('/'), 2000); 
  };

  return (
    <div className="container">
      <div className="booking">
        <h1>Bus Ticket Booking</h1>

        {isBooked ? (
          <div className="success-message">
            <h2>Ticket Booked Successfully!</h2>
            <button onClick={handleDownload} className="btn">
              Download Ticket
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="start">Select Start Destination:</label>
            <select
              id="start"
              value={startDestination}
              onChange={(e) => setStartDestination(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              {destinations.map((dest) => (
                <option key={dest.id} value={dest.name}>
                  {dest.name}
                </option>
              ))}
            </select>

            <label htmlFor="end">Select End Destination:</label>
            <select
              id="end"
              value={endDestination}
              onChange={(e) => setEndDestination(e.target.value)}
              required
            >
              <option value="">--Select--</option>
              {destinations.map((dest) => (
                <option key={dest.id} value={dest.name}>
                  {dest.name}
                </option>
              ))}
            </select>

            <label htmlFor="seatType">Select Seat Type:</label>
            <select
              id="seatType"
              value={seatType}
              onChange={(e) => {
                setSeatType(e.target.value);
                calculatePrice();
              }}
            >
              <option value="">--Select--</option>
              <option value="Single">Single Seat</option>
              <option value="Double">Double Seat</option>
            </select>

            <div>
              <h3>Seat Layout:</h3>
              <div className="seat-layout">
                {seatLayout.map((seat) => (
                  <div
                    key={seat.id}
                    className={`seat ${seat.booked ? 'booked' : 'available'}`}
                    onClick={() => {
                      if (!seat.booked && !selectedSeats.includes(seat)) {
                        setSelectedSeats([...selectedSeats, seat]);
                        seat.booked = true;
                      } else if (selectedSeats.includes(seat)) {
                        setSelectedSeats(
                          selectedSeats.filter((s) => s.id !== seat.id)
                        );
                        seat.booked = false;
                      }
                      calculatePrice();
                    }}
                  >
                    <i
                      className={`fas fa-chair ${
                        seat.booked ? 'booked-icon' : 'available-icon'
                      }`}
                      title={seat.booked ? 'Booked' : 'Available'}
                    ></i>
                  </div>
                ))}
              </div>
            </div>

            <h2>Total Price: ₹{totalPrice}</h2>
            <button type="submit" className="btn">
              Confirm Booking
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Seatbook;
