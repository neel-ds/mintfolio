import Head from "next/head";
import Title from "@/components/title";

export default function Mint() {
  return (
    <>
      <Head>
        <title>NFT Collection</title>
        <meta name="description" content="mintfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-4 md:px-0 my-8 mx-auto max-w-[1080px]">
        <Title title="Your NFT collection" />
      </main>
    </>
  );
}
