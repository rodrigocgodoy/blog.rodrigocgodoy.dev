import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Rodrigo Godoy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-500 relative inline-block'><span className='relative text-white'>Rodrigo Godoy</span></span>
        </h1>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by Rodrigo Godoy
      </footer>
    </div>
  );
};

export default Home;
