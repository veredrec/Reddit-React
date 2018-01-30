import React, { Component } from 'react';

class UpperNav extends Component {
  render() {
    return (
      <nav className="top-nav">
        <ul className="top-menu">
          <li className="top-menu-item strong">
            MY SUBREDDIT &nbsp;
            <i className="fa fa-caret-down" aria-hidden="true" />
          </li>
          <li className="top-menu-item strong">POPULAR</li>
          <li className="dash"> &bullet; </li>
          <li className="top-menu-item strong">ALL</li>
          <li className="dash"> &bullet; </li>
          <li className="top-menu-item strong">RANDOM</li>
          <li className="dash"> &bullet; </li>
          <li className="top-menu-item strong">USERS</li>
          <span className="pipe-upper"> | </span>
          <li className="top-menu-item">ASKREDDIT</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">IAMA</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">FUNNY</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">TODAYILEARNED</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">PICS</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">MOVIES</li>
          <li className="dash"> - </li>
          <li className="top-menu-item">NEWS</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">AWW</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">SHOWERTHOUGHTS</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">TELEVISION</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">JOKES</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">SCIENCE</li>
          <li className="dash"> &diams; </li>
          <li className="top-menu-item">MORE</li>
        </ul>
      </nav>
    );
  }
}

export default UpperNav;
