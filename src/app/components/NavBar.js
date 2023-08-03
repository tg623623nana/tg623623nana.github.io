"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Logo from './Logo'
import {SunIcon, MoonIcon, LinkedInIcon, GithubIcon} from './icons'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import {motion} from 'framer-motion'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter()
    
    return(
        <Link href={href} className={`${className} relative group`}>
                {title}

            <span className={`
            h-[2px] inline-block bg-dark
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            dark:bg-light
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }
    
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
                {title}

            <span className={`
            h-[2px] inline-block bg-light
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            dark:bg-dark
            ${router.asPath === href ? 'w-full' : 'w-0'}
            `}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {

    const [mode, setMode] = useThemeSwitcher()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header
        className='w-full px-0 py-0 font-semibold text-lg 
         flex items-center justify-end
        dark:text-light
        relative'
        >

            <button className='flex-col justify-center items-center hidden lg:flex mr-10'
            onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>

            <div className='w-full flex justify-end item-center lg:hidden'>
                <nav>
                    <CustomLink href="/" title="Home" className='mr-4'/>
                    <CustomLink href="/about" title="About" className='mx-4'/>
                    <CustomLink href="/projects" title="Projects" className='mx-4'/>
                    <CustomLink href="/articles" title="Articles" className='ml-4'/>
                </nav>
            
                <button
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className={`ml-6 max-w-[6vw] flex items-center justify-center rounded-full p-1
                ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                >
                {
                    mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
                }
                </button>
            </div>

            

            {
                isOpen ?

                <motion.div 
                initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}}
                animate={{scale:1, opacity:1, }}
                className='min-w-[70vw] flex text-center justify-center item-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                    <nav className='flex item-center flex-col justify-center'>
                        <CustomMobileLink href="/" title="Home" className=''toggle={handleClick}/>
                        <CustomMobileLink href="/about" title="About" className=''toggle={handleClick}/>
                        <CustomMobileLink href="/projects" title="Projects" className=''toggle={handleClick}/>
                        <CustomMobileLink href="/articles" title="Articles" className=''toggle={handleClick}/>
                        <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`max-w-[6vw] mr-auto ml-auto items-center  justify-center rounded-full p-1 mt-2

                        ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
                        >
                        {
                            mode === "dark" ? <SunIcon className={"fill-dark"}/> : <MoonIcon className={"fill-dark"}/>
                        }
                        </button>
                    </nav>
                    
                    
                </motion.div>

                : null
            }
             
            

            <div className='px-10'>
                <Logo />
            </div>
        </header>
    )
}

export default NavBar