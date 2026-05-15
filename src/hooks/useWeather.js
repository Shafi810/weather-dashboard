import { useState, useCallback } from 'react';
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clearError = () => setError(null);

  const fetchWeather = useCallback(async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const [currentRes, forecastRes] = await Promise.all([
        axios.get(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`),
        axios.get(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`)
      ]);

      // Process Forecast: Filter for 12:00:00 and take first 5 days
      const filteredForecast = forecastRes.data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 5);

      setCurrentWeather(currentRes.data);
      setForecast(filteredForecast);
    } catch (err) {
      setCurrentWeather(null);
      setForecast(null);
      
      if (err.response?.status === 404) {
        setError("City not found. Check the spelling.");
      } else {
        setError("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  return { 
    currentWeather, 
    forecast, 
    loading, 
    error, 
    fetchWeather, 
    clearError 
  };
};

export default useWeather;