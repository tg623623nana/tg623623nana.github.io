import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full
        border-t-2 border-solid boder-dark 
        flex flex-col mt-10'>
            <div className='py-8 flex items-center justify-evenly dark:bg-dark
            sm:text-base'>
                <div className='flex items-center dark:text-light'>
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.&nbsp;</span>
                    Build by&nbsp;
                    <Link href="/" className='underline 
                    underline-offset-2' target={"_blank"}
                    >
                        Pin Yun Hung
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer