import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink, TwoImg, VedioMP4 } from '../app/components/ArticleLayOut'


const LocomotionControllerOfA1QuadrupedalRobotUsingMPC = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='Locomotion Controller of A1 Quadrupedal Robot using MPC' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

        <div className='w-full px-40 md:px-10'>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Locomotion Control Strategy</h2>

            <Paragraph
            text="First defined the gait pattern for walking and used a gait scheduler to generate the reference trajectory. The reference trajectory includes COM positon, velocity, angular velocity and euler angle. To follow the preplanned treajectory, we need two different controllers for the stance legs and the swing legs." />

            <ul 
            style={{listStyleType: "disc"}} className='px-10 text-lg dark:text-light md:text-base'>
                <li className='py-2'>
                    <b className='text-primary dark:text-primaryBlueLight'>
                        Stance legs : Linear MPC controller</b>
                </li>

                <li className='py-2'>
                    <b className='text-primaryRed dark:text-pink-400'>
                        Swing legs : Raibert controller</b>
                </li>
            </ul>


            
            <Paragraph
            text="To be more specific, for stance leg, a linear MPC controller was used to find the contact force needed to follow the desired trajectory, then a transformation formula of contact force and torque was used to convert contact force
            command to motor torque command." />
            
            <Paragraph 
            text="For the swing leg, a raibert controller was implemented to
            generate torque needed for following the desired trajectory."/>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Simulated Experiment</h2>

            <Paragraph 
            text="Used python to simulate the performance of the controller."/>

            <VedioMP4
            mp4='/Quadrupedal/quadrupedal_walking.mp4'
            width='100vw'
            caption='A1 walking demo'
            />

            <Paragraph 
            text="To check the stability of the controller, I tested a strategy that the x-axis velocity reference will increase when the robot finds that it is walking too slowly, and the controller handles the changing of the velocity from 0.5 to 2.0 pretty well!."/>

            <VedioMP4
            mp4='/Quadrupedal/quadrupedal_walking_changeSpeed.mp4'
            width='100vw'
            caption='Change Speed while walking'
            />

            <TwoImg
                img1='/Quadrupedal/slow_to_fast_velocity.png'
                img2='/Quadrupedal/slow_to_fast_torque.png'
                width='800'
                caption='x-axis velocity & rear left calf pitch torque V.s time'
            />

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Reference</h2>

            <ul 
            style={{listStyleType: "decimal"}} className='px-10 text-base dark:text-light md:!text-sm text-dark/75
            dark:text-light/75'>
                <li className='py-2'>
                    J. Di Carlo, P. M. Wensing, B. Katz, G. Bledt, and S. Kim, “Dynamic locomotion in the mit cheetah 3 through convex model-predictive control,” in 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2018, pp. 1–9
                </li>

                <li className='py-2'>
                    D. Kim, J. Di Carlo, B. Katz, G. Bledt, and S. Kim, “Highly dynamic quadruped locomotion via whole-body impulse
control and model predictive control,” arXiv preprint arXiv:1909.06586, 2019
                </li>

                <li className='py-2'>
                    Bledt, G., Wensing, P. M., Ingersoll, S., & Kim, S. (Year). Contact Model Fusion for Event-Based Locomotion in
Unstructured Terrains. IEEE Transactions on Robotics, 37(3), 736-749
                </li>

                <li className='py-2'>
                    H. Park, S. Kim, M. DiCicco and S. Kim, "High speed trot-running: Implementation of a hierarchical controller
using proprioceptive impedance control on the MIT Cheetah," IEEE Robotics and Automation Letters, vol. 3, no.
3, pp. 2346-2353, 2018, doi: 10.1109/LRA.2018.2802445
                </li>

                <li className='py-2'>
                    P. M. Wensing, G. Bledt, S. Ingersoll and S. Kim, "Contact Model Fusion for Event-Based Locomotion in
Unstructured Terrains," in IEEE Robotics and Automation Letters, vol. 2, no. 2, pp. 916-923, April 2017, doi:
10.1109/LRA.2016.2638036
                </li>

                {/* <li className='py-2'>
                    Fast and Efficient Locomotion via Learned Gait Transitions 
                    <Link href="https://github.com/yxyang/fast_and_efficient" target='_blank'
                    className='hover:underline underline-offset-2 text-primary font-bold text-xs'>
                        &nbsp;Vist Website &rarr;
                        </Link>
                </li>

                <li className='py-2'>
                Motion Imitation
                    <Link href="https://github.com/erwincoumans/motion_imitation/tree/master/mpc_controller" target='_blank'
                    className='hover:underline underline-offset-2 text-primary font-bold text-xs'>
                        &nbsp;Vist Website &rarr;
                        </Link>
                </li> */}
            </ul>
          </div>
        </Layout>
      </main>
    )
}

export default LocomotionControllerOfA1QuadrupedalRobotUsingMPC
