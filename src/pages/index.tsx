import Head from 'next/head';
import Link from 'next/link';
import PostType from '../@types/post';
import { getAllPosts } from '../utils/api';

type Props = {
  allPosts: PostType[];
};

const Home = ({ allPosts }: Props) => {
  console.log("🚀 ~ file: index.tsx ~ line 10 ~ Home ~ allPosts", allPosts);

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
        <h2 className="mt-10">Posts</h2>
        <ul>
          {allPosts?.map((post) => (
            <li key={post.slug}>
              <Link href={`/posts/${post.slug}`} passHref>
                <a href="#">{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by Rodrigo Godoy
      </footer>
    </div>
  );
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])
  console.log("🚀 ~ file: index.tsx ~ line 40 ~ getStaticProps ~ allPosts", allPosts)

  return {
    props: { allPosts },
  }
}

export default Home;
