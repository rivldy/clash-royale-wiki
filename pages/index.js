import Head from "next/head"

// Components
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Clash Royale Wiki</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar clans />
      <h1 className="text-6xl font-bold">Hello World!</h1>
    </>
  )
}
