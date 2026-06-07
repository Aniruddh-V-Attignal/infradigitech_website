"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * YouTube embed with privacy-enhanced (youtube-nocookie) host.
 * If `videoId` is empty, renders a friendly placeholder instead.
 */
export default function YoutubeEmbed({ videoId, title = "Product video" }) {
  const [active, setActive] = useState(false);

  if (!videoId) return null;

  if (!active) {
    return (
      <button
        onClick={() => setActive(true)}
        className="relative aspect-video w-full rounded-2xl overflow-hidden group bg-graphite-900"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async"
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 grid place-items-center bg-black/30 group-hover:bg-black/20 transition">
          <div className="bg-white/95 rounded-full p-5 group-hover:scale-110 transition">
            <Play className="text-brand-700" size={28} />
          </div>
        </div>
      </button>
    );
  }

  return (
    <div className="aspect-video w-full rounded-2xl overflow-hidden">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}
