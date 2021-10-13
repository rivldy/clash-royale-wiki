import Head from "next/head"

// Components
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"

export default function Home() {
  return (
    <>
      <Head>
        <title>Clash Royale Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
    </>
  )
}
