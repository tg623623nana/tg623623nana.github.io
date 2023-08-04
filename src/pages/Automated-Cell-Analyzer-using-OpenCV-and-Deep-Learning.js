import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink, TwoImg, VedioMP4 } from '../app/components/ArticleLayOut'

const AutomatedCellAnalyzerUsingOpenCVAndDeepLearning = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='Automated Cell Analyzer using OpenCV and Deep Learning' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

          <GithubProjectLink github="https://github.com/tg623623nana"/>

        <div className='w-full px-40 md:px-10'>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Cell Image Processing</h2>

            <Paragraph
            text="First turn the color to gray, and filter the image."/>

            <TwoImg
                img1="/AutoCell/cell_org.png"
                img2="/AutoCell/cell_gray.png"
                width="800"
                caption="Color to Gray"
            />

            <TwoImg
                img1="/AutoCell/cell_blur1.png"
                img2="/AutoCell/cell_blur2.png"
                width="500"
                caption="Result of different filter"
            />

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Recognition Method</h2>

            <Paragraph
            text="We identify the cell with different methods based on the case and user can choose the best method for the image based on the preview."/>

            <ul 
                style={{listStyleType: "disc"}} className="px-10 text-lg dark:text-light md:text-base">
                    <li className='py-2'>
                        <b className='text-primary dark:text-primaryBlueLight'>
                           Case 1 : Cells have no overlap</b>

                           <SingleImg
                                img="/AutoCell/recognition_method3.png"
                                width="500"
                                caption=""
                            />
                    </li>


                    <li className='py-2'>
                        <b className='text-primaryRed dark:text-pink-400'>
                            Case 2 : Cells have overlap & edge is continuous.</b>
                            
                            <SingleImg
                                img="/AutoCell/recognition_method1.png"
                                width="500"
                                caption="Simple recognition"
                            />

                            <SingleImg
                                img="/AutoCell/recognition_method2.png"
                                width="500"
                                caption="Advanced recognition"
                            />
                    </li>
            </ul>

            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Result</h2>

            <SingleImg
                img="/AutoCell/cell_count.png"
                width="500"
                caption=""
            />

            <SingleImg
                img="/AutoCell/bright_cell.png"
                width="500"
                caption=""
            />


            <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Human Robot Interface</h2>

            <Paragraph
            text="We have developed a human-robot-interface and install it on the raspberry Pi, this is for devoping a cell analysis device for people to easy use at home."/>

            <SingleImg
                img="/AutoCell/AutoCell_interface.png"
                width="500"
                caption="The recognition page in the interface"
            />

            <SingleImg
                img="/AutoCell/AutoCell_interface_result.png"
                width="500"
                caption="The interface will show the size and number of the cell after anaylsis"
            />

            
          </div>
        </Layout>
      </main>
    )
}

export default AutomatedCellAnalyzerUsingOpenCVAndDeepLearning
