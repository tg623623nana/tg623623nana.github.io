"use client";

import React, {useRef} from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import {motion, useMotionValue} from "framer-motion"

const FramerImage = motion(Image)

const MovingImg = ({title, img, link}) => {

  return (
    <Link href={link} target='_blank'>

      <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>

      <Image 
      src={img}
      alt={title}
      width={500}
      height={100}
      priority
      className="z-10 w-96 h-auto hidden absolute rounded-lg"
      
      />
    
    </Link>

  )
}

const Article = ({img, title, date, link}) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y:0, transition:{duration:0.5}, ease:"easeInOut"}}
    viewport={{once: true}}
    className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark'>
      <MovingImg title={title} img={img} link={link}/>
      <span className='text-primary font-semibold pl-4'>{date}</span>
    </motion.li>
  )
}

const FeaturedArticle = ({img, title, summary, link}) => {
  return (
    <li className='col-span-1 w-full p-4 bg-light 
    border border-solid border-dark rounded-2xl'>
      <Link href={link} target='_blank'
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
      
      <Link href={link} target='_blank'>
        <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
    </li>
  )
}


const articles = () => {
  return (
    <main>
      <Layout className='py-2'>
        <AnimatedText text='Articles' className='mb-16 !text-6xl'/>
        <ul className='grid grid-cols-2 gap-16'>
          <FeaturedArticle 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/home-img4.jpg"
            link="/"
          />

          <FeaturedArticle 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/home-img6.jpg"
            link="/"
          />
        </ul>
        <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>

        <ul>
          <Article 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            img="/home-img4.jpg"
            date="July 15. 2023"
            link="/"
          />
          <Article 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            img="/home-img4.jpg"
            date="July 15. 2023"
            link="/"
          />
          <Article 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            img="/home-img4.jpg"
            date="July 15. 2023"
            link="/"
          />
          <Article 
            title="Vehicle Motion Planning with Obstacles Avoidance using MPC"
            img="/home-img4.jpg"
            date="July 15. 2023"
            link="/"
          />
          
        </ul>
      </Layout>
    </main>
  )
}

export default articles
