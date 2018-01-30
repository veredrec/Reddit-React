import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img
          className="logo"
          src="https://image.ibb.co/hyriW6/logo.png"
          alt="Reddit Logo"
        />
        <nav className="secondary-nav">
          <ul className="secondary-menu">
            <li className="sec-menu-item current">Hot</li>
            <li className="sec-menu-item">New</li>
            <li className="sec-menu-item">Rising</li>
            <li className="sec-menu-item">Controversial</li>
            <li className="sec-menu-item">Top</li>
            <li className="sec-menu-item">Gilded</li>
            <li className="sec-menu-item last-item">Wiki</li>
          </ul>
        </nav>
        <i className="user fa fa-user" aria-hidden="true" />
      </header>
    );
  }
}

export default Header;
