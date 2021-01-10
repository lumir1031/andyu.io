import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { getAllPosts } from '../lib/api/posts'
import { Navgation } from '../components/index/Navgation'

export default function Home({ posts }) {
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
        {
          posts.map(post => (
            <div key={post.slug} >
              <a href={`/posts/${post.slug}`}>
                <h1>{post.title}</h1>
              </a>
            </div>
          ))
        }
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts(['slug', 'title', 'excerpt', 'date', 'categories'])
  return {
    props: {
      posts
    }
  }
}
