import { Link, useLoaderData } from "remix";

interface IPost {
  id: number;
  title: string;
  body: string;
}

export const loader = () => {
  const data = {
    posts: [
      { id: 1, title: "Post 1", body: "This is a test post" },
      { id: 2, title: "Post 2", body: "This is second test post" },
      { id: 3, title: "Post 3", body: "This is third test post" },
      { id: 4, title: "Post 4", body: "This is fourth test post" },
    ],
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
            <Link to={`/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostItems;
