import React from "react";
import PropTypes from "prop-types";

const Search = ({ onChange }) => {
  return (
    <form className="md:w-[60rem] w-[20rem] ">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 dark:text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-500 focus:bg-gray-500 focus:border-gray-800 dark:bg-gray-800 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:bg-gray-800 dark:focus:border-gray-600"
          placeholder="Search high-resolution images"
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default Search;

Search.propTypes = {
  onChange: PropTypes.func,
};
