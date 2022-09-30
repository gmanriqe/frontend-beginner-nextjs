import Link from 'next/link'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={ styles['menu-nav']}>
        <Link href="">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </nav>
  )
}
