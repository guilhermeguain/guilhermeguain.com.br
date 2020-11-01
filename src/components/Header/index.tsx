import React, { useState, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';

import './styles.css';

import menuItems from '../../menu.json';

import logoImg from '../../images/logo.svg';

interface WindowSizeData {
  width: undefined|number;
  height: undefined|number;
}

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [windowSize, setWindowSize] = useState<WindowSizeData>({
    width: undefined,
    height: undefined
  });

  const isMobile = windowSize.width && windowSize.width < 768;

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);


  function handleLogoClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    window.scrollTo(0, 0);
  }

  function handleHamburgerClick() {
    setToggleMenu(toggleMenu ? false : true);
  }

  function handleMenuClick(event: React.MouseEvent<HTMLElement>, target: string) {
    event.preventDefault();

    const header = document.getElementById('header');
    const element = document.getElementById(target);

    const headerHeight = header?.getBoundingClientRect().height || 0;
    const elementOffsetTop = element?.offsetTop || 0;

    setToggleMenu(false);

    window.scrollTo(0, elementOffsetTop - headerHeight);
  }

  return (
    <div id="header" className="header">
      <div className="main-header">
        <a className="header-logo" href="#hero" onClick={ event => handleLogoClick(event) }>
          <img className="header-logo" src={logoImg} width="495" height="40" alt="Guilherme Guain" title="Guilherme Guain" />
        </a>
        <div className={`mobile-menu-overlay ${toggleMenu ? "active" : "" }`} onClick={ () => { setToggleMenu(false) } }></div>
        { (toggleMenu || !isMobile) && (
          <ul className={` nav-menu ${isMobile ? "mobile-menu" : "main-menu"} `}>
            {menuItems.map(menuItem => (
              <li key={menuItem.title}>
                <a href={`#${menuItem.target}`} onClick={ event => { handleMenuClick(event, menuItem.target) } }>{menuItem.label}</a>
              </li>
            ))}
          </ul>
        ) }
        { isMobile &&
          <HamburgerMenu
            isOpen={toggleMenu}
            menuClicked={handleHamburgerClick}
            width={18}
            height={16}
            strokeWidth={2}
            rotate={0}
            color='#282933'
            borderRadius={0}
            animationDuration={0.5}
          />
        }       
      </div>
    </div>
  );
}

export default Header;