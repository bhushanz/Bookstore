import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBooks } from '../Store/Reducers/BookSlice';

const Search = ({ category }) => {
  const [query, setQuery] = useState(''); // fixed spelling
  const dispatch = useDispatch();

  // When category changes (like sidebar click)
  useEffect(() => {
    if (category) {
      dispatch(fetchBooks({ type: 'category', value: category }));
    } else {
      dispatch(fetchBooks({ type: 'category', value: 'horror' })); // default
    }
  }, [dispatch, category]);

  // When user clicks search
  const handleSearch = () => {
    if (query.trim() !== '') {
      dispatch(fetchBooks({ type: 'search', value: query }));
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full md:px-10 justify-between md:justify-end md:h-20 bg-white items-center p-4 flex z-50">
      <div className="md:hidden font-bold text-gray-700">BookStore</div>

      <div className="w-[60%] flex items-center justify-between">
        {/* Input + Button */}
        <div className="flex items-center md:w-[75%] border border-gray-300 p-1 md:p-2 rounded-full shadow-sm">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()} // Press Enter to search
            className="w-full text-xs md:text-sm text-gray-600 outline-none h-full px-4"
            placeholder="Search for a book..."
          />
          <button
            onClick={handleSearch}
            className="cursor-pointer hover:scale-105 px-3 md:px-5 py-1.5 text-xs md:text-sm text-white font-semibold rounded-full bg-blue-500 transition-all"
          >
            Search
          </button>
        </div>

        {/* Right Side Icons */}
        <div className="text-xs font-semibold flex gap-4 text-gray-700">
          <span className="cursor-pointer hover:text-blue-500">Cart</span>
          <span className="cursor-pointer hover:text-blue-500">Login</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
