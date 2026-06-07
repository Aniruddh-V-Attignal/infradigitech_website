"use client";

/**
 * Heavy chatbot panel — extracted from Chatbot.jsx so it can be
 * dynamic-imported only when the user actually opens the bot.
 *
 * Saves ~25-40KB on initial page load (FAQ data + keyword-matching
 * logic + the full panel JSX + dependent lucide icons).
 *
 * Controlled by Chatbot.jsx via the `onClose` prop.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  X, Send, Bot, ExternalLink, Headphones, Mail, ArrowRight,
} from "lucide-react";
import { faq, chatbotMessages } from "@/data/faq";
import {
  siteConfig,
  buildSalesWhatsAppLink,
  buildServiceWhatsAppLink,
  buildMailLink,
} from "@/config/site";

function match(query) {
  const q = (query || "").toLowerCase().trim();
  if (!q) return null;
  let best = { score: 0, entry: null };
  for (const entry of faq) {
    let score = 0;
    for (const k of entry.keywords) {
      if (q.includes(k.toLowerCase())) {
        score += Math.max(k.length, 4);
      }
    }
    if (score > best.score) best = { score, entry };
  }
  return best.score >= 4 ? best.entry : null;
}

function resolveHref(href, productName = "") {
  if (href === "FORMS_ENQUIRY") return siteConfig.forms.enquiry;
  if (href === "FORMS_SERVICE") return siteConfig.forms.serviceRequest;
  if (href === "WHATSAPP_LINK")
    return buildSalesWhatsAppLink(
      productName
        ? `Hello ${siteConfig.shortName} Sales, I'd like to know more about ${productName}.`
        : ""
    );
  if (href === "WHATSAPP_SALES") return buildSalesWhatsAppLink();
  if (href === "WHATSAPP_SERVICE") return buildServiceWhatsAppLink();
  return href;
}

function isServiceQuery(q) {
  const s = (q || "").toLowerCase();
  return /service|repair|complaint|amc|not working|broken|down|fault|defect|warranty|maintenance|fix/.test(s);
}

export default function ChatbotPanel({ onClose }) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: chatbotMessages.greeting },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages]);

  const send = (text) => {
    const t = (text ?? input).trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", text: t }]);
    setInput("");
    setTimeout(() => {
      const entry = match(t);
      if (entry) {
        setMessages((m) => [
          ...m,
          { role: "bot", text: entry.answer, link: entry.link, related: entry.related },
        ]);
      } else {
        const serviceMode = isServiceQuery(t);
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: chatbotMessages.fallback,
            fallback: true,
            serviceMode,
            originalQuery: t,
          },
        ]);
      }
    }, 280);
  };

  return (
    <div className="fixed bottom-24 left-5 z-50 w-[min(94vw,380px)] h-[min(72vh,560px)] rounded-2xl bg-white shadow-glow border border-graphite-100 overflow-hidden flex flex-col animate-fade-in-up">
      {/* Header */}
      <div className="bg-brand-gradient text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 rounded-full p-1.5"><Bot size={18} /></div>
          <div>
            <div className="font-semibold">Digi · Virtual Assistant</div>
            <div className="text-[11px] text-white/85">Online · {siteConfig.shortName}</div>
          </div>
        </div>
        <button
          onClick={onClose}
          aria-label="Close chat"
          className="hover:bg-white/10 rounded-full p-1"
        >
          <X size={16} />
        </button>
      </div>

      {/* Message log */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-graphite-50">
        {messages.map((m, i) => <Bubble key={i} m={m} />)}
        <div ref={endRef} />
      </div>

      {/* Quick prompts (only at greeting) */}
      {messages.length <= 1 && (
        <div className="px-3 pb-2 flex flex-wrap gap-1.5 bg-graphite-50">
          {chatbotMessages.prompts.map((p) => (
            <button
              key={p}
              onClick={() => send(p)}
              className="text-[11px] bg-white border border-graphite-200 rounded-full px-3 py-1 hover:border-brand-400 hover:text-brand-700"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={(e) => { e.preventDefault(); send(); }}
        className="border-t border-graphite-100 bg-white p-2 flex items-center gap-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about products, quotes, service…"
          className="flex-1 text-sm rounded-xl border border-graphite-200 px-3 py-2 focus:border-brand-500 focus:outline-none"
          autoFocus
        />
        <button type="submit" aria-label="Send" className="bg-brand-600 hover:bg-brand-700 text-white p-2 rounded-xl">
          <Send size={16} />
        </button>
      </form>

      {/* Footer — quick agent link always available */}
      <div className="px-3 pb-3 pt-1 text-[11px] text-graphite-500 bg-white flex items-center justify-between">
        <span>Need a human?</span>
        <div className="flex items-center gap-2">
          <a
            href={buildMailLink("Website chatbot — Speak with an Agent")}
            className="text-brand-700 font-semibold inline-flex items-center gap-1 hover:underline"
          >
            <Mail size={11} /> Email
          </a>
          <a
            href={buildSalesWhatsAppLink()}
            target="_blank"
            rel="noopener"
            className="text-[#25D366] font-semibold inline-flex items-center gap-1 hover:underline"
          >
            WhatsApp <ExternalLink size={11} />
          </a>
        </div>
      </div>
    </div>
  );
}

function Bubble({ m }) {
  const isUser = m.role === "user";
  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm bg-brand-600 text-white rounded-br-sm">
          {m.text}
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-start">
      <div className="max-w-[88%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm bg-white border border-graphite-100 text-graphite-800 rounded-bl-sm space-y-2">
        <div>{m.text}</div>
        {m.link && <LinkChip link={m.link} />}
        {m.related?.length > 0 && (
          <div className="pt-1 border-t border-graphite-100 mt-1">
            <div className="text-[10px] font-bold uppercase tracking-[0.16em] text-graphite-400 mb-1.5">Related</div>
            <div className="flex flex-wrap gap-1.5">
              {m.related.map((slug) => <RelatedChip key={slug} slug={slug} />)}
            </div>
          </div>
        )}
        {m.fallback && <AgentFallback serviceMode={m.serviceMode} query={m.originalQuery} />}
      </div>
    </div>
  );
}

function LinkChip({ link }) {
  const href = resolveHref(link.href);
  const inner = (<>{link.label} <ArrowRight size={12} /></>);
  if (link.external) {
    return (
      <a href={href} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-brand-50 text-brand-700 hover:bg-brand-100 rounded-full px-3 py-1.5 transition">
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-brand-50 text-brand-700 hover:bg-brand-100 rounded-full px-3 py-1.5 transition">
      {inner}
    </Link>
  );
}

function RelatedChip({ slug }) {
  const name = slug
    .split("-")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
  return (
    <Link
      href={`/${slug}`}
      className="text-[11px] font-semibold text-graphite-700 bg-graphite-50 border border-graphite-200 hover:border-brand-400 hover:text-brand-700 rounded-full px-2.5 py-1 transition"
    >
      {name}
    </Link>
  );
}

function AgentFallback({ serviceMode, query }) {
  const subject = serviceMode
    ? "Website chatbot — Service request"
    : "Website chatbot — Speak with an Agent";
  const body = query ? `Hi, I asked the chatbot about: "${query}"\n\nPlease help.` : "";
  const wa = serviceMode
    ? buildServiceWhatsAppLink(`Hello, I need to raise a service request.${query ? ` Issue: ${query}` : ""}`)
    : buildSalesWhatsAppLink(`Hello, please connect me with an agent.${query ? ` I'm asking about: ${query}` : ""}`);
  const phoneLabel = serviceMode
    ? `Service · ${siteConfig.contact.serviceMobile}`
    : `Sales · ${siteConfig.contact.salesMobile}`;
  const telHref = serviceMode
    ? `tel:${siteConfig.contact.serviceMobile.replace(/\s+/g, "")}`
    : `tel:${siteConfig.contact.salesMobile.replace(/\s+/g, "")}`;
  return (
    <div className="rounded-xl bg-graphite-50 border border-graphite-100 p-3 mt-1 space-y-2">
      <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700 flex items-center gap-1.5">
        <Headphones size={12} /> Speak with an Agent
      </div>
      <div className="flex flex-col gap-1.5">
        <a href={telHref} className="inline-flex items-center justify-between gap-2 text-xs font-semibold bg-white border border-graphite-200 hover:border-brand-400 hover:text-brand-700 rounded-lg px-3 py-2 transition">
          <span className="inline-flex items-center gap-1.5">Call {phoneLabel}</span>
          <ArrowRight size={12} />
        </a>
        <a href={buildMailLink(subject, body)} className="inline-flex items-center justify-between gap-2 text-xs font-semibold bg-white border border-graphite-200 hover:border-brand-400 hover:text-brand-700 rounded-lg px-3 py-2 transition">
          <span className="inline-flex items-center gap-1.5"><Mail size={12} /> Email an Agent</span>
          <ArrowRight size={12} />
        </a>
        <a href={wa} target="_blank" rel="noopener" className="inline-flex items-center justify-between gap-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#1ebe5a] rounded-lg px-3 py-2 transition">
          <span className="inline-flex items-center gap-1.5">WhatsApp {serviceMode ? "Service" : "Sales"}</span>
          <ExternalLink size={12} />
        </a>
        {serviceMode ? (
          <Link href="/service-request" className="inline-flex items-center justify-between gap-2 text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg px-3 py-2 transition">
            <span className="inline-flex items-center gap-1.5"><Headphones size={12} /> Open Service Request Form</span>
            <ArrowRight size={12} />
          </Link>
        ) : (
          <a href={siteConfig.forms.enquiry} target="_blank" rel="noopener" className="inline-flex items-center justify-between gap-2 text-xs font-semibold bg-brand-600 hover:bg-brand-700 text-white rounded-lg px-3 py-2 transition">
            <span className="inline-flex items-center gap-1.5">Request a Quote</span>
            <ExternalLink size={12} />
          </a>
        )}
      </div>
    </div>
  );
}
