"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X, ShoppingBag, Headphones } from "lucide-react";
import {
  siteConfig,
  buildSalesWhatsAppLink,
  buildServiceWhatsAppLink,
} from "@/config/site";

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-80 rounded-2xl bg-white shadow-glow border border-graphite-100 overflow-hidden animate-fade-in-up">
          <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
            <div>
              <div className="font-semibold">Chat on WhatsApp</div>
              <div className="text-xs text-white/80">Typically replies within minutes</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="hover:bg-white/10 rounded-full p-1">
              <X size={16} />
            </button>
          </div>
          <div className="p-4 text-sm text-graphite-700">
            Hi 👋 Pick the team you'd like to reach — Sales for new enquiries or Service for existing installations.
          </div>
          <div className="p-3 pt-0 flex flex-col gap-2">
            <a
              href={buildSalesWhatsAppLink()}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold py-2.5 px-3 rounded-xl transition"
            >
              <span className="inline-flex items-center gap-2">
                <ShoppingBag size={16} /> Sales / Enquiries
              </span>
              <span className="text-xs font-mono opacity-90">{siteConfig.contact.salesWhatsapp}</span>
            </a>
            <a
              href={buildServiceWhatsAppLink()}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between gap-2 bg-[#075E54] hover:bg-[#054b43] text-white font-semibold py-2.5 px-3 rounded-xl transition"
            >
              <span className="inline-flex items-center gap-2">
                <Headphones size={16} /> Service / Support
              </span>
              <span className="text-xs font-mono opacity-90">{siteConfig.contact.serviceWhatsapp}</span>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="WhatsApp"
        className="bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full p-4 shadow-glow transition hover:-translate-y-0.5 animate-float"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}
