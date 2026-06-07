import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] grid place-items-center">
      <div className="text-center px-4">
        <div className="text-7xl font-extrabold font-display bg-gradient-to-r from-brand-600 to-cyanx-500 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="h2 mt-4 text-graphite-900">Page not found</h1>
        <p className="mt-2 text-graphite-600 max-w-md mx-auto">
          The page you&apos;re looking for has moved or doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link href="/" className="btn-primary"><Home size={16} /> Home</Link>
          <Link href="/products" className="btn-outline">Browse products <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
