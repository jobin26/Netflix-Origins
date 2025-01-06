import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function NavBar() {
  const [buttonShow, setButtonShow] = useState(false);

  return (
    <nav className="p-4 flex justify-between items-center bg-transparent fixed top-0 left-0 right-0 z-20">
      <div>
        <img className="h-8 md:10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      </div>

      {/* Regular Navigation links visible on medium screens and up */}
      <ul className="hidden md:flex space-x-6 text-white">
        <li className="p-1 hover:text-red-500 cursor-pointer">Home</li>
        <li className="p-1 hover:text-red-500 cursor-pointer">TV Shows</li>
        <li className="p-1 hover:text-red-500 cursor-pointer">Movies</li>
        <li className="p-1 hover:text-red-500 cursor-pointer">New & Popular</li>
        <li className="p-1 hover:text-red-500 cursor-pointer">My List</li>
      </ul>

      {/* Mobile menu (More button) */}
      <div className="sm:block md:hidden">
        <Menu as="div">
          <MenuButton 
            onClick={() => setButtonShow(!buttonShow)} 
            className="inline-flex w-full justify-center hover:text-red-500 gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ring-0 ring-inset ring-gray-50 ">
            More
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
          </MenuButton>

          {/* Show this dropdown only when buttonShow is true */}
          {buttonShow && (
            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black shadow-lg ring-1 ring-black/5 transition focus:outline-none">
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700  hover:text-red-500">
                    Home
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:text-red-500">
                    TV Shows
                  </button>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:text-red-500">
                    Movies
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:text-red-500">
                    Popular
                  </button>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <button className="block px-4 py-2 text-sm text-gray-700 hover:text-red-500">
                    My List
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          )}
        </Menu>
      </div>

      {/* Logo */}
      <div>
        <img className="h-8 items-center"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
      </div>
    </nav>
  );
}

export default NavBar;
