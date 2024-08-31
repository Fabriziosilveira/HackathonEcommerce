import { NavLink } from 'react-router-dom';
import styles from './Rota.module.css';

export default function Rota({url, titulo}) {
    return(
        <li><NavLink className={styles.nav__icon} to={url}>{titulo}</NavLink></li>
    );
};