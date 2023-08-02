import React, { Component } from 'react'
import '../globals.css'
import {Montserrat} from "next/font/google"
import NavBar from './NavBar'


const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-inter"
  })

const Layout = ({children, className=""}) => {
    return (
        <>
        <main className='flex flex-col items-center justify-between p-10 backy'>
            <div className="z-10 w-full max-w-5xl items-center justify-end font-mono text-sm lg:flex">
                <NavBar />
            </div>
            <div className='pt-10 w-3/4'>
                {children}
            </div>
        </main>
        </>
    )
}

export default Layout