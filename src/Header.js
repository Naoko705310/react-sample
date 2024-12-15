import React from "react";

function Header() {
  return (
    <header className="p-2.5 flex justify-between items-center max-w-custom mx-auto px-4 h-15">
      <h1 className="h-full bg-black text-white text-xl font-bold px-4 flex items-center">Profile</h1>
      <nav>
        <ul className="flex space-x-7.5 font-hiragino">
          <li><a href="#about">About</a></li>
          <li><a href="#bicycle">Bicycle</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;