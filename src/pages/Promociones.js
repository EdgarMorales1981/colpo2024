import React from 'react';
import styles from '../styles/Promociones.module.css';
import NavMenu from '@/pages/navmenu';

const Promociones = () => {
    return (
        <>
            <NavMenu />
            <div className={styles.container}>
                <h1 className={styles.title}>Nuestras Promociones</h1>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <h2>Gratis</h2>
                        <p className={styles.price}>€0</p>
                        <p>Acceso limitado</p>
                        <p>Publicidad incluida</p>
                        <p>Soporte básico</p>
                        <button className={styles.button}>Empezar Gratis</button>
                    </div>
                    <div className={`${styles.card} ${styles.featured}`}>
                        <h2>Mensual</h2>
                        <p className={styles.price}>€8.99<span>/mes</span></p>
                        <p>Acceso completo</p>
                        <p>Sin publicidad</p>
                        <p>Soporte prioritario</p>
                        <button className={styles.button}>Empezar Mensual</button>
                    </div>
                    <div className={styles.card}>
                        <h2>Anual</h2>
                        <p className={styles.price}>€99<span>/año</span></p>
                        <p>Acceso completo</p>
                        <p>Sin publicidad</p>
                        <p>Soporte prioritario</p>
                        <button className={styles.button}>Empezar Anual</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Promociones;

