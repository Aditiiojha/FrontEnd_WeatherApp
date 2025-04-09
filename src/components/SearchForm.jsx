import React from 'react';

const SearchForm = ({ city, setCity, loading, fetchWeatherData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherData(city);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="search-input"
      />
      <button 
        type="submit" 
        className="search-button" 
        disabled={loading || !city.trim()}
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
};

export default SearchForm;