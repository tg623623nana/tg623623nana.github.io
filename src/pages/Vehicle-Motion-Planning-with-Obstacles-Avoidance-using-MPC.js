import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import { GithubIcon } from '@/app/components/icons'
import {motion} from "framer-motion"

const FramerImage = motion(Image)

const VehicleMotionPlanningWithObstaclesAvoidanceUsingMPC = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
          <AnimatedText text='Vehicle Motion Planning with Obstacles Avoidance using MPC' className='mb-16 !text-6xl'/>

        <div className='flex container content-center'>
        <div>
            <p className='my-2 font-medium'>
              In this project, we implemented the Optimization-based Collision Avoidance (OBCA) algorithm and assumed the existence of a lidar sensor to solve static and dynamic obstacle avoidance problems.
            </p>

            ![Example image](/posts/img/OBCA_demo1.png)

            ![Example image](/posts/img/OBCA_demo1.gif)

            <p className='my-2 font-medium'>
              Our control strategy involved several steps. Firstly, we acquired obstacle information from the sensor and predicted future obstacle movements. Next, we generated a rough trajectory plan using A* to simplify the problem into a trajectory following task and expedite the solving time of OBCA. Finally, we employed OBCA with model predictive control to solve the trajectory following problem and generate obstacle-free trajectories.
            </p>

            <p className='my-2 font-medium'>
              To address feasibility issues caused by short prediction horizons, such as when only predicting five time steps into the future in dynamic obstacle scenarios, we treated the sampling time as an optimization variable. This approach helped us avoid infeasible solutions and reduced computation time.
            </p>

            ![Example image](/posts/img/OBCA_mpc.png)

            <p className='my-2 font-medium'>
              You can find more information about the project here: [Design of Autonomous Delivery Using Time Optimal MPC Controller with Obstacle Avoidance](/posts/attach/ME231_Team9_Project_Technical_Report.pdf)
            </p>
          </div>

            <div>
              <Image
              className="w-full rounded-lg  bg-dark p-1 border border-solid border-dark"
              src="/OBCA_demo2.gif"
              alt="Next.js Logo"
              width={500}
              height={300}
              priority
              />
            </div>

        </div>
        
         {/* <div className='flex items-center justify-center rounded-[1rem]'>
          <Image
              className="relative rounded-lg  bg-dark p-1 border border-solid border-dark"
              src="/OBCA_demo2.gif"
              alt="Next.js Logo"
              width={800}
              height={300}
              priority
              />

          </div>

          <div className='my-24'>
            <p className='my-2 font-medium'>
              In this project, we implemented the Optimization-based Collision Avoidance (OBCA) algorithm and assumed the existence of a lidar sensor to solve static and dynamic obstacle avoidance problems.
            </p>

            ![Example image](/posts/img/OBCA_demo1.png)

            ![Example image](/posts/img/OBCA_demo1.gif)

            <p className='my-2 font-medium'>
              Our control strategy involved several steps. Firstly, we acquired obstacle information from the sensor and predicted future obstacle movements. Next, we generated a rough trajectory plan using A* to simplify the problem into a trajectory following task and expedite the solving time of OBCA. Finally, we employed OBCA with model predictive control to solve the trajectory following problem and generate obstacle-free trajectories.
            </p>

            <p className='my-2 font-medium'>
              To address feasibility issues caused by short prediction horizons, such as when only predicting five time steps into the future in dynamic obstacle scenarios, we treated the sampling time as an optimization variable. This approach helped us avoid infeasible solutions and reduced computation time.
            </p>

            ![Example image](/posts/img/OBCA_mpc.png)

            <p className='my-2 font-medium'>
              You can find more information about the project here: [Design of Autonomous Delivery Using Time Optimal MPC Controller with Obstacle Avoidance](/posts/attach/ME231_Team9_Project_Technical_Report.pdf)
            </p>
          </div> */}
        </Layout>
      </main>
    )
}

export default VehicleMotionPlanningWithObstaclesAvoidanceUsingMPC
