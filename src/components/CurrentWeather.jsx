import { motion } from 'framer-motion';
import * as WiIcons from 'react-icons/wi';
import { formatDate, getWeatherIcon } from '../utils/weatherHelpers';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  // Map the weather condition string to the specific React Icon component
  const IconComponent = WiIcons[getWeatherIcon(data.weather[0].main)] || WiIcons.WiDaySunny;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center text-center py-10 pb-5"
    >
      <h1 className="text-white text-5xl font-bold">
        {data.name}, {data.sys.country}
      </h1>
      <p className="text-white/60 text-lg mt-1">
        {formatDate()}
      </p>

      {/* Floating Weather Icon */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut" 
        }}
        className="mt-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      >
        <IconComponent size={120} color="white" />
      </motion.div>

      <h2 className="text-white text-9xl font-extrabold leading-none mt-4">
        {data.main.temp.toFixed(0)}°C
      </h2>

      <p className="text-white/50 text-lg mt-1">
        Feels like {data.main.feels_like.toFixed(0)}°C
      </p>

      <p className="text-white/70 text-2xl mt-2 font-light tracking-wide capitalize">
        {data.weather[0].description}
      </p>
    </motion.div>
  );
};

export default CurrentWeather;