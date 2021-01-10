import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { Posts } from '../components/index/Post'
import { getAllPosts } from '../lib/api/posts'
import { Navgation } from '../components/index/Navgation'

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Andyu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        title='Andyu'
        description='程式學習的成長紀錄'
      />
      <Navgation />
      <article>

      </article>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(['slug', 'title', 'date', 'excerpt', 'categories'])
  return {
    props: {
      posts
    }
  }
}
