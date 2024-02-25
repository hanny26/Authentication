import React from 'react';
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-slate-600 to-slate-800 p-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-white text-3xl font-semibold">HP Growth</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-white text-purple-700 hover:bg-purple-700 hover:text-white rounded-lg py-2 px-4 transition duration-300 ease-in-out">
              Sign In
            </button>
            <div className="bg-cyan-900 hover:bg-cyan-500 w-12 h-12 flex items-center justify-center rounded-full">
              <Avatar>H</Avatar>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
