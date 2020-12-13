import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { Posts } from '../components/index/Posts'
import { Navgation } from '../components/index/Navgation'

import { getAllPosts } from '../lib/api/Posts'

export default function Home({ allPosts }) {
  console.log(allPosts)
  return (
    <>
      <Head>
        <title>Andyu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        title='Andyu'
        description='程式學習的成長紀錄'
      />
      <Navgation />
      <Posts title={"aaaa"} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()
  return {
    props: {
      allPosts
    }
  }
}
