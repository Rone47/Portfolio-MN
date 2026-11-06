import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-32 text-center">
      <p className="gradient-text font-mono text-6xl font-bold">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-ink">Page not found</h1>
      <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
      <Link href="/" className="btn-primary mt-8">
        Back home
      </Link>
    </div>
  );
}
