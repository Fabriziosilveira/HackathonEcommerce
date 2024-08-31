import { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import MenuHamburger from './MenuHamburger';
import Rota from './Rota';

export default function Header() {

    const [menuVisivel, setMenuVisivel] = useState(false);

    function exibirMenu() {
        setMenuVisivel(!menuVisivel);
    };

    const rotas =[
        {
            url: '/',
            titulo: 'Home'
        },
        {
            url: '/Aboute',
            titulo: 'Sobre'
        },
        {
            url: '/Products',
            titulo: 'Produtos'
        },
        {
            url: '/Blog',
            titulo: 'Blog'
        },
        {
            url: '/Contact',
            titulo: 'Contato'
        }
    ]


    return (
        <header className={styles.header}>
            <Link to='/'>
                    <h1>Logo</h1>
            </Link>
            <MenuHamburger exibirMenu={exibirMenu} />
            <nav className={menuVisivel ? styles.navVisivel : styles.navNone}>
                <ul className={styles.nav}>
                    {
                        rotas.map((rota, index) => <Rota key={index} url={rota.url} titulo={rota.titulo} />)
                    }
                </ul>
            </nav>
        </header >
    );
};
