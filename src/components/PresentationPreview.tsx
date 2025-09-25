import { useQuery } from "@tanstack/react-query";
import { DelftPresentation } from "exhibition-viewer";
import type { ComponentProps } from "react";
import "exhibition-viewer/dist/index.css";

export function PresenetationPreview({
	url,
	...props
}: { url: string } & Omit<
	ComponentProps<typeof DelftPresentation>,
	"manifest" | "viewObjectLinks"
>) {
	const { data } = useQuery({
		queryKey: ["manifest", { url }],
		queryFn: async () => {
			const response = await fetch(url);
			const json = await response.json();
			return json;
		},
	});

	if (!data)
		return (
			<div className="flex items-center justify-center h-full text-white/50">
				Loading...
			</div>
		);

	return (
		<div className="w-full h-full overflow-hidden">
			<DelftPresentation manifest={data} viewObjectLinks={[]} {...props} />
		</div>
	);
}
