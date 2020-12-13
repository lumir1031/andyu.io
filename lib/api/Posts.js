import { client } from './_ContentfulClient'

function parsePost({ fields }) {
  return {
    slug: fields.slug,
    title: fields.title,
    content: fields.content
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
