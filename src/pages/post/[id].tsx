import { useUser } from "@clerk/nextjs"
import { type NextPage } from "next"
import Head from "next/head"

import { api } from "~/utils/api"

const SinglePostPage: NextPage = () => {
  return (
    <>
       <Head>
        <title>Post 🍑</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div>Post view </div>
      </main>
    </>
  )
}

export default SinglePostPage
