import React, { Component } from 'react';

class LowerMenu extends Component {
  render() {
    return (
      <section className="lower-menu">
        <nav className="nav-lower-left">
          <ul className="menu-part">
            <li className="first-item">ABOUT</li>
            <li className="lower-menu-item">blog</li>
            <li className="lower-menu-item">advertise</li>
            <li className="lower-menu-item">careers</li>
          </ul>
        </nav>
        <nav className="nav-lower-left">
          <ul className="menu-part">
            <li className="first-item">HELP</li>
            <li className="lower-menu-item">site rules</li>
            <li className="lower-menu-item">help center</li>
            <li className="lower-menu-item">wiki</li>
            <li className="lower-menu-item">reddiquette</li>
            <li className="lower-menu-item">mod guidelines</li>
            <li className="lower-menu-item">contact us</li>
          </ul>
        </nav>
        <nav className="nav-lower-left">
          <ul className="menu-part">
            <li className="first-item">APPS & TOOLS</li>
            <li className="lower-menu-item">Reddit for iPhone</li>
            <li className="lower-menu-item">Reddit for Android</li>
            <li className="lower-menu-item">mobile website</li>
            <li className="lower-menu-item">buttons</li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default LowerMenu;
