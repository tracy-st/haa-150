import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/examples")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="my-8">
			<h1 className="text-3xl font-bold mb-8">Examples</h1>
			<p className="text-lg mb-4">This is a list of examples.</p>
			<div className="grid grid-cols-4 gap-4">
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
				<div className="bg-slate-100 aspect-square">Test</div>
			</div>
		</div>
	);
}
