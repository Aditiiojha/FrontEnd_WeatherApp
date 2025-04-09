import React from 'react';

const SearchHistory = ({ searchHistory, fetchWeatherData }) => {
  if (searchHistory.length === 0) return null;

  return (
    <div className="search-history">
      <h3>Recent Searches:</h3>
      <div className="history-buttons">
        {searchHistory.map((item, index) => (
          <button
            key={index}
            onClick={() => fetchWeatherData(item)}
            className="history-button"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;