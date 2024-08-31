import styles from './MenuHamburger.module.css';

export default function MenuHamburger({ exibirMenu }) {
    return (
        <div className={styles.menu_hamburge__div} onClick={exibirMenu}>
            <span className={styles.hamburge}></span>
            <span className={styles.hamburge}></span>
            <span className={styles.hamburge}></span>
        </div>
    );
};