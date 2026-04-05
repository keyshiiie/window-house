import React from 'react';
import BurgerMenu from './burgerMenu';
import styles from './header.module.scss';
import { useActiveSection } from '../../hooks/useActiveSection';
import ActionButton from '../../components/actionButton/ActionButton';

const Header: React.FC = () => {
  // Массив ID секций для отслеживания
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

  const navItems = [
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
      return;
    }
    // Плавный скролл к секции
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles['header__row']}>
          <div className={styles['header__logo']}>
            <img src="/icons/logo.svg" alt="Логотип" />
          </div>

          <nav className={styles['header__nav']}>
            <ul className={styles['header__nav-list']}>
              {navItems.map((item) => (
                <li key={item.id} className={styles['header__nav-item']}>
                  <a 
                    href={item.href}
                    className={`${styles['header__nav-link']} ${
                      activeSection === item.id ? styles['header__nav-link--active'] : ''
                    }`}
                    onClick={(e) => handleClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles['header__actions']}>
            <ActionButton type="application" onClick={handleApplicationClick} />
            <ActionButton type="calculation" onClick={handleCalculationClick} />
          </div>

          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;