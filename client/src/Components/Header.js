// Header - navigation bar containing the h2 heading and navigation links (Home About)

import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
      <h1>Recipe Search</h1>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
      </nav>
    </header>
  )
}

export default Header;