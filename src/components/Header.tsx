import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <>
      <header className="p-2 flex gap-2 text-black justify-between h-16 items-center delft-bg-primary border-b shadow-sm z-50 fixed left-0 right-0">
        <div className="max-w-[1440px] m-auto w-full flex items-center justify-between px-2">
          <div className="px-2 font-bold">
            <Link to="/" className="flex items-center gap-4 text-xl">
              The Fogg – Then and Now
            </Link>
          </div>
          <nav className="flex flex-row items-center text-sm">
            <Link
              to="/$path"
              params={{ path: "about" }}
              className="data-[status=active]:text-blue-700 font-semibold px-2"
            >
              About
            </Link>
            <a
                href="https://sites.harvard.edu/haa150/"
                target="_blank"
                rel="noopener noreferrer"
                className="data-[status=active]:text-blue-700 font-semibold px-2"
              >
                Conference Website
              </a>
          </nav>
        </div>
      </header>
      <div className="h-16" />
    </>
  );
}
