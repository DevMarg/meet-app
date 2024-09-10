import React, { useState, useEffect } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [numberOfEvents, setNumberOfEvents] = useState(32);
  const [allLocations, setAllLocations] = useState([]);

  // useEffect(() => {
  //   const fetchEvents = async () => {
  //     const allEvents = await getEvents();
  //     setEvents(allEvents);
  //     setAllLocations(extractLocations(allEvents));
  //   };
  //   fetchEvents();
  // }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const allEvents = await getEvents();
    setEvents(allEvents.slice(0, numberOfEvents));
    setAllLocations(extractLocations(allEvents));
  }

  const updateNumberOfEvents = (number) => {
    setNumberOfEvents(number);
  };

  return (
    <div className="App">
      <CitySearch allLocations={allLocations}/>
      <NumberOfEvents updateNumberOfEvents={updateNumberOfEvents} />
      <EventList events={events.slice(0, numberOfEvents)} />
    </div>
  );
};

export default App;
