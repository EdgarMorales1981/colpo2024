import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/NavMenu.module.css';

const NavMenu = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        if (window.localStorage){
            const resultado  = localStorage.getItem('userlogin');
            setResultado(resultado);
        }
        else {
            alert('recuerda iniciar sesión');
        }
    }, []);


    const { pathname } = useRouter();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const borrar = () => {
        localStorage.removeItem('userlogin');
        alert('Sesión cerrada');
        router.push('/login');
    };

    return (
        <>
            <div className={styles.navHeader}>
                <h2>Menú</h2>
                <button className={styles.menuButton} onClick={toggleMenu}>
                    ☰
                </button>
            </div>
            <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                <div className={styles.navContent}>
                    <button className={styles.closeButton} onClick={toggleMenu}>✕</button>
                    <ul>
                        <li>
                            <Link href="/" className={pathname === '/' ? styles.active : ''}>
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/Acerca" className={pathname === '/Acerca' ? styles.active : ''}>
                                Acerca
                            </Link>
                        </li>
                        <li>
                            <Link href="/Contacto" className={pathname === '/Contacto' ? styles.active : ''}>
                                Contacto
                            </Link>
                        </li>
                        <li>
                            <Link href="/Promociones" className={pathname === '/Promociones' ? styles.active : ''}>
                                Promociones
                            </Link>
                        </li>
                        <li>
                            <Link href="/Login" className={pathname === '/Login' ? styles.active : ''}>
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link href="/Registro" className={pathname === '/Registro' ? styles.active : ''}>
                                Registro
                            </Link>
                        </li>
                        <li>
                            <Link href="/Perfiles" className={pathname === '/Perfiles' ? styles.active : ''}>
                                Perfiles
                            </Link>
                        </li>
                        <li>
                            <Link href="/Muro" className={pathname === '/Muro' ? styles.active : ''}>
                                Muro
                            </Link>
                        </li>
                        <li>
                            <Link href={`/MiPerfil/${resultado} `}
                                  className={pathname === `/MiPerfil/${resultado}` ? styles.active : ''}>
                                Mi Perfil
                            </Link>
                        </li>
                        <li>
                            <Link href="/Match" className={pathname === '/Match' ? styles.active : ''}>
                                Match
                            </Link>
                        </li>
                        <li hidden={true}>
                            <Link href={`/PerfilUsuario/${resultado}`}
                                  className={pathname === `/PerfilUsuario/${resultado}` ? styles.active : ''}>
                                PerfilUsuario
                            </Link>
                        </li>
                        <li>
                            <Link href='/' onClick={borrar}>
                                Salir
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default NavMenu;
