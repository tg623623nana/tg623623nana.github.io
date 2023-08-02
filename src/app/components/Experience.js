import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null)

    return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
    items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2x1'>{position}&nbsp;
                <a href={companyLink}
                target="_blank"
                className='text-primary capitalize'
                >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75'>
                {time} | {address}
            </span>
            <div className='font-medium w-full'>
                {work}
            </div>
        </motion.div>
    </li>
    )
}


const Experience = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    ) 

    return (
        <div className='my-20'>
            <h2 className='font-bold text-6xl mb-32 w-full text-center'>
            Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div 
                style={{scaleY: scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top'/>

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                        position="System engineer (Control & Robotics)"
                        company="Point Robotics MedTech"
                        companyLink="https://www.pointroboticsinc.com/en"
                        time="2021-2022"
                        address="NTPC, Taiwan"
                        work={
                            <ul 
                            style={{listStyleType: "square"}} className="px-6">
                                Point Robotics is a startupm=, building surgical robots to save doctor’s operating time of spinal decompression in minimally invasive procedures. I was responsible for developing autonomous drilling and milling control systems for surgical robotics, integrating navigation system, force sensors, planning, and control.
                                <li className='my-2 font-medium'>Designed a danger detection algorithm that enables the robot to identify possible penetration while drilling and stop immediately.</li>
                                <li className='my-2 font-medium'> Developed a stiffness-based fuzzy controller for milling, successfully cleaning the given range and stopping with 2mm thick bone left.</li>
                                <li className='my-2 font-medium'>  Lead the development of the autonomous system, which transforms the robot system from a collaborative to fully automatic</li>
                            </ul>}
                    />
                    
                    <Details 
                        position="Teaching Assistant in Control system and Engineering Mathematic"
                        company="National Tsing Hua University"
                        companyLink="https://nthu-en.site.nthu.edu.tw/"
                        time="2020-2021"
                        address="NTPC, Taiwan"
                        work={<ul style={{listStyleType: "square"}} className="px-6">
                            <li className='my-2 font-medium'>Prepared academic material on Classical Control and Numerical Analysis.</li>
                            <li className='my-2 font-medium'>B.S. in Mechanical Engineering, 2021</li>
                        </ul>}
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience