import React from 'react';
import { useWeather } from './hooks/useWeather';
import SearchForm from './components/SearchForm';
import SearchHistory from './components/SearchHistory';
import WeatherCard from './components/WeatherCard';
import Loading from './components/Loading';
import Error from './components/Error';
import './App.css';

function App() {
  const {
    city,
    setCity,
    weatherData,
    loading,
    error,
    searchHistory,
    fetchWeatherData
  } = useWeather();

  return (
    <div className="app">
      <h1 className="app-title">Weather Dashboard</h1>
      
      <SearchForm 
        city={city}
        setCity={setCity}
        loading={loading}
        fetchWeatherData={fetchWeatherData}
      />

      <SearchHistory 
        searchHistory={searchHistory}
        fetchWeatherData={fetchWeatherData}
      />

      {loading && <Loading />}
      <Error error={error} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
}

export default App;