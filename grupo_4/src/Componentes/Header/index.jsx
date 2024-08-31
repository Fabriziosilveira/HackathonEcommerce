import { useState } from 'react';
import styles from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import MenuHamburger from './MenuHamburger';

export default function Header() {
    const [menuVisivel, setMenuVisivel] = useState(false);
    function exibirMenu() {
        setMenuVisivel(!menuVisivel);
    };
    return (
        <header className={styles.header}>
            <Link to='/'>
                    <h1>Logo</h1>
            </Link>
            <MenuHamburger exibirMenu={exibirMenu} />
            <nav className={menuVisivel ? styles.navVisivel : styles.navNone}>
                <ul className={styles.nav}>
                    <li><NavLink className={styles.nav__icon} to='/'>Home</NavLink></li>
                    <li><NavLink className={styles.nav__icon} to='/Aboute'>Sobre</NavLink></li>
                    <li><NavLink className={styles.nav__icon} to='/Products'>Produtos</NavLink></li>
                    <li><NavLink className={styles.nav__icon} to='/Blog'>Blog</NavLink></li>
                    <li><NavLink className={styles.nav__icon} to='Contact'>Contato</NavLink></li>
                </ul>
            </nav>
        </header >
    );
};