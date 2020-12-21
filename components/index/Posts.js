import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'


export const Posts = ({ post }) => {

  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter style={tomorrowNight} language={language} children={value} />
    }
  }

  return (
    <section>
      <h2>{post.title}</h2>
      <ReactMarkdown renderers={renderers} children={post.content} />
      <span>{post.createdAt}</span>
    </section>
  )
}