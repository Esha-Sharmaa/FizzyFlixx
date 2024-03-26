import React from 'react';

const GptSearchBar = () => {
    return (
      <div className="flex gap-8 text-white px-8 py-6 rounded-md shadow-lg relative z-10 w-[60%]">
        <input
          type="text"
          className="font-sora w-full bg-transparent text-white placeholder-gray-400 border-b-2 border-transparent focus:outline-none focus:border-red-500"
          placeholder="Lets decide........."
        />
        <button className="font-sora mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
          Search
        </button>
      </div>
    );
}

export default GptSearchBar;
