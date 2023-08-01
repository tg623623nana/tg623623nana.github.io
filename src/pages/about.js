import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '@/app/components/NavBar'

const about = () => {
    return (
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <NavBar />
      </div>
    )
}

export default about