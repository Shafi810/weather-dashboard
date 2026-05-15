import { FaHistory } from 'react-icons/fa';

const SearchHistory = ({ history, onSelect }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="mb-6">
      <h3 className="text-white/50 text-xs uppercase tracking-widest mb-2">
        Recent Searches
      </h3>
      <div className="flex flex-row gap-2 flex-wrap">
        {history.map((city, index) => (
          <button
            key={`${city}-${index}`}
            onClick={() => onSelect(city)}
            className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 text-white/70 text-sm cursor-pointer hover:bg-white/20 hover:text-white transition-all active:scale-95"
          >
            <FaHistory size="0.7rem" className="opacity-50" />
            {city}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;