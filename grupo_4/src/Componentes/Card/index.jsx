import styles from './Card.module.css';
import { NavLink } from 'react-router-dom';

export default function Card() {
    return(
        <div className={styles.card}>
            <div className={styles.image}></div>
            <div className={styles.content}>
                <NavLink to='/'>
                    <span className={styles.title}>
                        Remédio
                    </span>
                </NavLink>
                <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit accusamus delectus doloribus quaerat soluta ullam aut modi, enim labore nemo autem voluptas omnis vitae eveniet in cum at perferendis accusantium?</p>
                <NavLink to='/' className={styles.action}>
                    Veja mais <span aria-hidden='true'></span>
                </NavLink>
            </div>
        </div>
    );
};