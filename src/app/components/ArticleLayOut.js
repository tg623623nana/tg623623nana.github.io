import * as React from "react";
import { GithubIcon } from '@/app/components/icons'
import Link from 'next/link'
import Image from 'next/image'

export const SingleImg = ({img, width, caption}) => {
    return (
      <article>
        <div className='w-full flex items-center justify-center mt-10'>
          
          <Image
            className="relative rounded-lg  bg-light dark:bg-light"
            src={img}
            alt={caption}
            width={width}
            height={300}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </div>
      <p className='w-full items-center text-center justify-center text-primaryDark 
      dark:text-primaryLight pt-2
      font-semibold mb-10 px-24'>{caption}</p>
      </article>
  
    )
}
  
export const TwoImg = ({img1, img2, width, caption}) => {
    return (
      <article>
        <div className='flex container content-center items-center justify-center gap-10'>
          <div className='w-1/2'>
            <Image
              className="w-full rounded-lg  bg-light dark:bg-light"
              src={img1}
              alt="Next.js Logo"
              width={width}
              height={300}
              priority
            />
          </div>
  
          <div className='w-1/2'>
            <Image
              className="w-full rounded-lg  bg-light dark:bg-light mt-4"
              src={img2}
              alt="Next.js Logo"
              width={width}
              height={300}
              priority
            />
          </div>
        </div>
      <p className='items-center text-center justify-center text-primaryDark 
      dark:text-primaryLight pt-2 font-semibold text-lg mb-10'>{caption}</p>
      </article>
    )
}
  
export const Paragraph = ({text}) => {
    return (
      <p className='my-4 text-lg dark:text-light md:text-base'>
        {text}
      </p>
    )
}
  
export  const GithubProjectLink = ({github}) => {
    return (
      <div className='w-full mb-6 flex items-center justify-center text-dark dark:text-light'>
        <Link href={github} target='_blank' className='w-16 lg:w-12 md:w-10'> <GithubIcon /></Link>
      </div>
    )
}