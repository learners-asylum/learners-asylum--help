import { Link, useLoaderData } from "remix";
import { db } from "~/utils/db.server";

interface IPost {
  id: number;
  title: string;
  body: string;
  createdAt: number;
  updatedAt: number;
}

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      take: 20,
      select: {
        id: true,
        title: true,
        body: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: "desc" },
    }),
  };
  console.log(123);
  return data;
};

function PostItems() {
  const data = useLoaderData();
  return (
    <div>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/new" className="btn">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {data.posts.map((post: IPost) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h3>{post.title}</h3>
              {new Date(post.createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostItems;
