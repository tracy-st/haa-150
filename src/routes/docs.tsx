import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { allDocumentationPages } from "contentlayer/generated";
import { useState } from "react";

export const Route = createFileRoute("/docs")({
  component: RouteComponent,
  loader: async () => {
    const menu: Array<{ label: string; path: string; order: number }> = [];

    for (const item of allDocumentationPages) {
      if (item.inMenu !== false) {
        const path = item.path.startsWith("/") ? item.path : `/${item.path}`;
        menu.push({
          label: item.title,
          path: `/docs${path}`,
          order: item.menuOrder || 1000,
        });
      }
    }

    menu.sort((a, b) => a.order - b.order);

    return { menu };
  },
});

function RouteComponent() {
  const { menu } = Route.useLoaderData();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-1.5 left-3 z-50 bg-white p-3 rounded-lg shadow-lg border border-gray-200 hover:bg-gray-50 active:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center space-y-1">
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </div>
      </button>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar menu */}
      <div
        className={`fixed docs-menu bg-gray-100 z-40 transition-transform duration-300 md:translate-x-0 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="w-[300px] p-3">
          {/* Mobile close button */}
          <div className="md:hidden flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <h2 className="text-lg border-b mb-2 py-2 hidden md:block">
            Documentation
          </h2>
          <ul className="text-md flex flex-col gap-1 text-[0.9rem]">
            {menu.map((item) => (
              <li key={item.path}>
                <Link
                  key={item.path}
                  to={item.path}
                  className="data-[status=active]:no-underline data-[status=active]:text-blue-800 data-[status=active]:font-semibold hover:underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="docs-content">
        <div className="p-4 md:p-8 pt-16 md:pt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
