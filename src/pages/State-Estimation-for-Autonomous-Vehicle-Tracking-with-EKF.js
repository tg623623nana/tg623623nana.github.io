import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink, TwoImg } from '../app/components/ArticleLayOut'

const StateEstimationForAutonomousVehicleTrackingWithEKF = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='State Estimation for Autonomous Vehicle Tracking with EKF' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

          <GithubProjectLink github="https://github.com/tg623623nana"/>

        <div className='w-full px-40 md:px-10'>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Simulation v.s Real Word Implementation</h2>

            <Paragraph
            text="In the simulation, we validated that EKF can give a more precise estimation than measurement, which shows by the compared of green measured position, red EKF estimated position and blue real position"/>

            <SingleImg
                img="/EKF/EKF_img1.png"
                width="800"
                caption="simulation v.s real word"
            />

            <SingleImg
                img="/EKF/mpudata_circle_500dps_340deg_20230430_ekf_comparison.png"
                width="800"
                caption="Real vehicle test : mesurement v.s estimation"
            />

            <SingleImg
                img="/EKF/mpudata_circle_500dps_340deg_20230430_xypath.png"
                width="800"
                caption="Real vehicle test : xy path"
            />
            
          </div>
        </Layout>
      </main>
    )
}

export default StateEstimationForAutonomousVehicleTrackingWithEKF
