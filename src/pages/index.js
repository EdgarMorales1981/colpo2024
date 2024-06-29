import React from 'react'
import NavMenu from "@/pages/NavMenu";
import styles from '../styles/Home.module.css'

const Index = () => {


        return (
            <>
                <NavMenu/>

            <div className={styles.container}>

                <h1 className={styles.header}>Bienvenidos a Amor en Otoño</h1>
                <p className={styles.description}>
                    La aplicación de citas románticas diseñada especialmente para personas de la tercera edad. Encuentra compañía, amistad y amor en la etapa dorada de tu vida.
                </p>
                <div className={styles.features}>
                    <div className={styles.feature}>
                        <h3>Interfaz Intuitiva y Accesible</h3>
                        <p>
                            Diseñada para ser fácil de usar, con grandes botones y texto claro, asegurando que todos puedan navegar sin problemas.
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Perfiles Detallados y Verificados</h3>
                        <p>
                            Conozca mejor a sus posibles parejas con perfiles detallados y verificados, asegurando autenticidad y seguridad.
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Filtros de Búsqueda Personalizados</h3>
                        <p>
                            Encuentra personas con intereses y valores similares usando filtros avanzados de búsqueda.
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Chat Seguro y Privado</h3>
                        <p>
                            Comuníquese de manera segura y privada con la opción de video llamadas para una interacción más personal.
                        </p>
                    </div>
                    <div className={styles.feature}>
                        <h3>Eventos y Actividades Comunitarias</h3>
                        <p>
                            Participe en eventos virtuales y presenciales, creando oportunidades para conocer a otros en un ambiente divertido.
                        </p>
                    </div>
                </div>
            </div>
                </>
        )

}

export default Index
