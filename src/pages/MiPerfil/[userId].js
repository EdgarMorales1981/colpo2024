import { useRouter } from 'next/router';
import NavMenu from '@/pages/NavMenu';
import React, {useEffect, useState} from "react";

import {supabase} from "../../../lib/supabase";
import styles from "@/styles/MiPerfil.module.css";

import MisPost from "@/pages/MisPosts/[userId]";



const MiPerfil = () => {

    const router = useRouter();
    const { userId } = router.query; // Obtener userId de los parámetros de la URL
    const [usuarios, setUsuarios] = useState([]);
    const [resultado, setResultado] = useState('');

    useEffect(() => {

        const fetchUsuariosPerfil = async () => {
            let { data: usuarios, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('userId', userId);
            if (error) {
                console.error('Error fetching usuarios', error);
                router.push('/');
                return;
            }
            setUsuarios(usuarios);
        };
        fetchUsuariosPerfil();
    }, []);

    return (
        <>
            <NavMenu />
            <div className="container">
                <h1>Perfil Usuario</h1>
                {usuarios.map((usuario) => (
                    <div key={usuario.userId} className={styles.profileCard}>
                        <img src={usuario.avatar} alt={usuario.nombre} className={styles.avatar} />
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
            <MisPost/>
        </>
    );
};

export default MiPerfil
