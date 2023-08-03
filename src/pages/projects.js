import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import { GithubIcon } from '@/app/components/icons'
import {motion} from "framer-motion"
import TransitionEffect from '@/app/components/TransitionEffect'
import Head from 'next/head'
import { Project, ProjectLight, ProjectGroupOdd, ProjectGroupEvenRow } from '../app/components/ArticleLayOut'

const FramerImage = motion(Image)

const GithubProjectLink = ({github}) => {
  return (
    <div className='w-full mt-2 flex items-center justify-end text-primaryDark dark:text-light'>
      <Link href={github} target='_blank' className='w-8'> <GithubIcon /></Link>
    </div>
  )
}

const GithubProjectLinkL2D = ({github}) => {
  return (
    <div className='w-full mt-2 flex items-center justify-end text-primaryDark dark:text-light
    md:text-primaryLight md:dark:text-dark'>
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

const GithubProjectLinkD2L = ({github}) => {
  return (
    <div className='w-full mt-2 flex items-center justify-end text-primaryLight
    md:text-primaryDark md:dark:text-light'>
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
            title="Distributed Multi-agent Interaction Modeling without Communication using Imagined Potential Games"
            summary="Proposed an interaction generation framwork for generating interactions under the distributed no-communication setting and solve the deadlock in multi-agent interactive navigation problem."
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

        <ProjectGroupEvenRow
        title1="State Estimation for Autonomous Vehicle Tracking with EKF"
        summary1="Estimated vehicle position and orientation based on just encoder and IMU."
        img1="/EKF/EKF_car.jpg"
        link1="/State-Estimation-for-Autonomous-Vehicle-Tracking-with-EKF"
        github1={<GithubProjectLinkL2D github="/"/>}

        title2="Autonomous Car Racing using Steering Control"
        summary2="Solving dynamic obstacle avoidance problems based on Optimization-based Collision Avoidance (OBCA)."
        img2="/BARC_raceline.jpg"
        link2="/"
        github2=""
        />

        <ProjectGroupOdd
        title1="Locomotion Controller of A1 Quadrupedal Robot using MPC"
        summary1="Locomotion Controller of A1 Quadrupedal Robot using MPC"
        img1="/Locomotion_Control_img1.png"
        link1="/"
        github1=""

        title2="Balance Controller of Agility Robotics’ Cassie"
        summary2="Balance Controller of Agility Robotics’ Cassie"
        img2="/Cassie_img1.png"
        link2="/"
        github2=""
        />    


        <ProjectGroupEvenRow
        title1="Automated Cell Analyzer using OpenCV and Deep Learning"
        summary1="Automated Cell Analyzer using OpenCV and Deep Learning"
        img1="/AutoCell_img1.png"
        link1="/"
        github1={<GithubProjectLink github=""/>}

        title2="Compensator Design for DC Motor using PID Control"
        summary2="Compensator Design for DC Motor using PID Control"
        img2="/Motor_control_img1.png"
        link2="/"
        github2=""
        /> 
        </Layout>
      </main>
      </>
    )
}

export default projects
