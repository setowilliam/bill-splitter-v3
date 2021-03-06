import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bill Splitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-full flex flex-col items-center justify-center gap-4">
        <h2 className="text-xl font-bold">Welcome to Bill Splitter</h2>
        <section className="flex flex-col gap-2 items-center">
          <p>Split your bill with your friends!</p>
          <Button className="w-fit">Add Items / People</Button>
        </section>
      </div>
    </>
  );
};

export default Home;
