import Head from 'next/head'
import { NextSeo } from 'next-seo'
import { Title } from '../components/index/Title'
import { Navgation } from '../components/index/Navgation'

export default function Home() {
  return (
    <>
      <Head>
        <title>Andyu</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <NextSeo
        title='Andyu'
        description='程式學習的成長紀錄'
      />
      <Navgation />
      <Title />
    </>
  )
}
