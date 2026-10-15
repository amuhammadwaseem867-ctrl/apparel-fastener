/*
  Runs synchronously during HTML parsing, before first paint.
  On the client the tag is inert so React doesn't warn about
  rendering a <script>.
*/
export default function InlineScript({ html }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
