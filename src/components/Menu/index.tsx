import React from 'react';

import './styles.css';

function Menu() {
  function handleMenuClick(event: React.MouseEvent<HTMLElement>, target: string) {
    event.preventDefault();

    const header = document.getElementById('header');
    const element = document.getElementById(target);

    const headerHeight = header?.getBoundingClientRect().height || 0;
    const elementOffsetTop = element?.offsetTop || 0;

    window.scrollTo(0, elementOffsetTop - headerHeight);

    console.log(headerHeight);
  }

  return (
    <ul className="nav-menu">
      <li>
        <a href="#about" onClick={ event => { handleMenuClick(event, 'about') } }>Sobre</a>
      </li>
      <li>
        <a href="#projects" onClick={ event => { handleMenuClick(event, 'projects') } }>Projetos</a>
      </li>
      <li>
        <a href="#experience" onClick={ event => { handleMenuClick(event, 'experience') } }>Experiência</a>
      </li>
      <li>
        <a href="#education" onClick={ event => { handleMenuClick(event, 'education') } }>Educação</a>
      </li>
      <li>
        <a href="#extra" onClick={ event => { handleMenuClick(event, 'extra') } }>Extra</a>
      </li>
    </ul>
  );
}

export default Menu;