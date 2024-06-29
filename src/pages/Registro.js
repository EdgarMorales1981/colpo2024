import React, { useState } from 'react';
import styles from '../styles/Register.module.css';
import NavMenu from "@/pages/NavMenu";
import { supabase } from "../../lib/supabase";
import { useRouter } from 'next/router';

export default function Register() {
    const router = useRouter();
    const [file, setFile] = useState(null);
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [edad, setEdad] = useState('');
    const [sexo, setSexo] = useState('');
    const [description, setDescription] = useState('');
    const [signo, setSigno] = useState('');
    const [vibe, setVibe] = useState(true);


    const verificarNombre = (e) => {
        setNombre(e.target.value);
    }
    const verificarEmail = (e) => {
        setEmail(e.target.value);
    }

    const verificarPassword = (e) => {
        setPassword(e.target.value);
    }

    const verificarFile = (e) => {
        setFile(e.target.files[0]);
    }

    const verificarEdad = (e) => {
        setEdad(e.target.value);
    }

    const verificarSexo = (e) => {
        setSexo(e.target.value);
    }

    const verificarDescription = (e) => {
        setDescription(e.target.value);
    }

    const verificarSigno = (e) => {
        setSigno(e.target.value);
    }

    const verificarVibe = (e) => {
        setVibe(e.target.value);
    }


    const handleUpload = async () => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onloadend = async () => {
                const base64data = reader.result;

                try {
                    const response = await fetch('/api/upload', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ file: base64data }),
                    });

                    const data = await response.json();
                    resolve(data.url);
                } catch (error) {
                    reject(error);
                }
            };

            reader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const guardar = async (e) => {
        e.preventDefault();
        try {
            const imageUrl = await handleUpload();
            const { data, error } = await supabase
                .from('usuarios')
                .insert([{
                    nombre: nombre,
                    email: email,
                    password: password,
                    edad: edad,
                    sexo: sexo,
                    avatar: imageUrl,
                    descripcion: description,
                    signo: signo,
                    vibra: vibe
                }])
                .select("*");

            if (error) {
                throw error;
            }

            alert('Registro enviado');
            router.push('/Login');
        } catch (error) {
            alert('Error al enviar el registro', error);
        }
    };

    return (
        <>
            <NavMenu />
            <div className={styles.container}>
                <form className={styles.form} onSubmit={guardar}>
                    <h1 className={styles.title}>Registro</h1>

                    <div className={styles.inputGroup}>
                        <label htmlFor="nombre" className={styles.label}>Nombre</label>
                        <input value={nombre} onChange={verificarNombre} type="text" id="nombre" className={styles.input}  required />

                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input value={email} onChange={verificarEmail} type="email" id="email" className={styles.input}  required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input value={password} onChange={verificarPassword} type="password" id="password" className={styles.input}  />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="avatar" className={styles.label}>Avatar</label>
                        <input onChange={verificarFile} type="file" id="avatar" className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="edad" className={styles.label}>Edad</label>
                        <input value={edad} onChange={verificarEdad} type="number" id="edad" className={styles.input} required />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="sexo" className={styles.label}>Orientación Sexual</label>
                        <select id="sexo" className={styles.select} value={sexo} onChange={verificarSexo} required>
                            <option value="">Seleccionar...</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Femenino">Femenino</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="description" className={styles.label}>Descripción</label>
                        <textarea id="description" className={styles.textarea} value={description} onChange={verificarDescription} required></textarea>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="signo" className={styles.label}>Signo Zodiacal</label>
                        <select id="signo" className={styles.select} value={signo} onChange={verificarSigno}required>
                            <option value="">Seleccionar...</option>
                            <option value="aries">Aries</option>
                            <option value="tauro">Tauro</option>
                            <option value="geminis">Géminis</option>
                            <option value="cancer">Cáncer</option>
                            <option value="leo">Leo</option>
                            <option value="virgo">Virgo</option>
                            <option value="libra">Libra</option>
                            <option value="escorpio">Escorpio</option>
                            <option value="sagitario">Sagitario</option>
                            <option value="capricornio">Capricornio</option>
                            <option value="acuario">Acuario</option>
                            <option value="piscis">Piscis</option>
                        </select>
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="vibe" className={styles.label}>Vibra</label>
                        <select id="vibe" className={styles.select} value={vibe} onChange={verificarVibe} required>
                            <option value={vibe}>Seleccionar...</option>
                            <option value={true}>Sí</option>
                            <option value={false}>No</option>
                        </select>
                    </div>

                    <button
                        disabled={
                               nombre === '' ||
                                email === '' ||
                                password === '' ||
                                file === null ||
                                edad === '' ||
                                sexo === '' ||
                                description === '' ||
                                signo === '' ||
                                vibe === ''

                        }
                        type="submit" className={styles.button}>
                        Registrarse
                    </button>
                </form>
            </div>
        </>
    );
}
