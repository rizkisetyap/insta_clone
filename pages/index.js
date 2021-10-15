import Head from "next/head";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>InstaClone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center text-purple-500">
        <h1>Instagram clone</h1>
      </main>
    </div>
  );
};

export default Home;
