import React from 'react';
import { useLocation , Link } from 'react-router-dom';
import './stylings/Form.css'; // Ensure styles are correct

const FlightResult = () => {
  const { state } = useLocation();
  const { flights } = state || { flights: [] }; // Retrieve flights from state

  return (
    <div className="results-container">
      <h1>Flight Details</h1>
      {flights.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Flight Number</th>
              <th>Airline</th>
              <th>Status</th>
              <th>Gate No</th>
              <th>Arriving</th>
              <th>Delay</th>
              <th>Departure</th>
              <th>Cancelling</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight, index) => (
              <tr key={index}>
                <td>{flight.airline}</td>
                <td>{flight.departure}</td>
                <td>{flight.gate}</td>
                <td>{flight.delay}</td>
                <td>{flight.date}</td>
                <td>{flight.cancellation}</td>
                <td>{flight.arrival}</td>
                <td>{flight.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No flight details found for the given criteria.</p>
      )}
      <label>
          <Link to="/">Click here for the homepage</Link>
        </label>
    </div>
  );
};

export default FlightResult;
