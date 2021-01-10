import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
export const Post = ({ post }) => {
  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter style={tomorrowNight} language={language} children={value} />
    }
  }

  return (
    <section>
      <h1>{post.title}</h1>
      <ReactMarkdown renderers={renderers} children={post.content} />
      <span>{post.date}</span>
    </section>
  )
}