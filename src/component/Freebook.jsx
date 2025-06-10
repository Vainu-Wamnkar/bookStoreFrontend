import React from 'react';
import Cards from './Cards';
import Simmer from './Simmer';

function Freebook({ bookData }) {
  const freeBooks = bookData?.filter((book) => book.category === "Free");

  return (
    <div className="px-6 md:px-12 py-8">
      <h3 className="text-3xl font-bold">Free Offered Courses</h3>
      <p className="text-xl mt-4">
        Our free courses are designed to make quality education accessible to everyone.
      </p>

      <div className={`mt-8 gap-6 grid ${freeBooks.length>0?"grid-cols-4":""}`}>
        {!bookData || bookData.length === 0 ? (
          <Simmer />
        ) : (
          freeBooks.map((item) => <Cards item={item} key={item.id} />)
        )}
      </div>
    </div>
  );
}

export default Freebook;
