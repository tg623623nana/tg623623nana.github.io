"use client";

import React, {useRef} from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import {motion, useMotionValue} from "framer-motion"
import TransitionEffect from '@/app/components/TransitionEffect'

const FramerImage = motion(Image)

const MovingImg = ({title, img, link, summary}) => {

  return (
    <Link href={link}> 
        <div className='grid grid-cols-8 gap-16 
        xl:gap-x-16 lg:gap-x-6 md:gap-y-10 sm:gap-x-0'>

          <div className='col-span-6 px-6 dark:text-light lg:col-span-8'>
            <h2 className='capitalize text-2xl mt-8 mb-2 font-semibold hover:underline 
            md:text-lg md:mt-0'>{title}</h2>
            <p className='text-sm mt-4 '>{summary}</p>
          </div>

          <Image 
            src={img}
            alt={title}
            width={300}
            height={100}
            priority
            className="col-span-2 w-full rounded-lg lg:hidden"
          />
        </div>
    </Link>
  )
}

const Article = ({img, title, date, link, summary}) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5}, ease:"easeInOut"}}
    viewport={{once: true}}
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light  text-dark first:mt-0 border border-solid border-dark
    dark:bg-dark dark:border-light
    md:px-2'>
      <MovingImg title={title} img={img} link={link} date={date} summary={summary}/>
    </motion.li>
  )
}

const FeaturedArticle = ({img, title, summary, link}) => {
  return (
    <li className='col-span-1 w-full p-4 bg-primaryLight 
    border border-solid border-dark rounded-2xl'>
      <Link href={link}
      className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
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
      
      <Link href={link}>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
      </Link>
    </li>
  )
}


const articles = () => {
  return (
    <main>
      {/* <TransitionEffect /> */}
      <Layout className='py-2'>
        <AnimatedText text='Articles' className='mb-16 !text-6xl
        lg:!text-5xl md:!text-5xl sm:!text-4xl sm:pt-4 md:mb-10'/>
        {/* <ul className='grid grid-cols-2 gap-16'>
          <FeaturedArticle 
            title="Distributed Multi-agent Interaction Modeling without Communication using Games and iLQR"
            summary="Distributed trajectory optimization with imagined potential game and iLQR, modeling the interaction model in intelligent traffic, and solving the deadlock problem."
            img="/trajOpt_demo1.png"
            link="/Distributed-Multi-agents-Trajectory-Planning-with-Imagined-Potential-Game"
          />

          <FeaturedArticle 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/OBCA_demo1.png"
            link="/Vehicle-Motion-Planning-with-Obstacles-Avoidance-using-MPC"
          />
        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2> */}

        <ul className='md:flex md:flex-col md:mx-8'>
          <Article 
            title="Distributed Multi-agent Interaction Modeling without Communication using Games and iLQR"
            img="/trajOpt_demo1.png"
            link="/Distributed-Multi-agents-Trajectory-Planning-with-Imagined-Potential-Game"
            summary="Distributed trajectory optimization with imagined potential game and iLQR, modeling the interaction model in intelligent traffic, and solving the deadlock problem."
          />
          <Article 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            img="/OBCA_demo1.png"
            link="/Vehicle-Motion-Planning-with-Obstacles-Avoidance-using-MPC"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
          />
          <Article 
            title="Self-driving Navigation and Control using ROS"
            img="/home-img4.jpg"
            link="/"
            summary=""
          />
          <Article 
            title="IMU signal-processing anaylsis"
            img="/home-img4.jpg"
            link="/"
            summary=""
          />
          
        </ul>
      </Layout>
    </main>
  )
}

export default articles
