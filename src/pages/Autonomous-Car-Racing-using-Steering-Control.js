import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink } from '../app/components/ArticleLayOut'

const AutonomousCarRacingUsingSteeringControl = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='Autonomous Car Racing using Steering Control' 
          className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

        <div className='w-full px-40 md:px-10'>

            <Paragraph
            text="Implemented steering control with a look-ahead point, using feadforward + feedback control to control the car to avoid osillation"/>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Race line computation</h2>

            <Paragraph
            text="Used Model Predictive Control (MPC) to compute the race line. The car model is using dynamic vehicle model so the lateral force is considering in the optimization,"/>

            <Paragraph
            text="Simulated with Docker, and got the result as the following picture: "/>


            <SingleImg
                img="/BARC_raceline.jpg"
                width="800"
                caption="Race line computed by time optimal MPC"
            />

            
            
          </div>
        </Layout>
      </main>
    )
}

export default AutonomousCarRacingUsingSteeringControl
