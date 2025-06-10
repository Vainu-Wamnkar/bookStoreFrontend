import React from 'react';

function Simmer() {
  return (
    <div className="grid grid-cols-4 gap-6 animate-pulse">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="w-full bg-white dark:bg-gray-900 rounded-xl shadow-md p-4">
          {/* Image Placeholder */}
          <div className="h-52 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4"></div>

          {/* Title Placeholder */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>

          {/* Subtitle Placeholder */}
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-3"></div>
        </div>
      ))}
    </div>
  );
}

export default Simmer;
