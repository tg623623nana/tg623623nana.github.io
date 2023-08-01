import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full'>
            <Layout className='py-8 flex items-center justify-evenly backy'>
                <div className='flex items-center'>
                    <span>{new Date().getFullYear()} &copy; All Rights Reserved.&nbsp;</span>
                    Build by&nbsp;
                    <Link href="https://tg623623nana.github.io/" className='underline 
                    underline-offset-2' target={"_blank"}
                    >
                        Pin Yun Hung
                    </Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer