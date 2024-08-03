import { useState } from 'react';
import './stylings/Form.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';


const MoreOptions = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [airline, setAirline] = useState('');
  const [date, setDate] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (date) {
      //  query parameters
      const params = new URLSearchParams();
      if (departure) params.append('departure', departure);
      if (arrival) params.append('arrival', arrival);
      if (airline) params.append('airline', airline);
      params.append('date', date);
      const response = await axios.get('http://localhost:8000/flight-details', { params });
      // Navigated to flight result page to make output presentable
      navigate('/flightResult', { state: { flights: response.data } });
    } else {
      alert('Please fill in the Date.');
    }
  };

  return (
    <div className="form-container">
      <h1>Search by Airport or Route</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-class">
          <label htmlFor="departure">Departure</label>
          <input
            type="text"
            id="departure"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            placeholder="Enter Departure Location"
          />
          <label htmlFor="arrival">Arrival</label>
          <input
            type="text"
            id="arrival"
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
            placeholder="Enter Arrival Location"
          />
          <label htmlFor="airline">Airline</label>
          <input
            type="text"
            id="airline"
            value={airline}
            onChange={(e) => setAirline(e.target.value)}
            placeholder="Enter Airline Name"
          />
          <label htmlFor="date">Date <span style={{ color: 'red' }}>*</span></label>
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
          <Link to="/">Click here for the homepage</Link>
        </label>
      </form>
    </div>
  );
};

export default MoreOptions;
