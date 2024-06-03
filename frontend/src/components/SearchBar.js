import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(trackingNumber);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        placeholder="Enter tracking number"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
