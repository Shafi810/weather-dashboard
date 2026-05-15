import { motion } from 'framer-motion';
import { 
  WiHumidity, 
  WiStrongWind, 
  WiDayFog, 
  WiBarometer 
} from 'react-icons/wi';

const StatCard = ({ icon: Icon, value, label, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08, duration: 0.5 }}
    className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-5 flex flex-col items-center"
  >
    <Icon className="text-white text-[2rem] opacity-80" />
    <span className="text-white text-2xl font-bold mt-2">{value}</span>
    <span className="text-white/50 text-sm mt-1">{label}</span>
  </motion.div>
);

const WeatherStats = ({ data }) => {
  if (!data) return null;

  const stats = [
    {
      label: "Humidity",
      value: `${data.main.humidity}%`,
      icon: WiHumidity
    },
    {
      label: "Wind Speed",
      value: `${data.wind.speed} m/s`,
      icon: WiStrongWind
    },
    {
      label: "Visibility",
      value: `${(data.visibility / 1000).toFixed(1)} km`,
      icon: WiDayFog
    },
    {
      label: "Pressure",
      value: `${data.main.pressure} hPa`,
      icon: WiBarometer
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <StatCard 
          key={stat.label} 
          {...stat} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default WeatherStats;