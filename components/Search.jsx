"use client";

import React, { useState } from 'react';

export default function Search({ onSearch }) {
   const [searchTerm, setSearchTerm] = useState('');

   const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(searchTerm);
   };

   return (
      <form onSubmit={handleSubmit} className="relative w-2/5 flex mx-auto gap-2">
         <input
            type="search"
            placeholder="Search by gender, race, or maturity"
            value={searchTerm}
            onChange={handleInputChange}
            className="placeholder:italic placeholder:text-gray-900 bg-opacity-25 bg-gray-400 bg-clip-padding backdrop-blur-md rounded px-1 py-1 w-full border border-gray-500 text-sm appearance-none outline-none focus:none focus:border-gray-300"
         />
         <button type="submit" className="text-white bg-blue-700 p-2 rounded-sm">
            Search
         </button>
      </form>
   );
}