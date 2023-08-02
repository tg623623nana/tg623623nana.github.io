import React from 'react'
import Layout from '@/app/components/Layout'
import Image from 'next/image'
import Experience from '@/app/components/Experience'

const about = () => {
    return (
    <main>
        <Layout className='py-2 backy'>
            
            <div className='grid w-full grid-cols-6 gap-16 px-24 '>
                
                <div className='col-span-4 flex flex-col items-start justify-start text-lg'>
                    <h1 className='w-full pt-4 pb-10 flex items-center justify-center text-center text-4xl font-bold'>About Me</h1>
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

                    <div>
                        <h2 className='my-4 text-lg font-bold uppercase text-dark/75'>Education</h2>
                            <ul 
                            style={{listStyleType: "square"}} className="px-6">
                                <li className='font-bold'>MEng in Mechanical Engineering, </li>
                                    <p className='pt-0 pb-2 font-bold'>specialized in Control of Robotic and Autonomous Systems, 2023</p>
                                    <p>University of California, Berkeley</p>
                                <li className='my-2 font-bold'>B.S. in Mechanical Engineering, 2021</li>
                                <p>National Tsing Hua University, Hsinchu, Taiwan </p>
                            </ul>
                    </div>
                </div>

                <div className='my-24 col-span-2 relative h-max 
                border border-solid border-dark bg-dark p-3 rounded-[2rem]
                '>
                    <div className='px-2 py-2 rounded-[2rem] bg-light'>
                    <Image
                        className="relative rounded-lg"
                        src="/home-img8.jpg"
                        alt="Next.js Logo"
                        width={500}
                        height={300}
                        priority
                        />

                    </div>
                </div>
                
            </div>

            

            <Experience />
        </Layout>
    </main>
    )
}

export default about