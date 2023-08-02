import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import { GithubIcon } from '@/app/components/icons'
import {motion} from "framer-motion"

const FramerImage = motion(Image)

const FeaturedProject = ({title, summary, img, link, github}) => {
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


const Project = ({title, img, link, github}) => {
  return (
    <article className='"w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative'>
      <Link href={link} target='_blank'
      className='w-full cursor-pointer overflow-hidden rounded-lg'
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

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <Link href={link} target='_blank'
        className='hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
        </Link>
        
        <div className='w-full mt-2 flex items-center justify-end'>
          <Link href={github} target='_blank' className='w-8'> <GithubIcon /></Link>
        </div>
      </div>

    </article>
  )
}

const projects = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='What I have Done!' className='mb-16 !text-6xl'/>

        <div className='grid grid-col-12 gap-24'>
          <div className='col-span-12'>
            <FeaturedProject 
            title="Vehicle Motion Planning with Obstacles Avoidance"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/home-img4.jpg"
            link="/Vehicle-Motion-Planning-with-Obstacles-Avoidance-using-MPC"
            github="/"
            
            />
          </div>
          <div className='col-span-6'>
            <Project 
            title="Vehicle Motion Planning with Obstacles Avoidance"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/home-img4.jpg"
            link="/"
            github="/"
            />
          </div>
          <div className='col-span-6'>
            <Project 
            title="Vehicle Motion Planning with Obstacles Avoidance"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/home-img4.jpg"
            link="/"
            github="/"
            />
          </div>
        </div>
        </Layout>
      </main>
    )
}

export default projects
