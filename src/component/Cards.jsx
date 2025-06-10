import React from 'react';

const Cards = React.memo(({ item }) => {
  return (
    <div className="w-full  border rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-800 transition-all">
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full h-52 object-cover"
      />
      <div className="p-4 flex flex-col justify-between h-[220px]">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white truncate">
            {item.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
            {item.title}
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-pink-600 font-semibold text-lg">₹ {item.price}</span>
          <button className="px-4 py-1 border border-black dark:border-white rounded-full text-sm hover:bg-pink-500 hover:text-white transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
});

export default Cards;
