import { useState, useEffect } from 'react';
import useWeather from './hooks/useWeather';
import { getWeatherBackground } from './utils/weatherHelpers';

// Component Imports
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import WeatherStats from './components/WeatherStats';
import ForecastRow from './components/ForecastRow';
import SearchHistory from './components/SearchHistory';
import WeatherSkeleton from './components/WeatherSkeleton';
import ErrorState from './components/ErrorState';

function App() {
  const [city, setCity] = useState("");
  const [searchHistory, setSearchHistory] = useState(() => {
    return JSON.parse(localStorage.getItem("weatherHistory")) || [];
  });

  const { 
    currentWeather, 
    forecast, 
    loading, 
    error, 
    fetchWeather, 
    clearError 
  } = useWeather();

  const handleSearch = async () => {
    if (!city.trim()) return;
    await fetchWeather(city);
  };

  useEffect(() => {
    if (currentWeather) {
      const cityName = currentWeather.name;
      setSearchHistory((prev) => {
        const filtered = prev.filter(
          (item) => item.toLowerCase() !== cityName.toLowerCase()
        );
        const newHistory = [cityName, ...filtered].slice(0, 5);
        localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
        return newHistory;
      });
    }
  }, [currentWeather]);

  // Dynamic Colors Logic
  const colors = currentWeather 
    ? getWeatherBackground(currentWeather.weather[0].main)
    : { start: '#312e81', via: '#0f172a', end: '#0f172a' };

  return (
    <main 
      className="min-h-screen bg-gradient-to-br transition-all duration-1000 text-white"
      style={{
        '--tw-gradient-from': colors.start,
        '--tw-gradient-to': colors.end,
        '--tw-gradient-stops': `${colors.start}, ${colors.via}, ${colors.end}`
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-6">
        
        <SearchBar 
          city={city} 
          setCity={setCity} 
          onSearch={handleSearch} 
          loading={loading} 
        />

        <SearchHistory 
          history={searchHistory} 
          onSelect={(clickedCity) => { // onHistoryClick ko onSelect kar diya components ke mutabiq
            setCity(clickedCity);
            fetchWeather(clickedCity);
          }} 
        />

        {loading && <WeatherSkeleton />}
        
        {error && !loading && (
          <ErrorState message={error} onRetry={handleSearch} />
        )}

        {currentWeather && !loading && !error && (
          <div className="space-y-6">
            <CurrentWeather data={currentWeather} />
            <WeatherStats data={currentWeather} />
            {forecast && <ForecastRow forecast={forecast} />}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;