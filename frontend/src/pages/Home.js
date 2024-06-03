import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import TrackingStatus from '../components/TrackingStatus';
import './Home.css';


const Home = () => {
  const [trackingNumber, setTrackingNumber] = useState(null);

  const handleSearch = (trackingNumber) => {
    setTrackingNumber(trackingNumber);
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to MyWebsite</h1>
        <p>This is a simple example of a React app with a navigation bar and a search bar.</p>
      </header>
      <SearchBar onSearch={handleSearch} />
      {trackingNumber && <TrackingStatus trackingNumber={trackingNumber} />}

    </div>


  );
};



export default Home;
