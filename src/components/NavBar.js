import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from './Logo'
import {LinkedInIcon, GithubIcon} from './icons'
import {motion} from "framer-motion"
import profilePic2 from "../../public/images/profile/home-img10.jpg"
import Image from 'next/image'

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
            {/* <div>
              <Image src={profilePic2} alt="CodeBucks" fill
              style={{objectFit:"cover"}}
              className=''></Image>
            </div> */}

            <nav>
                <CustomLink href="/" title="Home" className='mr-4'/>
                <CustomLink href="/about" title="About" className='mx-4'/>
                <CustomLink href="/projects" title="Projects" className='mx-4'/>
                <CustomLink href="/articles" title="Articles" className='ml-4'/>
            </nav>

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
            </div>
        </header>
    )
}

export default NavBar