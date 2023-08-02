import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import { GithubIcon } from '@/app/components/icons'
import {motion} from "framer-motion"

const FramerImage = motion(Image)
/* bg-dark p-1 border border-solid border-dark*/

const SingleImg = ({img, width, caption}) => {
  return (
    <article>
      <div className='w-full flex items-center justify-center mt-10'>
        
        <Image
          className="relative rounded-lg  bg-light"
          src={img}
          alt={caption}
          width={width}
          height={300}
          priority
        />
      </div>
    <p className='w-full items-center text-center justify-center text-primaryDark font-semibold mb-10 px-24'>{caption}</p>
    </article>

  )
}

const TwoImg = ({img1, img2, width, caption}) => {
  return (
    <article>
      <div className='flex container content-center items-center justify-center gap-10'>
        <div className='w-1/2'>
          <Image
            className="w-full rounded-lg  bg-light"
            src={img1}
            alt="Next.js Logo"
            width={width}
            height={300}
            priority
          />
        </div>

        <div className='w-1/2'>
          <Image
            className="w-full rounded-lg  bg-light  mt-4"
            src={img2}
            alt="Next.js Logo"
            width={width}
            height={300}
            priority
          />
        </div>
      </div>
    <p className='items-center text-center justify-center text-primaryDark font-semibold text-lg mb-10'>{caption}</p>
    </article>
  )
}

const Paragraph = ({text}) => {
  return (
    <p className='my-4 text-lg'>
      {text}
    </p>
  )
}

const GithubProjectLink = ({github}) => {
  return (
    <div className='w-full mb-6 flex items-center justify-center text-dark'>
      <Link href={github} target='_blank' className='w-16'> <GithubIcon /></Link>
    </div>
  )
}


const VehicleMotionPlanningWithObstaclesAvoidanceUsingMPC = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
          <AnimatedText text='Vehicle Motion Planning with Obstacles Avoidance using MPC' className='mb-10 !text-6xl'/>

          <GithubProjectLink github="https://github.com/tg623623nana/Vehicle_Motion_Planning_with_Obstacles_Avoidance_using_MPC" />

        <div className='w-full px-40'>

          <Paragraph
            text="In this project, we implemented the Optimization-based Collision Avoidance (OBCA) algorithm and assumed the existence of a lidar sensor to solve static and dynamic obstacle avoidance problems."/>

            <SingleImg
              img="/OBCA_demo2.gif"
              width="800"
              caption="Vehicle can avoid the dynamic obstacle"
            />

            <SingleImg
              img="/OBCA_demo2.png"
              width="500"
              caption="How the planning change when vehicle see a dynmaic obstacle"
            />

            <Paragraph
              text="Our control strategy involved several steps. Firstly, we acquired obstacle information from the sensor and predicted future obstacle movements. Next, we generated a rough trajectory plan using A* to simplify the problem into a trajectory following task and expedite the solving time of OBCA. Finally, we employed OBCA with model predictive control to solve the trajectory following problem and generate obstacle-free trajectories."/>

            <Paragraph
              text="To address feasibility issues caused by short prediction horizons, such as when only predicting five time steps into the future in dynamic obstacle scenarios, we treated the sampling time as an optimization variable. This approach helped us avoid infeasible solutions and reduced computation time."/>

            <SingleImg
              img="/OBCA_mpc.png"
              width="500"
              caption="Control strategy based on optimal-based collision avoidance"
            />


            <Paragraph
              text="You can find more information about the project here:
              "/>

              <Link href="/ME231_Team9_Project_Technical_Report.pdf" 
              target='_blank'
              className='text-primary underline'>Design of Autonomous Delivery Using Time Optimal MPC Controller with Obstacle Avoidance</Link>
          </div>
        </Layout>
      </main>
    )
}

export default VehicleMotionPlanningWithObstaclesAvoidanceUsingMPC
