import { useRouter } from 'next/router';
import NavMenu from '@/pages/NavMenu';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import styles from '@/styles/Perfil.module.css';
import Post from '@/pages/Post/[userId]';

const PerfilUsuario = () => {
    const router = useRouter();
    const { userId } = router.query;
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!userId) return; // Verificar si userId está disponible
        const fetchUsuariosPerfil = async () => {
            try {
                const { data: usuarios, error } = await supabase
                    .from('usuarios')
                    .select('*')
                    .eq('userId', userId);
                if (error) {
                    throw error;
                }
                if (usuarios.length === 0) {
                    throw new Error('Usuario no encontrado');
                }
                setUsuarios(usuarios);
            } catch (error) {
                console.error('Error fetching usuarios', error);
                setError(error.message || 'Error fetching usuarios');
            } finally {
                setLoading(false);
            }
        };

        fetchUsuariosPerfil();
    }, [userId, supabase]);

    const verPerfilUsuario = (userId) => {
        router.push(`/PerfilUsuario/${userId}`);
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
            <NavMenu />
            <div className={styles.container}>
                <h1>Perfil Usuario</h1>
                {usuarios.length > 0 && usuarios.map((usuario) => (
                    <div key={usuario.userId} className={styles.profileCard}>
                        <img
                            onClick={() => verPerfilUsuario(usuario.userId)}
                            src={usuario.avatar}
                            alt={usuario.nombre}
                            className={styles.avatar}
                        />
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
            <Post />
        </>
    );
};

export default PerfilUsuario;
