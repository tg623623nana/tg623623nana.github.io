import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink } from '../app/components/ArticleLayOut'

const StateEstimationForAutonomousVehicleTrackingWithEKF = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='Article Template' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

          <GithubProjectLink github="https://github.com/tg623623nana"/>

        <div className='w-full px-40 md:px-10'>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Section Title</h2>

            <Paragraph
            text="show picute like below here"/>

<ul 
            style={{listStyleType: "disc"}} className="px-10 text-lg dark:text-light md:text-base">
                <li className='py-2'>
                    <b className='text-primary dark:text-primaryBlueLight'>                bullet 1  </b>
                </li>

                <li className='py-2'>
                    <b className='text-primaryRed dark:text-primaryBlueLight'>                bullet 2  </b>
                </li>
            </ul>

            <SingleImg
                img="/home-img8.jpg"
                width="500"
                caption="Picture's Caption"
            />

            
            
          </div>
        </Layout>
      </main>
    )
}

export default StateEstimationForAutonomousVehicleTrackingWithEKF
