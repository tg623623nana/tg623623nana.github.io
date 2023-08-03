"use client";

import Image from 'next/image'
import NavBar from './components/NavBar'
import {Montserrat} from "next/font/google"
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import { LinkArrow, LinkedInIcon, GithubIcon, EmailIcon } from './components/icons'
import { Inter } from 'next/font/google'
import {motion} from "framer-motion"
import Footer from './components/Footer'
import HomePageLayout from './components/HomePageLayout'
import TransitionEffect from './components/TransitionEffect'
import Head from 'next/head'

const MotionLink = motion(Link);
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  
  return (
    <>
    <Head>
        <title>Pin Yun Hung | Home </title>
        <meta name="home" content="Pin Yun Hung's portfolio" />
    </Head>
    <main className='dark:bg-dark dark:text-light'>
      <TransitionEffect />
      <HomePageLayout className='pt-0 md:p-16 sm:pt-8 lg:flex-col'>
    <div className='flex flex-col items-center justify-between mb-10 '>
      <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex ">
        <NavBar />
      </div>
    </div>

    <div className='flex min-h-screen flex-col items-center justify-between px-10 py-5 lg:flex-col'>
      
      <div className="flex place-items-center before:absolute lg:flex-col md:w-full">
        
        <Image
          className="w-[35%] h-auto relative rounded-lg border-2 border-dark dark:border-light p-2 ml-auto mr-10
          lg:hidden md:inline-block md:w-full"
          src="/home-img6.jpg"
          alt="Next.js Logo"
          width="0"
          height="0"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
        
        <div className='mr-auto flex flex-col item-center self-center lg:w-full'>
          <AnimatedText text="Pin Yun Hung" className='!text-8xl xl:text-5xl lg:text-center lg:!text-7xl md:!text-5xl sm:!text-4xl sm:pt-4'/>

          <div className='flex items-center self-center justify-center mt-6 
          lg:self-center'>
              
              <Link href="/Resume_PinYunHung.pdf" target={"_blank"} 
              className='flex items-center bg-dark dark:bg-light text-light dark:text-dark
              p-2.5 px-6
              rounded-lg text-lg font-semibold  hover:bg-primary hover:text-light
              border-2 border-solid border-transparent hover:border-dark
              hover:dark:bg-primary hover:dark:border-light hover:dark:text-light
              mt-3 mx-4 ml-auto 
              md:p-2 md:text-sm
              '
              download={false}
              >Resume
              </Link >

              <Link href="mailto:pinyunhung@gmail.com" target={"_blank"}
              className='mt-3 mx-4 text-lg font-bold capitalize 
              text-dark underline w-12 dark:text-light'
              >
                <EmailIcon className={''}/>
              </Link>
              
              <nav className='flex items-center self-center mt-2 '>
                <Link href="https://www.linkedin.com/in/pinyun-hung/" target={"_blank"} className='w-10 mx-3 pt-0'>
                    <LinkedInIcon className={''}/>
                </Link>
                <Link href="https://github.com/tg623623nana" target={"_blank"} className='w-12 ml-3 '
                >
                    <GithubIcon className={''}/>
                </Link>
              </nav>

            </div>
            
            <div className='flex mt-20 justify-center md:flex-col md:mt-10'>
              <MotionLink
                href="/about"
                className="group rounded-lg
                border-2 border-dark px-5 py-4 mr-10 
                dark:bg-light dark:text-dark dark:border-light
                md:mb-6 md:mr-0" 
                rel="noopener noreferrer"
                whileHover={{scale:1.1}}
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  About Me{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 dark:opacity-80`}>
                  Education & Experience
                </p>
              </MotionLink>

              <MotionLink
                href="projects"
                className="group rounded-lg border-2 border-dark px-5 py-4 mr-10
                dark:bg-light dark:text-dark dark:border-light
                md:mr-0" 
                rel="noopener noreferrer"
                whileHover={{scale:1.1}}
              >
                <h2 className={`mb-3 text-2xl font-semibold`}>
                  Porjects{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50 dark:opacity-80`}>
                  Learn what I have Done
                </p>
              </MotionLink>
            </div>
          </div>
      </div>
    </div>

    <Footer />
    </ HomePageLayout>
    </main>
    </>
  )
}
