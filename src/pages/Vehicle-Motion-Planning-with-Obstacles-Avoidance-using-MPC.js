import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'

import {motion} from "framer-motion"
import { SingleImg, Paragraph, GithubProjectLink } from '../app/components/ArticleLayOut'

const FramerImage = motion(Image)
/* bg-dark p-1 border border-solid border-dark*/


const VehicleMotionPlanningWithObstaclesAvoidanceUsingMPC = () => {
    return (
      <main className='dark:text-light'>
        <Layout className='py-2 backy'>
          <AnimatedText text='Vehicle Motion Planning with Obstacles Avoidance using MPC' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

          <GithubProjectLink github="https://github.com/tg623623nana/Vehicle_Motion_Planning_with_Obstacles_Avoidance_using_MPC"/>

        <div className='w-full px-40 md:px-10'>

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
              className='text-primary dark:text-primaryBlueLight underline '>Design of Autonomous Delivery Using Time Optimal MPC Controller with Obstacle Avoidance</Link>

              <p className='mb-10'></p>
          </div>
        </Layout>
      </main>
    )
}

export default VehicleMotionPlanningWithObstaclesAvoidanceUsingMPC
