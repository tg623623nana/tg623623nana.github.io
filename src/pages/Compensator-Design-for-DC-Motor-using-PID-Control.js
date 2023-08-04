import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink, TwoImg, VedioMP4 } from '../app/components/ArticleLayOut'


const CompensatorDesignForDCMotorUsingPIDControl = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='Compensator Design for DC Motor using PID Control' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

        <div className='w-full px-40 md:px-10'>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Design I － Full-state feedback controller</h2>

            <Paragraph
            text="The desig of the full-state feedback controller is as following : "/>

            <SingleImg
                img="/StepporMotor/full_state_feedback_controller_ss.png"
                
                width="300"
                caption="Equation"
            />

            <SingleImg
                img="/StepporMotor/full_state_feedback_controller_blockDiagram.png"
                width="800"
                caption="Block Diagram"
            />

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Design II － Dynamic compensator</h2>

            <Paragraph
            text="In this controller design, since we want the reference input only related to the tracking error, which means the control input only based on the error, so we choose the ''Tracking-error Estimator' Method."/>

            <SingleImg
                img="/StepporMotor/dynamic_compensator_blockDiagram.png"
                width="800"
                caption="Block Diagram"
            />

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Result</h2>

            <Paragraph
            text="Test the step response of the controller using the steppor motor."/>
            

            <TwoImg
                img1="/StepporMotor/Motor_control_result1.png"
                img2="/StepporMotor/Motor_control_img1.png"
                width="800"
                caption="Test Result"
            />

            <Paragraph
            text="Below is the comparison of the performance between simulation and real test. From left to right: Plant (Simulation), Compensator (Simulation), Compensator(Real)"/>

            <SingleImg
                img="/StepporMotor/comparison.png"
                width="800"
                caption="Comparison of the performance"
            />

            
            
            
          </div>
        </Layout>
      </main>
    )
}

export default CompensatorDesignForDCMotorUsingPIDControl
