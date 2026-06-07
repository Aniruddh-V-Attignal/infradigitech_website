import Link from "next/link";
import Image from "next/image";
import {
  Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Instagram, Twitter,
  MessageCircle, Headphones, ShoppingBag,
} from "lucide-react";
import {
  siteConfig, buildTelLink, buildMailLink,
  buildSalesWhatsAppLink, buildServiceWhatsAppLink,
} from "@/config/site";
import { categories } from "@/data/products";
import { certLogos } from "@/data/certifications";

const SOFTWARE_LINKS = [
  { label: "Embedded Systems",          href: "/software-automation#embedded" },
  { label: "Custom Software",           href: "/software-automation#custom-software" },
  { label: "Web & Ecommerce",           href: "/software-automation#web-ecommerce" },
  { label: "Enterprise Applications",   href: "/software-automation#enterprise-apps" },
  { label: "All Software & Automation", href: "/software-automation" },
];


export default function Footer() {
  const year = new Date().getFullYear();
  const c = siteConfig.contact;

  return (
    <footer className="bg-graphite-950 text-graphite-300">
      <div className="container-default py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3" aria-label={siteConfig.name}>
              <div className="relative shrink-0">
                <Image
                  src={siteConfig.logoMark}
                  alt={`${siteConfig.shortName}®`}
                  width={500}
                  height={500}
                  className="h-14 w-auto object-contain"
                />
                {/* Registered trademark mark - positioned right at the top-right edge of the
                    Digi-Tech ellipse (not the image bounding box, which has transparent padding). */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none select-none absolute top-[22%] right-[1%] text-[8px] font-bold text-cyanx-300 leading-none"
                >
                  &reg;
                </span>
              </div>
              <div className="leading-tight">
                <div className="font-display font-extrabold text-xl tracking-tight">
                  <span className="text-brand-400">
                    Infra DigiTech
                  </span>
                </div>
                <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.26em] text-graphite-400">
                  Private Limited
                </div>
                <div className="mt-0.5 text-[11px] italic font-medium text-cyanx-300 tracking-wide">
                  Your Vision, Digitally Engineered
                </div>
              </div>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-graphite-400">
              ISO 9001:2015 &amp; CE certified - MSME &amp; GeM-registered manufacturer of digital display systems,
              IoT devices, embedded firmware and B2B infrastructure software. Made in India - Export ready.
            </p>

            <div className="flex gap-3 mt-5">
              {siteConfig.social.linkedin && (
                <a href={siteConfig.social.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener" className="p-2 rounded-lg bg-white/5 hover:bg-brand-600 transition">
                  <Linkedin size={16} />
                </a>
              )}
              {siteConfig.social.youtube && (
                <a href={siteConfig.social.youtube} aria-label="YouTube" target="_blank" rel="noopener" className="p-2 rounded-lg bg-white/5 hover:bg-red-600 transition">
                  <Youtube size={16} />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} aria-label="Facebook" target="_blank" rel="noopener" className="p-2 rounded-lg bg-white/5 hover:bg-blue-700 transition">
                  <Facebook size={16} />
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} aria-label="Instagram" target="_blank" rel="noopener" className="p-2 rounded-lg bg-white/5 hover:bg-pink-600 transition">
                  <Instagram size={16} />
                </a>
              )}
              {siteConfig.social.twitter && (
                <a href={siteConfig.social.twitter} aria-label="X" target="_blank" rel="noopener" className="p-2 rounded-lg bg-white/5 hover:bg-graphite-700 transition">
                  <Twitter size={16} />
                </a>
              )}
            </div>

            {/* Certifications & Compliance - premium enterprise strip */}
            <div className="mt-7">
              <div className="flex items-baseline gap-2 mb-3.5">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-graphite-200">
                  Certifications &amp; Compliance
                </h4>
                <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" aria-hidden />
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5 max-w-md">
                {certLogos.map((b) => (
                  <span
                    key={b.id}
                    title={b.alt}
                    className="group relative inline-flex items-center justify-center aspect-[5/3] rounded-lg bg-white/[0.06] ring-1 ring-white/10 p-2 transition-all duration-300 hover:bg-white hover:ring-white/30 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.src}
                      alt={b.alt}
                      loading="lazy"
                      className="max-h-6 sm:max-h-7 max-w-full object-contain opacity-60 [filter:grayscale(1)_brightness(1.4)_contrast(0.95)] transition-all duration-300 group-hover:opacity-100 group-hover:[filter:none]"
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Company links + directory listings */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/credentials" className="hover:text-white">Credentials</Link></li>
              <li><Link href="/certifications" className="hover:text-white">Certifications</Link></li>
              <li><Link href="/sustainability" className="hover:text-white">Sustainability</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog &amp; Insights</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/downloads" className="hover:text-white">Catalogues</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/service-request" className="hover:text-white">Service Request</Link></li>
            </ul>

            {/* Find us on - directory listings (entity reconciliation for SEO/AIEO) */}
            <h4 className="text-white font-semibold mt-7 mb-3 text-[11px] uppercase tracking-[0.18em] text-graphite-400">
              Find us on
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={siteConfig.directories.indiamart}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  IndiaMart
                  <span className="text-[10px] text-graphite-500">&#8599;</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.directories.justdial}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  JustDial
                  <span className="text-[10px] text-graphite-500">&#8599;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Products + Software in one column */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/products?category=${cat.id}`} className="hover:text-white">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white font-semibold mt-7 mb-4">Software &amp; Automation</h4>
            <ul className="space-y-2 text-sm">
              {SOFTWARE_LINKS.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - sales + service */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-4">Get in touch</h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-cyanx-400 shrink-0" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${siteConfig.legalName}, ${c.address.line1}, ${c.address.line2}, ${c.address.line3}, ${c.address.city} ${c.address.postalCode}, ${c.address.state}, ${c.address.country}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                  aria-label="Open address in Google Maps"
                >
                  {c.address.line1}, {c.address.line2}, {c.address.line3}, {c.address.city} {c.address.postalCode}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyanx-400 shrink-0" />
                <a className="hover:text-white" href={buildMailLink()}>
                  {c.email}
                </a>
              </li>
            </ul>

            <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyanx-300">
                <ShoppingBag size={12} /> Sales
              </div>
              <a
                href={buildTelLink(c.salesMobile)}
                className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-white hover:text-cyanx-300"
              >
                <Phone size={14} className="text-cyanx-400" />
                {c.salesMobile}
              </a>
              <a
                href={buildSalesWhatsAppLink()}
                target="_blank"
                rel="noopener"
                className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#25D366] hover:underline"
              >
                <MessageCircle size={12} /> WhatsApp Sales
              </a>
            </div>

            <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cyanx-300">
                <Headphones size={12} /> Service &amp; Support
              </div>
              <a
                href={buildTelLink(c.serviceMobile)}
                className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-white hover:text-cyanx-300"
              >
                <Phone size={14} className="text-cyanx-400" />
                {c.serviceMobile}
              </a>
              <a
                href={buildServiceWhatsAppLink()}
                target="_blank"
                rel="noopener"
                className="mt-1.5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#25D366] hover:underline"
              >
                <MessageCircle size={12} /> WhatsApp Service
              </a>
            </div>

            <div className="flex gap-2 mt-4">
              <a
                href={siteConfig.forms.enquiry}
                target="_blank"
                rel="noopener"
                className="btn-primary !py-2 !px-3 text-xs"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-graphite-400">
          <span className="font-semibold uppercase tracking-[0.18em] text-graphite-500">Compliance</span>
          <span>
            <span className="text-graphite-500">GSTIN:</span>{" "}
            <span className="font-mono text-graphite-200">{siteConfig.legal.gstin}</span>
          </span>
          <span>
            <span className="text-graphite-500">CIN:</span>{" "}
            <span className="font-mono text-graphite-200">{siteConfig.legal.cin}</span>
          </span>
          <span>
            <span className="text-graphite-500">Udyam:</span>{" "}
            <span className="font-mono text-graphite-200">{siteConfig.legal.udyam}</span>
          </span>
          <span>
            <span className="text-graphite-500">IEC:</span>{" "}
            <span className="font-mono text-graphite-200">{siteConfig.legal.iec}</span>
          </span>
          <span>
            <span className="text-graphite-500">GeM:</span>{" "}
            <span className="font-mono text-graphite-200">{siteConfig.legal.gemSellerId}</span>
          </span>
          <Link
            href="/credentials"
            className="ml-auto inline-flex items-center gap-1 font-semibold text-cyanx-300 hover:text-cyanx-200"
          >
            View full credentials &rarr;
          </Link>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-graphite-400">
          <div>
            (c) {year} {siteConfig.legalName}. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
            <Link
              href="/bengaluru"
              className="text-graphite-500 hover:text-graphite-300"
              aria-label="Bengaluru service area"
            >
              Bengaluru
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
