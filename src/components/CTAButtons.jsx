"use client";

import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { siteConfig, buildSalesWhatsAppLink, buildTelLink } from "@/config/site";

/**
 * Standard 3-button CTA group used on every product page:
 *   - Request a Quote (Microsoft Forms)
 *   - Contact Sales (tel: link to the sales number)
 *   - WhatsApp (deep link with prefilled message)
 */
export default function CTAButtons({ productName = "" }) {
  const message = productName
    ? `Hello ${siteConfig.shortName}, I would like to know more about ${productName}. Please contact me.`
    : `Hello ${siteConfig.shortName}, I would like to know more about your products. Please contact me.`;
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={siteConfig.forms.enquiry}
        target="_blank"
        rel="noopener"
        className="btn-primary"
      >
        Request a Quote <ArrowRight size={16} />
      </a>
      <a
        href={buildTelLink(siteConfig.contact.salesMobile)}
        className="btn-outline"
      >
        <Phone size={16} /> Contact Sales
      </a>
      <a
        href={buildSalesWhatsAppLink(message)}
        target="_blank"
        rel="noopener"
        className="btn-whatsapp"
      >
        <MessageCircle size={16} /> WhatsApp Sales
      </a>
    </div>
  );
}
