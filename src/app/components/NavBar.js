import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from './Logo'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()
    console.log(router)
    return(
        <Link href={href} className={`${className} relative group`}>
                {title}

            <span className={`
            h-[2px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const NavBar = () => {
    return (
        <header
        className='w-full px-32 py-8 font-semibold text-lg 
        flex items-center justify-end'
        >
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">about</Link>
                <Link href="/projects">projects</Link>
                <Link href="/articles">articles</Link>
            </nav>
            <Logo />
            <nav>
                <Link href="/" target='={"_blank"}'>T</Link>
                <Link href="/" target='={"_blank"}'>T</Link>
            </nav>
        </header>
    )
}

export default NavBar