import Head from "next/head";
import PostType from "../../@types/post";
import { getAllPosts, getPostBySlug } from "../../utils/api";
import markdownToHtml from "../../utils/markdownToHtml";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  console.log("🚀 ~ file: [slug].tsx ~ line 13 ~ Post ~ post", post, morePosts, preview);

  return (
    <>
      <Head>
        <title>
          {post?.title} | Rodrigo Godoy
        </title>
        <meta property="og:image" content={post?.ogImage?.url} />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">{post?.title}</h1>
      </main>
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Post;
