export const formatDate = () => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date().toLocaleDateString('en-US', options);
};

export const formatDay = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', { weekday: 'long' });
};

export const getWeatherIcon = (condition) => {
  const map = {
    Clear: 'WiDaySunny',
    Clouds: 'WiDayCloudy',
    Rain: 'WiRain',
    Drizzle: 'WiShowers',
    Thunderstorm: 'WiThunderstorm',
    Snow: 'WiSnow',
    Mist: 'WiFog',
    Smoke: 'WiSmoke',
    Haze: 'WiDayHaze',
    Dust: 'WiDust',
    Fog: 'WiFog',
  };
  return map[condition] || 'WiDaySunny';
};

// Yahan hum Colors return kar rahe hain dynamic background ke liye
export const getWeatherBackground = (weatherCode) => {
  const code = weatherCode?.toLowerCase() || '';

  if (code.includes('clear')) {
    return { start: '#b45309', via: '#7c2d12', end: '#0f172a' }; // Amber/Orange
  }
  if (code.includes('clouds')) {
    return { start: '#475569', via: '#1e293b', end: '#0f172a' }; // Slate/Dark
  }
  if (code.includes('rain') || code.includes('drizzle')) {
    return { start: '#1e40af', via: '#1e293b', end: '#0f172a' }; // Blue/Dark
  }
  if (code.includes('thunderstorm')) {
    return { start: '#111827', via: '#581c87', end: '#000000' }; // Purple/Black
  }
  if (code.includes('snow')) {
    return { start: '#dbeafe', via: '#e2e8f0', end: '#eff6ff' }; // Light Blue
  }
  
  // Default Indigo
  return { start: '#312e81', via: '#0f172a', end: '#0f172a' };
};