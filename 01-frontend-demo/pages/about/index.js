import Link from 'next/link'
import { DarkLayout } from '../../components/layouts/DarkLayout'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function About() {
    return (
        <>
            <h2>About Page</h2>
            <h1 className={'title'}>
                {/* Ir a <a href="/about">About</a> */}
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>about/about/index.js</code>
            </p>
        </>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}