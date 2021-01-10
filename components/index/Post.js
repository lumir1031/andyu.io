import React from 'react'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
export const Post = ({ post }) => {
  const { title, date, content, categories } = post
  const renderers = {
    code: ({ language, value }) => {
      return <SyntaxHighlighter style={tomorrowNight} language={language} children={value} />
    }
  }
  return (
    <section>
      <h1>{title}</h1>
      <span>{date}</span>
      <a href="">{categories}</a>
      <ReactMarkdown renderers={renderers} children={content} />

    </section>
  )
}