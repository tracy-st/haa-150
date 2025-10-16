import 'exhibition-viewer';
import '../App.css';

export default function App() {
  return (
    <div>
      <exhibition-viewer manifest="http://leedsunilibrary.exhibitionviewer.org/iiif/marie-hartley.json"></exhibition-viewer>
    </div>
  );
}
