import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function About() {
    return (
        <MainLayout>
            <h2>About Page</h2>
            <h1 className={'title'}>
                {/* Ir a <a href="/about">About</a> */}
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>about/index.js</code>
            </p>
        </MainLayout>
    )
}
