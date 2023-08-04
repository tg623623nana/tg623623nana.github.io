import React from 'react'


const Skills = ({children, className=""}) => {
    return (
        <div className='my-20'>
            <h2 className='font-bold text-6xl mb-20 w-full text-center 
            xl:text-5xl  lg:text-5xl sm:text-4xl
            md:mb-10'>
            Skills
            </h2>

            <div className='max-w-3xl flex flex-col container content-center gap-10 ml-auto mr-auto lg:px-10'>
                <div className='border-2 border-solid p-8 rounded-lg'>
                    <h3 className='text-center font-bold text-2xl mb-6 underline underline-offset-4'> SoftWare</h3>
                    <div className='flex container content-center justify-center gap-10 md:flex-col md:text-center md:gap-0'>
                        <ul className='flex-col px-10 gap-10 text-lg'>
                            <li className='p-1'>C / C++</li>
                            <li className='p-1'>Python</li>
                            <li className='p-1'>JavaScript</li>
                        </ul>
                        <ul className='flex-col gap-10 text-lg'>
                            <li className='p-1'>ROS</li>
                            <li className='p-1'>Git</li>
                            <li className='p-1'>Linux</li>
                        </ul>
                        <ul className='flex-col gap-10 text-lg'>
                            <li className='p-1'>MATLAB & Simulink</li>
                            <li className='p-1'>AutoCAD</li>
                            <li className='p-1'>LabVIEW</li>
                        </ul>

                    </div>
                </div>

                <div className='border-2 border-solid p-8 rounded-lg'>
                    <h3 className='text-center font-bold text-2xl mb-6 underline underline-offset-4'> Technical Knowledge</h3>
                    <div className='flex container content-center justify-center gap-10 md:flex-col md:text-center md:gap-0'>
                        <ul className='flex-col px-10 gap-10 text-lg'>
                            <li className='p-1'>Classic Control</li>
                            <li className='p-1'>Optimal Control</li>
                            <li className='p-1'>Impedance Control</li>
                            <li className='p-1'>Fuzzy Control</li>
                            <li className='p-1'>State Estimation</li>
                        </ul>

                        <ul className='flex-col gap-10 text-lg'>
                            <li className='p-1'>Path Planning</li>
                            <li className='p-1'>Motion Planning</li>
                            <li className='p-1'>Trajectory Optimization</li>
                            <li className='p-1'>Behavior Tree</li>
                        </ul>

                        <ul className='flex-col gap-10 text-lg'>
                            <li className='p-1'>Kinematics</li>
                            <li className='p-1'>Dynamics</li>
                            <li className='p-1'>Machine Learning</li>
                            <li className='p-1'>Deep Learning</li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
