import Link from 'next/link'

export const Posts = ({ title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <Link href='/' passHref>{title}</Link>
      <p>{title}</p>
      <span>{title}</span>
    </section>
  )
}