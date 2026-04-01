import React from 'react';
import BurgerMenu from './burgerMenu';
import styles from './header.module.scss';
import { useActiveSection } from '../../hooks/useActiveSection';

const Header: React.FC = () => {
    // Массив ID секций для отслеживания
    const sectionIds = ['services', 'calculator', 'installment'];
    const activeSection = useActiveSection(sectionIds, 100);

    const navItems = [
        { href: "#services", label: "Услуги", id: "services" },
        { href: "#calculator", label: "Продукция", id: "calculator" },
        { href: "#installment", label: "О компании", id: "installment" },
        { href: "#", label: "Портфолио", id: "portfolio" },
        { href: "#", label: "Вопрос-ответ", id: "faq" },
        { href: "#", label: "Контакты", id: "contacts" }
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
                        <button className={styles['header__application-button']}>
                            Заявка на замер
                        </button>
                        <button className={styles['header__calculation-button']}>
                            Заказать рассчет
                        </button>
                    </div>

                    <BurgerMenu />
                </div>
            </div>
        </header>
    );
};

export default Header;