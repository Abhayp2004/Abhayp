// Fallback JSX typing to prevent JSX IntrinsicElements errors in constrained tooling
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}


