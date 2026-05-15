import { WiRain } from 'react-icons/wi';

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center py-[60px] text-center">
      <div className="bg-white/5 p-6 rounded-full">
        <WiRain className="text-white/40 text-[4rem]" />
      </div>
      
      <p className="text-white/70 text-xl mt-6 font-light">
        {message || "Something went wrong. Try again."}
      </p>

      <button
        onClick={onRetry}
        className="mt-8 border border-white/20 text-white rounded-full px-8 py-2.5 
                   hover:bg-white/10 hover:border-white/40 transition-all active:scale-95"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorState;