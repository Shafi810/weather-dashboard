import { FaSearch } from 'react-icons/fa';
import { BiLoaderAlt } from 'react-icons/bi';

const SearchBar = ({ city, setCity, onSearch, loading }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search for a city..."
          className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                     py-[18px] pl-5 pr-[56px] text-white text-lg placeholder:text-white/40 
                     focus:border-white/40 focus:outline-none transition-all duration-300
                     group-hover:bg-white/15"
        />
        
        <button
          onClick={onSearch}
          disabled={loading}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 rounded-xl p-3 
                     hover:bg-white/30 active:scale-95 transition-all duration-200 
                     disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <BiLoaderAlt className="text-white text-xl animate-spin" />
          ) : (
            <FaSearch className="text-white text-xl" />
          )}
        </button>
      </div>

      <p className="mt-3 text-white/30 text-xs text-center tracking-wide uppercase">
        Press Enter to search
      </p>
    </div>
  );
};

export default SearchBar;