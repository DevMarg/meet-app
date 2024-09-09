import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = await getEvents();
      setEvents(allEvents);
    };
    fetchEvents();
  }, []);

  const updateNumberOfEvents = (number) => {
    setNumberOfEvents(number);
  };

  return (
    <div className="App">
      <CitySearch />
      <NumberOfEvents updateNumberOfEvents={updateNumberOfEvents} />
      <EventList events={events.slice(0, numberOfEvents)} />
    </div>
  );
};

export default App;
