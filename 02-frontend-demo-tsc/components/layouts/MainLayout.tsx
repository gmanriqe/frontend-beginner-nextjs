import { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '../Navbar'
import styles from './MainLayout.module.css'
// rafc
/*
    MainLayout se convierte en un Hight Order Component, quiiere decir
    una funcion que recibe como parametro otro funcion y retorna otra funcion
*/
export const MainLayout: FC = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>GManriqe | Contact</title>
                <meta name="Contact" content="this is contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar></Navbar>

            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
