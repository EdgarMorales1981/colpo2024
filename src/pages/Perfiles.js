import React, { useEffect, useState } from 'react';
import NavMenu from '@/pages/NavMenu';
import { supabase } from '../../lib/supabase';
import styles from '../styles/Perfil.module.css';
import { useRouter } from 'next/router';


export default function Perfiles() {
    const [usuarios, setUsuarios] = useState([]);
    const [resultado, setResultado] = useState('');
    const router = useRouter();


    useEffect(() => {
        const fetchUsuarios = async () => {
            let { data: usuarios, error } = await supabase
                .from('usuarios')
                .select('*')
                .order('userId', { ascending: false });
            if (error) {
                console.error('Error fetching usuarios', error);
                router.push('/Login');
                return;
            }
            setUsuarios(usuarios);

        };
        fetchUsuarios();

    }, []);

    const verPerfilUsuario = async (userId) => {
        router.push('/PerfilUsuario/' + userId);
    };

    return (
        <>
            <NavMenu />
            <div className={styles.container}>
                {usuarios.map((usuario) => (
                    <div key={usuario.userId} className={styles.profileCard}>
                        <img onClick={() => verPerfilUsuario(usuario.userId)} src={usuario.avatar} alt={usuario.nombre} className={styles.avatar} />
                        <h1 className={styles.name}>{usuario.nombre}</h1>
                        <h2 className={styles.email}>{usuario.email}</h2>
                        <h3 className={styles.age}>{usuario.edad}</h3>
                        <p className={styles.description}>{usuario.description}</p>
                        <p className={styles.sexo}>{usuario.sexo}</p>
                        <p className={styles.signo}>{usuario.signo}</p>
                        <p className={styles.orientation}>{usuario.orientation}</p>
                        <p className={styles.vibe}>{usuario.vibe}</p>
                    </div>
                ))}
            </div>
        </>
    );
}
