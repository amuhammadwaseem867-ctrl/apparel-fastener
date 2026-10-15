import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main id="main-content" className="container not-found">
      <span className="eyebrow">
        <span className="eyebrow__index">404</span>
        <span className="eyebrow__line" />
        Page not found
      </span>
      <h1 className="display">
        <span>This page</span>
        <span>
          <em>doesn&apos;t exist.</em>
        </span>
      </h1>
      <p className="body-copy">The page you are looking for may have moved. Explore our divisions or get in touch with our team.</p>
      <div className="btn-row">
        <Link href="/" className="btn btn--solid">
          Back to home
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </Link>
        <Link href="/contact" className="btn btn--outline">
          Contact us
          <ArrowUpRight size={16} strokeWidth={1.8} />
        </Link>
      </div>
    </main>
  );
}
