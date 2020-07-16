import React from 'react';

import './header.css';

const Header = ({onServiceChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="/home" >
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="/home">People</a>
        </li>
        <li>
          <a href="/home">Planets</a>
        </li>
        <li>
          <a href="/home">Starships</a>
        </li>
      </ul>

        <button
            onClick={onServiceChange}
            className="btn btn-primary btn-sm">
            Change service
        </button>
    </div>
  );
};

export default Header;