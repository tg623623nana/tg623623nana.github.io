import Image from 'next/image'
import NavBar from './components/NavBar'
import {Montserrat} from "next/font/google"
import AnimatedText from './components/AnimatedText'
import Link from 'next/link'
import { LinkArrow, LinkedInIcon, GithubIcon } from './components/icons'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <NavBar />
      </div>

      <div className="relative flex place-items-center before:absolute">
        
        <Image
          className="relative rounded-lg"
          src="/home-img6.jpg"
          alt="Next.js Logo"
          width={500}
          height={500}
          priority
        />
        
        <div>
          <AnimatedText text="Pin Yun Hung" className='px-10 !text-8xl'/>

          <div className='flex items-center self-center justify-center mt-6'>
              <Link href="/dummy.pdf" target={"_blank"} 
              className='flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark
              mt-3 mx-4
              '
              download={false}
              >Resume <LinkArrow className={"w-6 ml-1"}/>
              </Link >

              <Link href="mailto:pinyunhung@gmail.com" target={"_blank"}
              className='mt-4 mx-4 text-lg font-bold capitalize text-dark underline'
              >
                <Image
                  className="relative rounded-lg"
                  src="/email-icon.png"
                  alt="Next.js Logo"
                  width={50}
                  height={50}
                  priority
                />
              </Link>
              
              <nav className='flex items-center self-center mt-2'>
                <Link href="https://www.linkedin.com/in/pinyun-hung/" target={"_blank"} className='w-10 mx-3 pt-1'>
                    <LinkedInIcon />
                </Link>
                <Link href="https://github.com/tg623623nana" target={"_blank"} className='w-12 ml-3'
                >
                    <GithubIcon />
                </Link>
              </nav>

            </div>
          </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/posts/about"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
