import React from 'react'
import Link from 'next/link'
import Layout from '@/app/components/Layout'
import AnimatedText from '@/app/components/AnimatedText'
import { SingleImg, Paragraph, GithubProjectLink, TwoImg, VedioMP4 } from '../app/components/ArticleLayOut'
import ReactPlayer from 'react-player'
import YoutubeEmbed from '../app/components/YoutubeEmbed'
import YouTubePlayer from 'react-player/youtube'

const ArticleTemplate = () => {
    return (
      <main>
        <Layout className='py-2 backy'>
        <AnimatedText text='Self-driving Navigation and Control using ROS' className='mb-10 !text-6xl
          lg:!text-5xl md:!text-4xl sm:!text-3xl md:px-2'/>

        <div className='w-full px-40 md:px-10'>

            <h2 className='text-2xl font-bold mt-10 mb-10 dark:text-light
            md:text-xl'>Demo in ROS</h2>
            
            <YoutubeEmbed embedId='KD7vV7YJL1U'/>

          </div>
        </Layout>
      </main>
    )
}

export default ArticleTemplate
