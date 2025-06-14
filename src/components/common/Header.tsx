import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../styles/components/Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'ホーム', href: '/', current: location.pathname === '/' },
    { name: '自己紹介', href: '/about', current: location.pathname === '/about' },
    { name: 'ポートフォリオ', href: '/portfolio', current: location.pathname === '/portfolio' },
    { name: '趣味・興味', href: '/interests', current: location.pathname === '/interests' },
    { name: 'お問い合わせ', href: '/contact', current: location.pathname === '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <Link to="/" className="logo-link">
              <span className="logo-text">MY PORTFOLIO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav hidden md:block">
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`nav-link ${item.current ? 'nav-link--active' : ''}`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button md:hidden"
            onClick={toggleMenu}
            aria-label="メニューを開く"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'hamburger--active' : ''}`}>
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
              <span className="hamburger__line"></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav--open' : ''}`}>
          <ul className="mobile-nav__list">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`mobile-nav__link ${item.current ? 'mobile-nav__link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
