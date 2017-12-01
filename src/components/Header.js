import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header>
      <h1>EroConfig</h1>
      <ul className="main-nav">
        <li><Link onClick={() => {props.setTabId(0)}} className={props.tabId === 0 ? 'active' : ''} to="/">Rooms</Link></li>
        <li><Link onClick={() => {props.setTabId(1)}} className={props.tabId === 1 ? 'active' : ''} to="/sources">Sources</Link></li>
        <li><Link onClick={() => {props.setTabId(2)}} className={props.tabId === 2 ? 'active' : ''} to="/devices">Devices</Link></li>
      </ul>
    </header>
  );
}

export default Header;