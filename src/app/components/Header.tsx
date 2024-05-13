import Link from 'next/link';
import React from 'react';
import NavBar from './Navbar';

const Header = () => {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar />
    </header>
  );
};

export default Header;
