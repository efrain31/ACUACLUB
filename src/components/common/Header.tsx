import { useState } from 'react';
import { Button } from './Button';
import './Header.css';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#alimentacion' },
  { label: 'Instalaciones', href: '#aparatos' },
  { label: 'Fisioterapia', href: '#fisioterapia' },
  { label: 'Planes', href: '#planes' },
  { label: 'Productos', href: '#productos' },
];

export const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavClick = (href: string) => {
    setActiveLink(href);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <a href="#inicio" className="header__logo">
          <span className="logo__text">
            Sport<span className="logo__accent">Club</span>
          </span>
          <span className="logo__subtitle">AcuaClub</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav nav--desktop">
          <ul className="nav__list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="nav__item">
                <a
                  href={link.href}
                  className={`nav__link ${
                    activeLink === link.href ? 'nav__link--active' : ''
                  }`}
                  onClick={() => handleNavClick(link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header__cta">
          <Button
            variant="primary"
            size="md"
            href="https://axolotech2.web.app/"
            target="_blank"
          >
            Iniciar Sesión
          </Button>
        </div>
      </div>
    </header>
  );
};
