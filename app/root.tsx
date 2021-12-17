import { Outlet, LiveReload, Link, Links, Meta } from "remix";
import { TitledWrapperProps, WrapperProps } from "~/types/props";
import ROUTES from "~/constants/routes";
import globalStylesUrl from "~/styles/global.css";

const { HOME, POSTS } = ROUTES;

export const links = () => [{ rel: "stylesheet", href: globalStylesUrl }];

export const meta = () => {
  const description = "A cool blog built with Remix";
  const keywords = "remix, react, javascript, typescript";
  return {
    description,
    keywords,
  };
};

export default function App() {
  return (
    <Document title="My Remix Blog">
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ children, title }: TitledWrapperProps) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <link rel="stylesheet" href={globalStylesUrl} />
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: WrapperProps) {
  return (
    <>
      <nav className="navbar">
        <Link to={HOME} className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to={POSTS}>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
