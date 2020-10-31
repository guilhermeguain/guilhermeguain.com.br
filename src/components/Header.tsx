import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

import logoImg from '../images/logo.svg';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logoImg} alt="Guilherme Guain" title="Guilherme Guain" />
      </Link>
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
  );
}

export default Header;