import { getAllPosts, getPostBySlug } from '../../lib/api/posts'
import { Post } from '../../components/index/Post'

export default function Posts({ post }) {
  return (
    <div>
      <Post post={post} />
    </div>

  )
}

async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug, [
    'slug',
    'title',
    'date',
    'excerpt',
    'categories',
    'content'])
  return {
    props: {
      post
    }
  }
}

async function getStaticPaths() {
  const posts = await getAllPosts(['slug'])
  const paths = posts.map(post => (
      { params: { slug: post.slug } }
  ))

  return {
    paths,
    fallback: false,
  }
}

export { getStaticPaths, getStaticProps }