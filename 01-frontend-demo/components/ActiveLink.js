import { useRouter } from 'next/router'
import Link from 'next/link'

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({ text, href }) => {

    // useRouter(custom hook propio de Next)
    const { asPath } = useRouter()
    console.log(asPath)

    return (
        <Link href={href}>
            <a style={asPath === href ? style : null}>{text}</a>
        </Link>
    )
}