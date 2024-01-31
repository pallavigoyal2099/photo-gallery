import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="shadow-md   w-full sticky top-0 left-0 z-20">
      <div className="md:flex items-center h-[4rem] justify-between bg-gray-900 py-4 md:px-10 px-7 ">
        <div className=" font-bold text-2xl cursor-pointer  flex items-center font-[Poppins] text-gray-100">
          <span className="mr-1 ">
            <img alt="gallery-icon" src="gallery.png" height={28} width={28} />
          </span>
          <a
            href="/"
            className="block px-3  text-gray-100 rounded  md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent md:pt-1"
          >
            Photo Gallery
          </a>
        </div>
        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!navbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          )}
        </div>
        <ul
          className={`md:flex md:flex-row md:items-center  flex flex-col items-baseline   md:pb-0 pb-4 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            navbarOpen ? "top-20px" : "top-[-490px]"
          }`}
        >
          <li className="mx-4 md:ml-8 text-xl md:m-0 mt-7">
            <a
              href="/"
              className="block py-2 px-3 text-gray-100 rounded  md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent"
            >
              Home
            </a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 mt-7">
            <a
              href="/wishlist"
              className="block py-2 px-3 text-gray-100 rounded  md:hover:text-blue-700 md:p-0 md:dark:hover:bg-transparent"
            >
              Wishlist
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
