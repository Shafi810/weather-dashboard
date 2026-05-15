const WeatherSkeleton = () => {
  return (
    <div className="space-y-10 py-10">
      {/* Current Weather Skeleton */}
      <div className="text-center">
        <div className="h-10 w-64 mx-auto bg-white/10 rounded-xl animate-pulse" />
        <div className="h-5 w-40 mx-auto mt-3 bg-white/10 rounded animate-pulse" />
        <div className="h-24 w-24 rounded-full mx-auto mt-8 bg-white/10 animate-pulse" />
        <div className="h-24 w-48 mx-auto mt-6 bg-white/10 rounded-2xl animate-pulse" />
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-24 bg-white/10 rounded-2xl animate-pulse" />
        ))}
      </div>

      {/* Forecast Row Skeleton */}
      <div className="flex gap-3 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-36 w-24 min-w-[100px] bg-white/10 rounded-2xl animate-pulse flex-1" />
        ))}
      </div>
    </div>
  );
};

export default WeatherSkeleton;