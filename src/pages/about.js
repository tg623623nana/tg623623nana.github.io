import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Image from 'next/image'
import aboutMeImg from '../../public/images/profile/home-img4.jpg'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import { images } from '../../next.config'


const about = () => {
    return (
        <>
            <Head>
                <title>CodeBucks | About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='py-2 backy'>
            <AnimatedText text='About Me' className='mb-16 !text-6xl'/>
            <div className='grid w-full grid-cols-5 gap-16'>
                <div className='col-span-3 flex flex-col items-start justify-start'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                    <p className='my-2 font-medium'>
                        I am a Master’s of Engineering graduate from UC Berkeley in Mechanical Engineering, specializing in robotics and autonomous systems control. 
                    </p>
                    <p className='my-2 font-medium'>
                        During my graduate studies, I conducted research focused on optimal control, motion planning, and state estimation for autonomous vehicles. 
                    </p>
                    <p className='my-2 font-medium'>
                        Previously, I worked as a system engineer at Point Robotics, developing an automated drilling application for surgical robots using trajectory planning and impedance control. 
                    </p>
                    <p className='my-2 font-medium'>
                        My experience in developing surgical robots and implementing collision avoidance strategies drive me to become passionate about creating innovative and cutting-edge autonomous control strategies.
                    </p>

                    <h2 className='my-4 text-lg font-bold uppercase text-dark/75'>Education</h2>
                    <ul 
                    style={{listStyleType: "square"}} class="px-6">
                        <li className='my-2 font-bold'>MEng in Mechanical Engineering, specialized in Control of Robotic and Autonomous Systems, 2023</li>
                            <p>University of California, Berkeley</p>
                        <li className='my-2 font-bold'>B.S. in Mechanical Engineering, 2021</li>
                        <p>National Tsing Hua University, Hsinchu, Taiwan </p>
                    </ul>
                </div>
                    
                <div className='col-span-2 relative h-max border-2 border-solid border-dark bg-dark p-6 rounded-[2rem]
                '>
                    <div className='px-2 py-2 rounded-[2rem] bg-light'>
                        <Image src={aboutMeImg} alt="CodeBucks"
                        className='w-full h-auto rounded-[2rem]'>
                        </Image>

                    </div>
                </div>
            </div>
            <Skills />
            <Experience/>
            </Layout>
            </main>
        </>
    )
}

export default about