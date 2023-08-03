import React, { Component } from 'react'
import '../globals.css'
import {Montserrat} from "next/font/google"
import NavBar from './NavBar'
import Footer from './Footer'

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-inter"
  })

const Layout = ({children, className=""}) => {
    return (
        <main className='dark:bg-dark'>
        <div className='flex flex-col items-center justify-between pt-10'>
            <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex">
                    <NavBar />
                </div>
        </div>
        <div className='flex flex-col items-center justify-between pt-1'>
            <div className='flex flex-col pt-10 w-full max-w-6xl mr-auto ml-auto'>
                {children}
            </div>
        </div>
        <Footer />
        </main>
    )
}

export default Layout


{/* <main>
    <div className='flex flex-col items-center justify-between pt-10 mb-10'>
        <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex ">
                <NavBar />
            </div>
    </div>
    <div className='flex flex-col items-center justify-between pt-1 dark:bg-dark'>
        <div className=' dark:bg-dark'>
            <div className='flex flex-col pt-10 w-[80%] mr-auto ml-auto'>
                {children}
            </div>
        </div>
    </div>
    </main> */}