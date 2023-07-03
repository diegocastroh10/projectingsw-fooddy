import '@fooddy/app/globals.css'
import Sidebar from "@fooddy/components/Sidebar";

export default function Page() {
  return (
    <>
      <Sidebar />
    </>
  );
};

/*

import { GetStaticProps, GetStaticPaths } from 'next';

interface Post {
  id: number;
  title: string;
  // Add other properties if there are more fields in the API response
}

interface BlogProps {
  posts: Post[];
}

function Blog({ posts }: BlogProps) {
  if (!Array.isArray(posts)) {
    return <div>No posts available.</div>;
  }

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps: GetStaticProps<BlogProps> = async () => {
  const res = await fetch('https://api.fooddy.cl');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// the path has not been generated.
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://api.fooddy.cl');
  const posts: Post[] = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' };
};

export default Blog;
*/