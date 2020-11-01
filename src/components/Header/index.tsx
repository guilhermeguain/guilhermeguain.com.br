import React from 'react';

import './styles.css';

import logoImg from '../../images/logo.svg';

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <a className="header-logo" href="#">
          <img className="header-logo" src={logoImg} width="495" height="40" alt="Guilherme Guain" title="Guilherme Guain" />
        </a>
        <ul className="header-menu">
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#experience">Experiência</a>
          </li>
          <li>
            <a href="#education">Educação</a>
          </li>
          <li>
            <a href="#extra">Extra</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;