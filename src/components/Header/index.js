import React from 'react';
import {Link} from 'react-router-dom'
function Header() {
  return (
    <nav className="navbar navbar-expand-sm bg-light">

      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">User</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Header;
