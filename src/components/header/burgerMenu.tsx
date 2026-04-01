import React from 'react';
import { useBurgerMenu } from './useBurgerMenu';
import { useActiveSection } from '../../hooks/useActiveSection';
import styles from './header.module.scss';

const BurgerMenu: React.FC = () => {
    const { isOpen, toggleMenu, closeMenu } = useBurgerMenu();
    
    const sectionIds = ['models', 'calculator', 'installment'];
    const activeSection = useActiveSection(sectionIds, 100);

    const navLinks = [
        { href: "#models", label: "Услуги", id: "models" },
        { href: "#calculator", label: "Продукция", id: "calculator" },
        { href: "#installment", label: "О компании", id: "installment" },
        { href: "#", label: "Портфолио", id: "portfolio" },
        { href: "#", label: "Вопрос-ответ", id: "faq" },
        { href: "#", label: "Контакты", id: "contacts" }
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
                        <button className={styles['header__application-button']}>
                            Заявка на замер
                        </button>
                        <button className={styles['header__calculation-button']}>
                            Заказать рассчет
                        </button>
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