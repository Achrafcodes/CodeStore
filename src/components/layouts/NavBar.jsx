/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Layout.css';
function NavBar() {
  return (
    <div className="Container">
      <h1 className="logo">CoderStore</h1>{' '}
      <ul className="nav-links">
        <li>
          {' '}
          <a href="#">Home</a>
        </li>
        <li>
          {' '}
          <a href="#">Categories</a>
        </li>
        <li>
          {' '}
          <a href="#">Items</a>
        </li>
        <button>Login</button>
      </ul>{' '}
    </div>
  );
}

export default NavBar;