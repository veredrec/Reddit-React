import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="footer-text">
          This page was made as a redesign project. All content is based on
          Reddit content but is not copy of the original
        </p>
        <p className="footer-text">
          <a className="link" href="https://veredrec.github.io/Portfolio/">
            Vered Rekanati
          </a>
          &nbsp; &diams; &nbsp; veredrec@gmail.com &nbsp; &diams; &nbsp; &#169;
          2018{' '}
        </p>
      </footer>
    );
  }
}

export default Footer;
