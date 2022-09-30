
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
]

export const Navbar = () => {
    return (
        <nav className={styles['menu-nav']}>
            {/* <ActiveLink text="Home" href="/"/>
                <ActiveLink text="About" href="/about"/>
                <ActiveLink text="Contact" href="/contact"/> */}
            {
                menuItems.map((item) => {
                    return (
                        <ActiveLink text={item.text} href={item.href} />
                    )
                })
            }
        </nav>
    )
}
