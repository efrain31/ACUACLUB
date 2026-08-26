import { useState, useEffect } from 'react';
import './BottomNav.css';

interface NavItem {
  id: string;
  href: string;
  icon: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', href: '#inicio', icon: 'fas fa-home', label: 'Inicio' },
  { id: 'servicios', href: '#alimentacion', icon: 'fas fa-dumbbell', label: 'Servicios' },
  { id: 'instalaciones', href: '#aparatos', icon: 'fas fa-building', label: 'Instalaciones' },
  { id: 'fisioterapia', href: '#fisioterapia', icon: 'fas fa-heart-pulse', label: 'Fisioterapia' },
  { id: 'planes', href: '#planes', icon: 'fas fa-list', label: 'Planes' },
  { id: 'productos', href: '#productos', icon: 'fas fa-shopping-bag', label: 'Productos' },
];

export const BottomNav = () => {
  const [activeLink, setActiveLink] = useState('inicio');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      // Update active link based on section visibility
      NAV_ITEMS.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveLink(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (id: string, href: string) => {
    setActiveLink(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`bottom-nav ${isVisible ? 'bottom-nav--visible' : 'bottom-nav--hidden'}`}>
      <div className="bottom-nav__container">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`bottom-nav__item ${activeLink === item.id ? 'bottom-nav__item--active' : ''}`}
            onClick={() => handleNavClick(item.id, item.href)}
            title={item.label}
            aria-label={item.label}
          >
            <i className={item.icon}></i>
            <span className="bottom-nav__tooltip">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
