"use client";

import { Linkedin } from "lucide-react";

/**
 * Single director / team member card.
 * Client component so we can attach the `onError` handler that hides the
 * portrait when the image file is missing.
 */
export default function TeamCard({ member }) {
  return (
    <div className="card p-6 text-center">
      <div className="relative mx-auto w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-brand-100 to-cyanx-400/20 border border-graphite-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img loading="lazy" decoding="async"
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <h3 className="mt-4 font-bold text-graphite-900">{member.name}</h3>
      <div className="text-xs uppercase tracking-wider text-brand-700 font-semibold mt-1">
        {member.title}
      </div>
      <p className="mt-3 text-sm text-graphite-600 leading-relaxed">{member.bio}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener"
          className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-700 hover:underline"
        >
          <Linkedin size={14} /> LinkedIn
        </a>
      )}
    </div>
  );
}
