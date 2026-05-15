import { motion } from 'framer-motion';
import * as WiIcons from 'react-icons/wi';
import { formatDay, getWeatherIcon } from '../utils/weatherHelpers';

const ForecastRow = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="mt-8">
      <h3 className="text-white/70 text-sm uppercase tracking-widest mb-4">
        5-Day Forecast
      </h3>
      <div className="flex flex-row gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {forecast.map((day, index) => {
          const IconComponent = WiIcons[getWeatherIcon(day.weather[0].main)] || WiIcons.WiDaySunny;
          
          return (
            <motion.div
              key={day.dt}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.06 }}
              className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4 min-w-[110px] flex flex-col items-center text-center flex-1"
            >
              <span className="text-white/60 text-xs uppercase tracking-wider">
                {formatDay(day.dt)}
              </span>
              <div className="my-3 text-white">
                <IconComponent size="1.8rem" />
              </div>
              <span className="text-white font-bold text-lg">
                {day.main.temp_max.toFixed(0)}°
              </span>
              <span className="text-white/40 text-sm">
                {day.main.temp_min.toFixed(0)}°
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastRow;