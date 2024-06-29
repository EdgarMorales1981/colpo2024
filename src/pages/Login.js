import styles from '../styles/Login.module.css'
import NavMenu from "@/pages/NavMenu";
import { supabase } from "../../lib/supabase";
import { useState } from "react";
import { useRouter } from 'next/router';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [signin, setSignin] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const verificarEmail = (e) => {
        setEmail(e.target.value);
    }

    const verificarPass = (e) => {
        setPassword(e.target.value);
    }

    async function entrar(e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

        let { data: usuarios, error } = await supabase
            .from('usuarios')
            .select('userId, email, password')
            .eq('email', email)
            .eq('password', password);

        if (error) {
            alert('Error al buscar usuario: ', error.message);
            return;
        }

        if (usuarios.length > 0) {
            const userLogin = usuarios[0];
            setSignin(true);

           const datos = localStorage.setItem('userlogin', `${userLogin.userId}`);



            console.log('resultado', datos)

            alert('Bienvenido');

            router.push(`/MiPerfil/${userLogin.userId}`);
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    };

    return (
        <>
            <NavMenu />
            <div className={styles.container}>
                <form className={styles.form} onSubmit={entrar}>
                    <h1 className={styles.title}>Login</h1>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input onChange={verificarEmail} type="email" id="email" className={styles.input} required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input onChange={verificarPass} type="password" id="password" className={styles.input} required />
                    </div>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>
        </>
    )
}


