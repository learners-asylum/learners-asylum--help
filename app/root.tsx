import { Outlet, LiveReload } from "remix";
import { TitledWrapperProps } from "~/types/props";

export default function App() {
  return (
    <Document title="My Remix Blog">
      <Outlet />
    </Document>
  );
}

function Document({ children, title }: TitledWrapperProps) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
