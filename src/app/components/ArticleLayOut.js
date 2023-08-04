import * as React from "react";
import { GithubIcon } from '@/app/components/icons'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from "framer-motion"

const FramerImage = motion(Image)


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
        <div className='flex container content-center items-center justify-center gap-2
        md:flex-col'>
          <div className='w-1/2 md:w-full'>
            <Image
              className="w-full rounded-lg  bg-light dark:bg-light"
              src={img1}
              alt="Next.js Logo"
              width={width}
              height={300}
              priority
            />
          </div>
  
          <div className='w-1/2 md:w-full'>
            <Image
              className="w-full rounded-lg  bg-light dark:bg-light"
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
  
export const VedioMP4 = ({mp4, width, caption}) => {
  return (
  <article>
    <video 
        controls 
        src={mp4}
        style={{ width: width}} />

    <p className='w-full items-center text-center justify-center text-primaryDark 
        dark:text-primaryLight pt-2
        font-semibold mb-10 px-24'>{caption}
      </p>
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
  
export const GithubProjectLink = ({github}) => {
    return (
      <div className='w-full mb-6 flex items-center justify-center text-dark dark:text-light'>
        <Link href={github} target='_blank' className='w-16 lg:w-12 md:w-10'> <GithubIcon /></Link>
      </div>
    )
}


export const ProjectDark2Light = ({title, summary, img, link, github}) => {
  return (
    <article className='"w-full flex flex-col items-center justify-start rounded-2xl
    border-2 border-solid border-primaryLight bg-primaryDark
    dark:bg-dark 
    p-6 relative
    md:p-4
    md:bg-primaryLight md:border-primaryDark
    '>
      <Link href={link}
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
      <FramerImage
          className="w-full h-auto rounded-lg"
          src={img}
          alt={title}
          width={500}
          height={100}
          priority
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4
      text-lg lg:text-base'>
        <Link href={link}
        className='text-light hover:underline underline-offset-2
        md:text-dark md:dark:text-light '>
          <h2 className='my-2 w-full text-left text-2xl font-bold text-light 
          lg:text-xl md:text-lg md:text-dark md:dark:text-light'>{title}</h2>
        </Link>
        <p className='font-medium text-light md:hidden'>{summary}</p>
      </div>
      
      <div className="w-full mt-auto">
          {github}
        </div>

    </article>
  )
}

export const ProjectLight2Dark = ({title, summary, img, link, github}) => {
  return (
    <article className='"w-full flex flex-col items-center justify-start rounded-2xl
    border-2 border-solid border-primaryDark bg-primaryLight 
    dark:bg-dark dark:border-primaryDark
    p-6 relative
    md:p-3
    md:bg-primaryDark md:border-primaryLight md:dark:bg-dark'>
      <Link href={link}
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
      <FramerImage
          className="w-full h-auto rounded-lg"
          src={img}
          alt={title}
          width={500}
          height={100}
          priority
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4
      text-lg lg:text-base'>
        <Link href={link}
        className='text-dark dark:text-light hover:underline underline-offset-2
        md:text-light'>
          <h2 className='my-2 w-full text-left text-2xl font-bold text-dark
          dark:text-light
          lg:text-xl md:text-lg md:text-light'>{title}</h2>
        </Link>
        <p className='font-medium text-dark dark:text-light md:hidden'>{summary}</p>
      </div>
      <div className="w-full mt-auto">
          {github}
        </div>

    </article>
  )
}

export const ProjectGroupEvenRow = ({
  title1, summary1, img1, link1, github1, 
  title2, summary2, img2, link2, github2}) => {

  return (
    <div className='flex container content-center mt-10
        md:flex-col md:gap-10'>
          <div className='flex w-1/2  px-10 md:w-full
            md:justify-center'>
            <ProjectLight2Dark 
            title={title1}
            summary={summary1}
            img={img1}
            link={link1}
            github={github1}
            />
          </div>
          <div className='flex w-1/2 px-10 md:w-full
           md:justify-center'>
            <ProjectDark2Light
            title={title2}
            summary={summary2}
            img={img2}
            link={link2}
            github={github2}
            />
          </div>
        </div>
  )

}


export const Project = ({title, summary, img, link, github}) => {
  return (
    <article className='"w-full flex flex-col items-center justify-start rounded-2xl
    border-2 border-solid border-primaryLight bg-primaryDark
    dark:bg-dark
    p-6 relative
    md:p-4
    '>
      <Link href={link}
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
      <FramerImage
          className="w-full h-auto rounded-lg"
          src={img}
          alt={title}
          width={500}
          height={100}
          priority
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4
      text-lg lg:text-base'>
        <Link href={link}
        className='text-light hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold text-light
          lg:text-xl md:text-lg'>{title}</h2>
        </Link>
        <p className='font-medium text-light md:hidden'>{summary}</p>
        
      </div>
      <div className="w-full mt-auto">
          {github}
        </div>

    </article>
  )
}

export const ProjectLight = ({title, summary, img, link, github}) => {
  return (
    <article className='"w-full flex flex-col items-center justify-start rounded-2xl
    border-2 border-solid border-primaryDark bg-primaryLight 
    dark:bg-dark dark:border-primaryDark
    p-6 relative
    md:p-3'>
      <Link href={link}
      className='w-full cursor-pointer overflow-hidden rounded-lg'
      >
      <FramerImage
          className="w-full h-auto rounded-lg"
          src={img}
          alt={title}
          width={500}
          height={100}
          priority
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
        />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4
      text-lg lg:text-base'>
        <Link href={link}
        className='text-dark dark:text-light hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold text-dark
          dark:text-light
          lg:text-xl md:text-lg'>{title}</h2>
        </Link>
        <p className='font-medium text-dark dark:text-light md:hidden'>{summary}</p>
      </div>
        <div className="w-full mt-auto">
          {github}
        </div>

    </article>
  )
}

export const ProjectGroupOdd = (
  {title1, summary1, img1, link1, github1, 
  title2, summary2, img2, link2, github2}) => {
  return (
    <div className='flex container content-center mt-10
        md:flex-col md:gap-10'>
          <div className='flex w-1/2  px-10 md:w-full
            md:justify-center'>
            <Project 
            title={title1}
            summary={summary1}
            img={img1}
            link={link1}
            github={github1}
            />
          </div>
          <div className='flex w-1/2 px-10 md:w-full
           md:justify-center'>
            <ProjectLight
            title={title2}
            summary={summary2}
            img={img2}
            link={link2}
            github={github2}
            />
          </div>
        </div>
  )
}


export const FeaturedProject = ({title, summary, img, link, github}) => {
  return (
    <article className='w-full flex items-center justify-between relative
    rounded-3xl border border-solid border-dark bg-dark p-12'>

      <Link href={link} target='_blank'
      className='w-1/3 cursor-pointer overflow-hidden rounded-lg'
      >
      <FramerImage
          className="w-full h-auto"
          src={img}
          alt={title}
          width={500}
          height={100}
          priority
          whileHover={{scale:1.05}}
          transition={{duration:0.2}}
        />
      </Link>

      <div className='w-2/3 flex flex-col items-start justify-between pl-6'>
        <Link href={link}
        className='text-light hover:underline underline-offset-2'>
          <h2 className='my-4 w-full text-left text-3xl font-bold text-light'>{title}</h2>
        </Link>
        <p className='my-6 font-medium text-light'>{summary}</p>
        
        <div className='w-full mt-6 flex items-center justify-end'>
          <Link href={github} target={"_blank"} 
              className='items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold
              '
              >Vist Project<GithubIcon className={"w-[45%] mx-6"}/>
              </Link >  
        </div>
      </div>
    </article>
  )

}