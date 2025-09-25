import { getMDXComponent } from "@contentlayer2/core/client";
import { createFileRoute } from "@tanstack/react-router";
import { allPages } from "contentlayer/generated";
import { useMemo } from "react";

export const Route = createFileRoute("/$path")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const page = allPages.find((t) => t.path === `/${params.path}`);

		if (!page) {
			throw new Error(`Page not found: ${params.path}`);
		}

		return page;
	},
});

function RouteComponent() {
	const data = Route.useLoaderData();
	const Component = useMemo(() => getMDXComponent(data.body.code), [data]);

	return (
		<div className="pt-16">
			<div className="prose prose-lg m-auto">
				<Component />
			</div>
		</div>
	);
}
