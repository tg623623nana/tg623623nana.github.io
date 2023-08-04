import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink, TwoImg, VedioMP4 } from '../app/components/ArticleLayOut'

const BalanceControllerOfAgilityRoboticsCassie = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='Balance Controller of Agility Robotics’ Cassie' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

        <div className='w-full px-40 md:px-10'>

            <Paragraph
            text="In this project, we used a virtual constraint based controller to control the Agility Robotics to stand stably and handle the disturbance." /> 

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Virtula Constraint Control</h2>

            <Paragraph
            text="The controller is based on the paper, ''Feedback Control of a Cassie Bipedal Robot: Walking, Standing, and Riding a Segway''. " />

            
            <TwoImg
                img1="/Cassie/formula_1.jpg"
                img2="/Cassie/formula_2.jpg"
                width="500"
                caption=""
            />
            <TwoImg
                img1="/Cassie/formula_3.jpg"
                img2="/Cassie/formula_4.jpg"
                width="500"
                caption="Virtual Constraint Control Equations"
            />

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Simulated Experiment</h2>

            <Paragraph
            text="The demo is implemented using MATLAB and test the ocntroller ability of balancing robot in two situation" />

            <ul 
              style={{listStyleType: "disc"}} className="px-10 text-lg dark:text-light md:text-base mb-6">
                  <li className='py-2'>
                      <b className='text-primary dark:text-primaryBlueLight'> 
                      Without disturbance</b>
                  </li>

                  <li className='py-2'>
                      <b className='text-primary dark:text-primaryBlueLight '>
                      Given force on x-axis, y-axis, z-axis, roll, pitch and yaw.
                      </b>
                  </li>
            </ul>

            <VedioMP4
              mp4="/Cassie/Figure 5_ Cassie Visualizer (16.1fps) (1.0x) (4.0s) 2023-04-10 23-13-38.mp4"
              width="100vw"
              caption="Cassie Balance Control Demo"
              />

            <TwoImg
                img1="/Cassie/virtual_constraint_torque.png"
                img2="/Cassie/virtual_constraint_com.png"
                width="800"
                caption="Torque & COM vs. Time"
            />

            <TwoImg
                img1="/Cassie/virtual_constraint_xyz.png"
                img2="/Cassie/virtual_constraint_rpy.png"
                width="800"
                caption="Base Transition & Orientation v.s Time"
            />


        <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Reference</h2>

          <ul 
            style={{listStyleType: "decimal"}} className="px-10 text-base dark:text-light md:!text-sm text-dark/75
            dark:text-light/75">
                <li className='py-2'>
                    Feedback Control of a Cassie Bipedal Robot: Walking, Standing, and Riding a Segway
                </li>

                <li className='py-2'>
                    Posture and Balance Control for Biped Robots based on Contact Force Optimization
                </li>

            </ul>
            
            
          </div>
        </Layout>
      </main>
    )
}

export default BalanceControllerOfAgilityRoboticsCassie
