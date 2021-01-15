import React from 'react';
import golisanologo from '../assets/golisano-logo.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="mdl-mini-footer" id="footer">
      <div className="mdl-mini-footer__right-section">
        <div className="mdl-logo">
          <span>Copyright © Rochester Institute of Technology</span>
        </div>
      </div>
      <div className="mdl-mini-footer__left-section">
        <img className="mdl-logo" src={golisanologo} alt="Golisano Logo" width="500px" />
      </div>
    </footer>
  );
}

export default Footer;
