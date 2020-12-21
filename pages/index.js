import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { Posts } from '../components/index/Posts'
import { Navgation } from '../components/index/Navgation'

import { getAllPosts } from '../lib/api/Posts'

export default function Home({ posts }) {

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
      {
        posts.map((post, idx) =>
          <Posts post={post} key={idx} />
        )
      }

    </>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: {
      posts
    }
  }
}
