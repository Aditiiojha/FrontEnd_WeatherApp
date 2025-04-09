import React from 'react';

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <p className="weather-date">
          {new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>
      
      <div className="weather-main">
        <div className="weather-icon">
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <p>{weatherData.weather[0].main}</p>
        </div>
        
        <div className="weather-temp">
          <h1>{Math.round(weatherData.main.temp)}°C</h1>
          <p>Feels like: {Math.round(weatherData.main.feels_like)}°C</p>
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail-item">
          <span>Humidity</span>
          <span>{weatherData.main.humidity}%</span>
        </div>
        <div className="detail-item">
          <span>Wind Speed</span>
          <span>{weatherData.wind.speed} km/h</span>
        </div>
        <div className="detail-item">
          <span>Pressure</span>
          <span>{weatherData.main.pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span>Visibility</span>
          <span>{(weatherData.visibility / 1000).toFixed(1)} km</span>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;