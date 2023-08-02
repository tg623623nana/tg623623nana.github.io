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


const DistributedMultiAgentsTrajectoryPlanningWithImaginedPotentialGame = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
          <AnimatedText text='Distributed Multi-agents Trajectory Planning with Imagined Potential Game' className='mb-16 !text-6xl'/>

        <div className='w-full px-40'>

            <Paragraph
            text="This project involved implementing potential game theory and an iterative Linear Quadratic Regulator (iLQR) algorithm to address distributed trajectory planning in an interactive model."/>

            <h2 className='text-2xl font-bold mt-10'>Deadlock Occurrence in Narrow-Way Scenarios</h2>

            <Paragraph
            text="In multi-agent narrow-way scenarios, failure to establish communication among agents can lead to deadlocks."/>
          
            <SingleImg
                img="/trajOpt_demo2.gif"
                width="500"
                caption="Deadlock happened in narrow-way interaction scenario"
            />

            <h2 className='text-2xl font-bold mt-10'>Resolving the deadlock</h2>

            <Paragraph
                text="To tackle the deadlock problem, we introduced two crucial concepts:"/>

            <ul 
            style={{listStyleType: "disc"}} className="px-10 text-lg">
                <li className='py-2'>
                    <b className='text-primaryRed'>                potential game theory  </b>
                </li>

                <li className='py-2'>
                    <b className='text-primaryRed'>                safety distance property  </b>
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
