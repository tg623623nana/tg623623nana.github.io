import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import Image from 'next/image'
import {motion} from "framer-motion"
import { SingleImg, Paragraph, GithubProjectLink } from '../app/components/ArticleLayOut'

const FramerImage = motion(Image)
/* bg-dark p-1 border border-solid border-dark*/


const DistributedMultiAgentsTrajectoryPlanningWithImaginedPotentialGame = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
          <AnimatedText text='Distributed Multi-agents Trajectory Planning with Imagined Potential Game' 
          className='mb-16 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

        <div className='w-full px-40 md:px-10'>

            <Paragraph
            text="This project involved implementing potential game theory and an iterative Linear Quadratic Regulator (iLQR) algorithm to address distributed trajectory planning in an interactive model."/>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Deadlock Occurrence in Narrow-Way Scenarios</h2>

            <Paragraph
            text="In multi-agent narrow-way scenarios, failure to establish communication among agents can lead to deadlocks."/>
          
            <SingleImg
                img="/trajOpt_demo2.gif"
                width="500"
                caption="Deadlock happened in narrow-way interaction scenario"
            />

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Resolving the deadlock</h2>

            <Paragraph
                text="To tackle the deadlock problem, we introduced two crucial concepts:"/>

            <ul 
            style={{listStyleType: "disc"}} className="px-10 text-lg dark:text-light md:text-base">
                <li className='py-2'>
                    <b className='text-primary dark:text-primaryBlueLight'>                potential game theory  </b>
                </li>

                <li className='py-2'>
                    <b className='text-primaryRed dark:text-primaryBlueLight'>                safety distance property  </b>
                </li>
            </ul>
            

            <SingleImg
              img="/trajOpt_demo1.gif"
              width="500"
              caption="Resolved deadlock"
            />

            <Paragraph
              text="We formulated the trajectory optimization problem as a potential game, where each agent imagines cooperation from others and predicts their trajectories. By solving this problem, we obtained a feasible solution that achieved Nash equilibrium. This means that the solution represents the best strategy for all agents in a non-cooperative situation. Furthermore, by assigning different safety distances to each agent, we could generate diverse behaviors in the interactive model.
              "/>
          </div>
        </Layout>
      </main>
    )
}

export default DistributedMultiAgentsTrajectoryPlanningWithImaginedPotentialGame
