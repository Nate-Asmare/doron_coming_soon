import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <Head>
        <title>We are coming soon!</title>
        <meta name="description" content="Coming soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </main>
    </>
  );
}
