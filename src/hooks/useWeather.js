import { useState, useEffect } from 'react';

const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

export const useWeather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  const fetchWeatherData = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      const data = await response.json();
      setWeatherData(data);
      updateSearchHistory(cityName);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const updateSearchHistory = (cityName) => {
    setSearchHistory(prev => {
      const newHistory = [cityName, ...prev.filter(item => 
        item.toLowerCase() !== cityName.toLowerCase()
      )];
      return newHistory.slice(0, 5);
    });
  };

  return {
    city,
    setCity,
    weatherData,
    loading,
    error,
    searchHistory,
    fetchWeatherData
  };
};
