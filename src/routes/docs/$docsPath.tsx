import { getMDXComponent } from "@contentlayer2/core/client";
import { createFileRoute } from "@tanstack/react-router";
import { allDocumentationPages } from "contentlayer/generated";
import { useMemo } from "react";

export const Route = createFileRoute("/docs/$docsPath")({
	component: RouteComponent,
	loader: async ({ params }) => {
		const page = allDocumentationPages.find(
			(t) => t.path === `/${params.docsPath}`,
		);

		if (!page) {
			throw new Error(`Page not found: ${params.docsPath}`);
		}

		return page;
	},
});

function RouteComponent() {
	const data = Route.useLoaderData();
	const Component = useMemo(
		() => getMDXComponent(data?.body.code || ""),
		[data],
	);

	return (
		<div>
			<div className="prose">
				<Component />
			</div>
		</div>
	);
}
