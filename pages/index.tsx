import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Cool Spotify</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <h1>Let's learn how to build a Spotify!</h1>
    </div>
  )
}

export default Home
