import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="min-h-screen">
      <div className="py-12 md:py-16 px-4 flex flex-col items-center gap-8 md:gap-16 mb-8 md:mb-16">
        {/* <div className="text-[10em]">
          <ExhibitionViewerLogo />
        </div> */}
        <h1 className="text-3xl md:text-5xl font-bold text-center">
          The Fine Arts Library at Harvard University
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center px-4">
Since the founding of the Fogg Art Museum in 1895, the library has served the needs of teaching faculty, art museum staff, undergraduate and graduate students, researchers, and historians.

The history of the library is intertwined with Harvard's role in the development of academic programs in art and architectural history and museum studies.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <a
            href="/preview/minimal"
            className="text-blue-700 hover:text-blue-500 py-2 px-4 rounded text-center text-5xl border border-blue-700 sm:border-0"
          >
            Enter the exhibition
          </a>
        </div>
      </div>
    </div>
  );
}
