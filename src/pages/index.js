import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/home-img6.jpg"
import profilePic2 from "../../public/images/profile/home-img11.jpg"
import homeIcon from "../../public/images/profile/home-icon2.png"

import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/icons'
import {motion} from "framer-motion"
import {LinkedInIcon, GithubIcon} from '../components/icons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen relative'>
        <Layout className='pt-10 backy '>
          <div className='flex items-center justify-between w-full'>
            
            {/* <div>
              <Image src={profilePic2} alt="CodeBucks" fill
              style={{objectFit:"cover"}}
              className=''></Image>
            </div> */}

            <div className='w-1/2 relative'>
              <Image src={profilePic} alt="CodeBucks" 
              style={{margin:"30px auto 0 auto", width:500}}
              className='w-full h-auto rounded-lg'></Image>
            </div>

            <div className='w-1/2 flex flex-col items-center self-center relative'>
              <AnimatedText text="Pin Yun Hung" className='!text-8xl'/>
              
              <p className='my-4 text-base font-medium'>
              </p>

              <div className='flex items-center self-center mt-2'>
                <Link href="/dummy.pdf" target={"_blank"} 
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                '
                download={false}
                >Resume <LinkArrow className={"w-6 ml-1"}/>
                </Link >

                <Link href="mailto:pinyunhung@gmail.com" target={"_blank"}
                className='mx-4 text-lg font-bold capitalize text-dark underline'
                >Contact
                </Link>
                
                <Link href="https://www.linkedin.com/in/pinyun-hung/" target={"_blank"} className='w-10 mx-3'
                >
                    <LinkedInIcon />
                </Link>

                <Link href="https://github.com/tg623623nana" target={"_blank"} className='w-12 ml-3'
                >
                    <GithubIcon />
                </Link>

              </div>
            </div>
              
          </div>
        </Layout>
      </main>
    </>
  )
}