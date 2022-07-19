import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>TikTok App</title>
        <meta name="description" content="TikTok App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2 className="text-3xl text-center my-3 mx-auto text-blue-600">TikTok APP</h2>
      </main>

    </div>
  )
}

export default Home
