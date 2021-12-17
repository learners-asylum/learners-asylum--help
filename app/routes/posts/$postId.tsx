import {
  //useParams,
  useLoaderData,
  LoaderFunction,
  ActionFunction,
  Link,
  redirect,
} from "remix";
import { db } from "~/utils/db.server";

export const loader: LoaderFunction = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  if (!post) throw new Error("Post Not Found");

  const data = { post };

  return data;
};

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();
  if (((form.get("_method") as string) || "").toUpperCase() === "DELETE") {
    const post = await db.post.findUnique({
      where: { id: params.postId },
    });

    if (!post) throw new Error("Post Not Found");

    await db.post.delete({ where: { id: params.postId } });
    return redirect("/posts");
  }
};

function Post() {
  // const params = useParams();
  const { post } = useLoaderData();
  return (
    <div>
      <div className="page-header">
        <h1>{post.title}</h1>
        <Link to="/posts" className="btn btn-reverse">
          Back
        </Link>
      </div>

      <div className="page-content">{post.body}</div>

      <div className="page-footer">
        <form method="post">
          <input type="hidden" name="_method" value="DELETE" />
          <button className="btn btn-delete">Delete</button>
        </form>
      </div>
    </div>
  );
}
export default Post;
