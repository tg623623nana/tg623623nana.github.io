import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink, TwoImg, VedioMP4 } from '../app/components/ArticleLayOut'

const ArticleTemplate = () => {
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
                    <b className='text-primary dark:text-primaryBlueLight'>
                        Stance legs : Linear MPC controller</b>
                </li>

                <li className='py-2'>
                    <b className='text-primaryRed dark:text-pink-400'>
                        Swing legs : Raibert controller</b>
                </li>
            </ul>

            <SingleImg
                img="/home-img8.jpg"
                width="500"
                caption="Picture's Caption"
            />

            <VedioMP4
              mp4="/Quadrupedal/quadrupedal_walking.mp4"
              width="100vw"
              caption="A1 walking demo"
              />

          <h2 className='text-2xl font-bold mt-10 dark:text-light
            md:text-xl'>Reference</h2>


          <ul 
            style={{listStyleType: "decimal"}} className="px-10 text-base dark:text-light md:!text-sm text-dark/75
            dark:text-light/75">
                <li className='py-2'>
                    J. Di Carlo, P. M. Wensing, B. Katz, G. Bledt, and S. Kim, “Dynamic locomotion in the mit cheetah 3 through convex model-predictive control,” in 2018 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS). IEEE, 2018, pp. 1–9
                </li>

                <li className='py-2'>
                    Fast and Efficient Locomotion via Learned Gait Transitions 
                    <Link href="https://github.com/yxyang/fast_and_efficient" target='_blank'
                    className='hover:underline underline-offset-2 text-primary font-bold text-xs'>
                        &nbsp;[Vist Website &rarr;]
                        </Link>
                </li>

            </ul>
            
            
          </div>
        </Layout>
      </main>
    )
}

export default ArticleTemplate
