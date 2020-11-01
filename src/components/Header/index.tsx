import React from 'react';

import './styles.css';

import Menu from '../Menu';

import logoImg from '../../images/logo.svg';

function Header() {
  function handleLogoClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    window.scrollTo(0, 0);
  }

  return (
    <div id="header" className="header">
      <div className="main-header">
        <a className="header-logo" href="#hero" onClick={ event => handleLogoClick(event) }>
          <img className="header-logo" src={logoImg} width="495" height="40" alt="Guilherme Guain" title="Guilherme Guain" />
        </a>
        <Menu />
      </div>
    </div>
  );
}

export default Header;