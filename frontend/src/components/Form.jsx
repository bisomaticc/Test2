import { useState } from 'react';
import './stylings/Form.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Form = () => {
  const [flightNumber, setFlightNumber] = useState('');
  const [airline, setAirline] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (date) {
      try {
        const params= { 
          flightNumber, 
          airline, 
          date 
        }
        const response = await axios.get('http://localhost:5000/flight-details', { params });
        console.log(response.data);

        
        navigate('/flightResult', { state: { flights: response.data } });
        // redirecting to flight result to display result in table
      } catch (error) {
        console.error('Error fetching flight details:', error);
        alert('Error fetching flight details. Please try again.');
      }
    } else {
      alert('Please fill in the Date.');
    }
  };

  return (
    <div className="form-container">
      <h1>Flight Tracking</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-class">
          <label htmlFor="airline">Airline</label>
          <input
            type="text"
            id="airline"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
            placeholder="Enter your Airline"
          />
          <label htmlFor="flightNumber">Flight Number</label>
          <input
            type="text"
            id="flightNumber"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
            placeholder="Enter your flight No"
          />
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <label>
          Still not able to find? Click <Link to="/more-options">here</Link> for more options.
        </label>
      </form>
      <label>
        *Date is a required parameter
      </label>
    </div>
  );
};

export default Form;
