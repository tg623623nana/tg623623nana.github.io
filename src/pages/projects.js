import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import { GithubIcon } from '@/app/components/icons'
import {motion} from "framer-motion"
import TransitionEffect from '@/app/components/TransitionEffect'
import Head from 'next/head'

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


const Project = ({title, summary, img, link, github}) => {
  return (
    <article className='"w-full flex flex-col items-center justify-center rounded-2xl
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
      lg:text-lg md:text-base'>
        <Link href={link}
        className='text-light hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold text-light
          md:text-lg'>{title}</h2>
        </Link>
        <p className='font-medium text-light md:hidden'>{summary}</p>
        {github}
      </div>

    </article>
  )
}

const ProjectLight = ({title, summary, img, link, github}) => {
  return (
    <article className='"w-full flex flex-col items-center justify-center rounded-2xl
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
      lg:text-lg md:text-base'>
        <Link href={link}
        className='text-dark dark:text-light hover:underline underline-offset-2'>
          <h2 className='my-2 w-full text-left text-2xl font-bold text-dark
          dark:text-light
          md:text-lg'>{title}</h2>
        </Link>
        <p className='font-medium text-dark dark:text-light md:hidden'>{summary}</p>
        {github}
      </div>

    </article>
  )
}

const GithubProjectLink = ({github}) => {
  return (
    <div className='w-full mt-2 flex items-center justify-end text-primaryDark dark:text-light'>
      <Link href={github} target='_blank' className='w-8'> <GithubIcon /></Link>
    </div>
  )
}

const GithubProjectLinkLight = ({github}) => {
  return (
    <div className='w-full mt-2 flex items-center justify-end text-primaryLight'>
      <Link href={github} target='_blank' className='w-8'> <GithubIcon /></Link>
    </div>
  )
}


const projects = () => {
    return (
      <>
      <Head>
        <title>Pin Yun Hung | Projects</title>
        <meta name="projects" content="Pin Yun Hung's portfolio" />
      </Head>
      
      <main>
        {/* <TransitionEffect /> */}
        <Layout className='py-2 backy'>
        <AnimatedText text='What I have Done!' className='mb-16 !text-6xl
        lg:!text-5xl md:!text-5xl sm:!text-4xl sm:pt-4'/>

        <div className='flex container content-center
         md:flex-col md:gap-10'>
          <div className='flex w-1/2 px-10 md:w-full md:justify-center'>
            <Project 
            title="Distributed Multi-agents Trajectory Planning with Imagined Potential Game"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/trajOpt_demo1.png"
            link="/Distributed-Multi-agents-Trajectory-Planning-with-Imagined-Potential-Game"
            github={""}
            />
          </div>
          <div className='flex w-1/2 px-10 md:w-full md:justify-center'>
            <ProjectLight 
            title="Vehicle Motion Planning with Obstacles Avoidance"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/OBCA_demo1.png"
            link="/Vehicle-Motion-Planning-with-Obstacles-Avoidance-using-MPC"
            github={<GithubProjectLink github="https://github.com/tg623623nana/Vehicle_Motion_Planning_with_Obstacles_Avoidance_using_MPC" />}
            />
          </div>
        </div>

        <div className='flex container content-center mt-10
        md:flex-col md:gap-10'>
          <div className='flex w-1/2  px-10 md:w-full
          md:order-2 md:justify-center'>
            <ProjectLight 
            title="State Estimation for Autonomous Vehicle Tracking with EKF"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/EKF_car.jpg"
            link="/Vehicle-Motion-Planning-with-Obstacles-Avoidance-using-MPC"
            github={<GithubProjectLink github="/"/>}
            />
          </div>
          <div className='flex w-1/2 px-10 md:w-full
          md:order-1 md:justify-center'>
            <Project
            title="Autonomous Car Racing using Steering Control"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/BARC_raceline.jpg"
            link="/"
            github=""
            />
          </div>
        </div>

        <div className='flex container content-center mt-10
        md:flex-col md:gap-10'>
          <div className='flex w-1/2  px-10 md:w-full  md:justify-center'>
            <Project
            title="Locomotion Controller of A1 Quadrupedal Robot using MPC"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/Locomotion_Control_img1.png"
            link="/Vehicle-Motion-Planning-with-Obstacles-Avoidance-using-MPC"
            github=""
            />
          </div>
          <div className='flex w-1/2 px-10 md:w-full  md:justify-center'>
            <ProjectLight
            title="Balance Controller of Agility Robotics’ Cassie"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/Cassie_img1.png"
            link="/"
            github=""
            />
          </div>
        </div>

        <div className='flex container content-center mt-10
        md:flex-col md:gap-10'>
          <div className='flex w-1/2  px-10 md:w-full
          md:order-2  md:justify-center'>
            <ProjectLight
            title="Automated Cell Analyzer using OpenCV and Deep Learning"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/AutoCell_img1.png"
            link="/Vehicle-Motion-Planning-with-Obstacles-Avoidance-using-MPC"
            github={<GithubProjectLink github=""/>}
            />
          </div>
          <div className='flex w-1/2 px-10 md:w-full
          md:order-1  md:justify-center'>
            <Project
            title="Compensator Design for DC Motor using PID Control"
            summary="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
            img="/Motor_control_img1.png"
            link="/"
            github=""
            />
          </div>
        </div>
        </Layout>
      </main>
      </>
    )
}

export default projects
