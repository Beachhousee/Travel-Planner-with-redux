import React from 'react';
import AddTripForm from './features/trips/AddTripForm';
import TripsList from './features/trips/TripsList';

const App = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>🌍 Travel Planner</h1>
      <AddTripForm />
      <TripsList />
    </div>
  );
};

export default App;
