import Card from '../../Componentes/Card';
import Header from '../../Componentes/Header';
import Title from '../../Componentes/title';
import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <Header />
            <Title>
                Em destaques
            </Title>
            <Card />
            <Card />
            <Card />
            <Card />
        </>
    );
};