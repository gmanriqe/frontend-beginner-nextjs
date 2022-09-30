import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>GManriqe | About</title>
                <meta name="About" content="this is about" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h2>About Page</h2>
                <h1 className={styles.title}>
                    {/* Ir a <a href="/">Home</a> */}
                    Ir a <Link href="/">Home</Link>
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/about.js</code>
                </p>
            </main>


        </div>
    )
}
