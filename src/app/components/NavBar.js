"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from './Logo'
import {LinkedInIcon, GithubIcon} from './icons'

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
        className='w-full px-0 py-0 font-semibold text-lg 
        flex items-center justify-end'
        >
            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
                <CustomLink href="/articles" title="Articles" className='ml-4'/>
            </nav>

            {/* <nav className='flex items-center self-center mt-2'>
                <Link href="https://www.linkedin.com/in/pinyun-hung/" target={"_blank"} className='w-10 mx-3'>
                    <LinkedInIcon />
                </Link>
                <Link href="https://github.com/tg623623nana" target={"_blank"} className='w-12 ml-3'
                >
                    <GithubIcon />
                </Link>
            </nav> */}

            <Logo />
        </header>
    )
}

export default NavBar