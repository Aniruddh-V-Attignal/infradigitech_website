"use client";

/**
 * Lightweight global-search launcher.
 *
 * Renders only the magnifying-glass button in the navbar on first load.
 * The heavy overlay — with the input, products / categories / software
 * data, and matching logic — is dynamic-imported via next/dynamic only
 * when the user clicks the button or presses Ctrl/Cmd+K.
 *
 * Same export name as before so the existing import in Navbar.jsx works
 * without change.
 */

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Search } from "lucide-react";

// Lazy panel — chunk is fetched on first open, then cached for the session.
const GlobalSearchPanel = dynamic(() => import("./GlobalSearchPanel"), {
  ssr: false,
  loading: () => null,
});

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);

  // Ctrl/Cmd+K to open the search anywhere on the site.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Search site"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-graphite-700 hover:text-brand-700 hover:bg-brand-50 transition"
      >
        <Search size={18} />
      </button>

      {/* Heavy search panel — only fetched + parsed when user opens it */}
      {open && <GlobalSearchPanel onClose={() => setOpen(false)} />}
    </>
  );
}
