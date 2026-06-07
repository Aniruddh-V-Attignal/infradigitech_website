"use client";

/**
 * Renders a single client logo card with a graceful fallback to typographic
 * initials if the logo image is missing or fails to load.
 *
 * Lives in its own file (and as a client component) because the onError
 * handler is a function prop, which cannot be passed across a server →
 * client component boundary. The parent /clients page stays a server
 * component for SEO and faster initial render.
 */
export default function ClientTile({ client }) {
  const initials = client.name
    .split(" ")
    .map((s) => s[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const inner = (
    <div className="card p-5 h-24 flex items-center justify-center group transition">
      <div className="relative w-full h-full grid place-items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async"
          src={client.logo}
          alt={client.name}
          className="object-contain max-h-12 w-auto opacity-90 group-hover:opacity-100"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            const sib = e.currentTarget.nextSibling;
            if (sib) sib.style.display = "flex";
          }}
        />
        <div className="hidden absolute inset-0 items-center justify-center font-display font-extrabold text-graphite-700 tracking-wider">
          {initials}
        </div>
      </div>
    </div>
  );

  return client.url ? (
    <a href={client.url} target="_blank" rel="noopener" title={client.name}>{inner}</a>
  ) : (
    <div title={client.name}>{inner}</div>
  );
}
