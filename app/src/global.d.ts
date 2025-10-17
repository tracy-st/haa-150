declare namespace JSX {
  interface IntrinsicElements {
    'exhibition-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      manifest?: string;
    };
  }
}

declare module '*.css';
