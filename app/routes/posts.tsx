import { Outlet } from "remix";

function Posts() {
  return (
    <div>
      <h1>This is the post route</h1>
      <Outlet />
    </div>
  );
}

export default Posts;
