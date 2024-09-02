import styles from './MenuHamburger.module.css';

export default function MenuHamburger({ exibirMenu }) {
    return (
        <div className={styles.background} onClick={exibirMenu}>
            <button className={styles.menu__icon}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );
};