import React from 'react';
import { useBurgerMenu } from './useBurgerMenu';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './header.module.scss';
import ActionButton from '../../components/actionButton/ActionButton';

const BurgerMenu: React.FC = () => {
  const { isOpen, toggleMenu, closeMenu } = useBurgerMenu();
  
  const sectionIds = ['services', 'products', 'companyinfo', 'portfolio', 'faq', 'contacts'];
  const activeSection = useActiveSection(sectionIds, 100);

  const handleApplicationClick = () => {
    // Логика открытия модалки или скролла
    console.log('Открыть форму заявки на замер');
  };

  const handleCalculationClick = () => {
    // Логика открытия модалки или скролла
    console.log('Открыть форму расчета');
  };

  const navLinks = [
    { href: "#services", label: "Услуги", id: "services" },
    { href: "#products", label: "Продукция", id: "products" },
    { href: "#companyinfo", label: "О компании", id: "companyinfo" },
    { href: "#portfolio", label: "Портфолио", id: "portfolio" },
    { href: "#faq", label: "Вопрос-ответ", id: "faq" },
    { href: "#contacts", label: "Контакты", id: "contacts" }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href === '#') {
        e.preventDefault();
        closeMenu();
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
  };

  return (
    <>
      <button 
        className={`${styles['header__burger']} ${isOpen ? styles['header__burger--active'] : ''}`}
        onClick={toggleMenu}
        aria-label="Меню"
      >
        <span className={styles['header__burger-icon']}></span>
      </button>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}>
        <nav>
          <ul className={styles.mobileNavList}>
            {navLinks.map((link) => (
              <li key={link.id}>
                  <a 
                    href={link.href}
                    className={activeSection === link.id ? styles['mobileNavLink--active'] : ''}
                    onClick={(e) => handleClick(e, link.href)}
                  >
                    {link.label}
                  </a>
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <ActionButton type="application" onClick={handleApplicationClick} />
            <ActionButton type="calculation" onClick={handleCalculationClick} />
          </div>
        </nav>
      </div>

      <div 
        className={`${styles['header__overlay']} ${isOpen ? styles['header__overlay--open'] : ''}`}
        onClick={closeMenu}
      />
    </>
  );
};

export default BurgerMenu;