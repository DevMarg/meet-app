import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NumberOfEvents = ({ updateNumberOfEvents }) => {
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) { 
        setNumberOfEvents(value);
        updateNumberOfEvents(value);
      }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="number-of-events-input">Number of Events:</label>
      <input
        id="number-of-events-input"
        type="number"
        value={numberOfEvents || ''}
        onChange={handleChange}
      />
    </div>
  );
};

NumberOfEvents.propTypes = {
  updateNumberOfEvents: PropTypes.func.isRequired,
};

export default NumberOfEvents;
