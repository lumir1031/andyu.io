import { client } from './_ContentfulClient'

function parsePost({ fields, sys }) {
  return {
    slug: fields.slug,
    title: fields.title,
    content: fields.content,
    createdAt: sys.createdAt.slice(0, 10)
  }
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: 'posts',
    order: 'sys.createdAt'
  })

  return parsePostEntries(entries)
}
