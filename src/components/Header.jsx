import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex justify-between">
        <Link to="/users" className="hover:underline">
          Users
        </Link>
        <Link to="/create" className="hover:underline">
          Create User
        </Link>
      </nav>
    </header>
  );
};

export default Header;
