import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute, useLocation } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { twMerge } from "tailwind-merge";
import Header from "../components/Header";

const client = new QueryClient();

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  const location = useLocation();
  const isDocs = location.pathname.startsWith("/docs");
  const isDelft = location.pathname.startsWith("/preview/delft");
  const isPresentation = location.pathname.startsWith("/preview/presentation");
  return (
    <div
      className={twMerge(
        "min-h-screen h-full bg-white",
        isDelft ? "bg-gray-200" : "",
      )}
    >
      <QueryClientProvider client={client}>
        <Header />

        <div
          className={
            isDocs || isPresentation
              ? ""
              : "max-w-[1440px] m-auto w-full min-h-screen px-8"
          }
        >
          <Outlet />
          <TanStackRouterDevtools />
        </div>
      </QueryClientProvider>
    </div>
  );
}
