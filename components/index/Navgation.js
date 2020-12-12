import Link from 'next/link'

export const Navgation = () => {
  return (
    <>
      <nav>
        <Link href='/'>
          Andyu
        </Link>
        <Link href='/about'>
          關於我
        </Link>
      </nav>
    </>
  )
}