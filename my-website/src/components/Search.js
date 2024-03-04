// Search.js
import React, { useState } from 'react';
import './Search.css'; // Import the CSS file for styling

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-container">
      <h2 style={{marginRight:'38%'}}>What are you looking for?</h2>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="🔍 Search for..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default Search;
