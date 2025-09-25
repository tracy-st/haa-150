import { HomepageFeature } from "@/components/HomepageFeature";
import { PresenetationPreview } from "@/components/PresentationPreview";
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
          Create engaging online exhibitions
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-center px-4">
          <strong>Exhibition Viewer</strong> enables the presentation of
          interactive online exhibitions either as a standalone website or
          embedded into an existing site.
        </p>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          <a
            href="/docs/getting-started"
            className="bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-700 text-center"
          >
            Get started
          </a>
          <a
            href="/preview/delft"
            className="text-blue-700 hover:text-blue-500 py-2 px-4 rounded text-center border border-blue-700 sm:border-0"
          >
            See Example
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4">
        {/* LIST OF FEATURES.  */}
        <HomepageFeature
          title="Standalone scrollable web page exhibitions"
          description="A standard HTML view of the exhibition is available for users to explore, scrolling through the material as it is structured. This enables you to layout your exhibition in a specific order, with additional controls including annotations that enable users to be directed to specific images, regions within images, text or AV content. Users can navigate through that with the ability to interact with each section with a modal view presenting summary information, the full image(s) or AV material."
          image="/demo-01.png"
          imageAlt="view of exhibition viewer for delft"
        />

        <HomepageFeature
          title="Supports linear and user directed exhibition interaction"
          description="Users often approach exhibitions with their own ideas about what to explore and in what order. The Exhibition Viewer allows users to navigate quickly to areas of interest in multiple ways, they can scroll ahead and click into the content they want to see; move through curated displays using links, whilst a table of contents provides users with the ability to find and navigate to a specific section of the exhibition."
          image="/exhibition-viewer-3.jpg"
          imageAlt="view of exhibition viewer for delft"
          imageRight
        />

        <HomepageFeature
          title="Create your digital exhibitions using IIIF"
          description="You can develop your exhibitions by creating a new IIIF Manifest, adding the assets and content you want to display. Equally you can construct your exhibition combining content from your existing IIIF content or mixing it with other published IIIF content. The exhibition IIIF Manifest produced can be displayed in other IIIF viewers with standard navigation and display, allowing for its reuse in differing ways on your website or other websites."
          image="/exhibition-viewer-1.jpg"
          imageAlt="view of exhibition viewer for delft"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4 text-base md:text-lg mb-16 md:mb-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          TU Delft Example
        </h2>
        <p>
          This example showcases an interactive digital exhibition from
          Technical University of Delft's heritage collection, demonstrating how
          Exhibition Viewer presents archival materials into engaging online
          experiences. Navigate through historical irrigation knowledge and
          engineering innovations using intuitive scrolling and interactive
          annotations.
        </p>
        <div className="w-full h-[400px] md:h-[640px] bg-[rgb(55,55,55)] rounded-lg overflow-hidden">
          <PresenetationPreview
            language="en"
            options={{ autoPlay: true }}
            url="https://heritage.tudelft.nl/iiif/manifests/irrigation-knowledge/manifest.json"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4 text-base md:text-lg mb-16 md:mb-32">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          V&A Example
        </h2>
        <p>
          This example from the <strong>Victoria & Albert Museum</strong>, using
          a IIIF manifest created 7 years ago, demonstrates the evolution of
          digital exhibition formats. This shows how the foundational concepts
          of interactive online exhibitions have since been incorporated into
          this viewer, the original Manifest remaining interoperable thanks to
          IIIF.
        </p>
        <div className="w-full h-[400px] md:h-[640px] bg-[rgb(55,55,55)] rounded-lg overflow-hidden">
          <PresenetationPreview
            language="en"
            options={{ autoPlay: true }}
            url="https://stephenwf.github.io/ocean-liners.json"
          />
        </div>
      </div>
    </div>
  );
}
