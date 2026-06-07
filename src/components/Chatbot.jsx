"use client";

/**
 * Lightweight chatbot launcher.
 *
 * Renders only the floating icon button + the "How can I help you?"
 * greeting bubble on initial page load. The heavy chat panel — with
 * the FAQ data, keyword-matching logic, message bubbles, etc. — is
 * dynamic-imported via next/dynamic only when the user actually opens
 * the bot for the first time. This keeps the first-load JS bundle
 * lean (good for Lighthouse Performance) without losing the chatbot
 * feature.
 */

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { MessageSquare, X } from "lucide-react";

// Lazy panel — chunk is fetched on first open, then cached for the session.
const ChatbotPanel = dynamic(() => import("./ChatbotPanel"), {
  ssr: false,
  loading: () => null,
});

const GREETING_DISMISSED_KEY = "idt:chat-greeting-dismissed";
const GREETING_DELAY_MS    = 2500;  // wait before showing — past LCP
const GREETING_VISIBLE_MS  = 7000;  // how long it stays fully visible
const GREETING_FADE_MS     = 900;   // fade-out transition duration

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  // Show greeting after 2.5s, hold for 7s, fade out over 0.9s, unmount.
  // Respects sessionStorage dismissal so it doesn't reappear after a close.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(GREETING_DISMISSED_KEY) === "1") return;
    } catch {}
    const t1 = setTimeout(() => setShowGreeting(true), GREETING_DELAY_MS);
    const t2 = setTimeout(() => setFadingOut(true), GREETING_DELAY_MS + GREETING_VISIBLE_MS);
    const t3 = setTimeout(
      () => setShowGreeting(false),
      GREETING_DELAY_MS + GREETING_VISIBLE_MS + GREETING_FADE_MS
    );
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const handleOpen = () => {
    setOpen(true);
    setShowGreeting(false);
  };

  const handleDismissGreeting = (e) => {
    e.stopPropagation();
    setFadingOut(true);
    setTimeout(() => setShowGreeting(false), GREETING_FADE_MS);
    try { sessionStorage.setItem(GREETING_DISMISSED_KEY, "1"); } catch {}
  };

  return (
    <>
      {/* Greeting bubble — appears after a 2.5s delay, dismissible */}
      {showGreeting && !open && (
        <div
          role="button"
          tabIndex={0}
          onClick={handleOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpen();
            }
          }}
          aria-label="Open Digi chatbot — how can I help you?"
          className={`fixed bottom-24 left-5 z-40 inline-flex items-center gap-2 rounded-2xl bg-white shadow-glow border border-graphite-200 pl-4 pr-1.5 py-2 cursor-pointer hover:shadow-card hover:-translate-y-0.5 transition-[opacity,transform,box-shadow] duration-[900ms] ease-out animate-fade-in-up ${
            fadingOut ? "opacity-0 translate-y-1 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Speech-bubble tail pointing toward the launcher below */}
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-r border-b border-graphite-200 rotate-45"
          />
          <span className="text-sm font-semibold text-graphite-800 whitespace-nowrap">
            How can I help you?
          </span>
          <button
            type="button"
            onClick={handleDismissGreeting}
            className="inline-flex h-6 w-6 items-center justify-center rounded-full text-graphite-400 hover:bg-graphite-100 hover:text-graphite-700 transition"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating launcher button — always visible */}
      <button
        type="button"
        onClick={handleOpen}
        aria-label="Open Digi chatbot"
        className="fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 hover:bg-brand-700 text-white shadow-glow hover:-translate-y-0.5 transition"
      >
        <MessageSquare size={22} />
      </button>

      {/* Heavy chat panel — only fetched + parsed on first open */}
      {open && <ChatbotPanel onClose={() => setOpen(false)} />}
    </>
  );
}
