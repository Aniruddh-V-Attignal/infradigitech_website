import ProductDetail from "@/components/ProductDetail";
import StructuredData from "@/components/StructuredData";
import { getProductBySlug } from "@/data/products";

const SLUG = "panic-alarm-system";
const product = getProductBySlug(SLUG);

/**
 * On-page FAQ — kept in sync with the FAQ JSON-LD below so Google never
 * sees a "ghost FAQ" (which is a rich-snippet penalty risk). Authored to
 * match common AI-engine retrieval queries about panic alarm systems.
 */
const PANIC_FAQ = [
  {
    q: "How does the panic alarm system work when the panic button is pressed?",
    a: "When a panic button on any remote calling unit is pressed, the Main Control Unit immediately displays the alert location on its LCD, activates a high-decibel siren and lights a bright LED visual indicator. Multiple panic calls are auto-organised in a priority queue and logged in the order received.",
  },
  {
    q: "Can the Main Control Unit detect floor-system failures?",
    a: "Yes. The Main Control Unit continuously monitors the operational status of every connected floor unit. If communication is lost with a floor or a floor system fails, the affected floor is flagged in the same priority queue, allowing operators to identify and address faults without delay.",
  },
  {
    q: "How is an active panic alarm reset?",
    a: "The alarm can only be acknowledged and reset directly from the Main Control Unit using its dedicated reset button. This ensures controlled handling of every active alert and prevents accidental reset from the field.",
  },
];

export const metadata = {
  title: product?.seo?.title,
  description: product?.seo?.description,
  keywords: product?.seo?.keywords,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: product?.seo?.title,
    description: product?.seo?.description,
    images: (product?.images || []).filter(Boolean).slice(0, 4),
  },
};

export default function Page() {
  return (
    <>
      <StructuredData type="Product" data={product} />
      <StructuredData
        type="BreadcrumbList"
        data={[
          { name: "Home", url: "/" },
          { name: "Products", url: "/products" },
          { name: product.title, url: `/${SLUG}` },
        ]}
      />
      <StructuredData type="FAQPage" data={PANIC_FAQ} />

      <ProductDetail product={product} />

      {/* ─────────────────────────────────────────────────────────────── */}
      {/* FAQ — visible content (mirrors the JSON-LD above)               */}
      {/* ─────────────────────────────────────────────────────────────── */}
      <section className="section bg-white border-t border-graphite-100">
        <div className="container-default">
          <div className="max-w-3xl">
            <div className="eyebrow">Frequently asked</div>
            <h2 className="h2 mt-3 text-graphite-900">
              Panic Alarm System — FAQs.
            </h2>
          </div>
          <div className="mt-8 max-w-4xl divide-y divide-graphite-100 border-t border-b border-graphite-100">
            {PANIC_FAQ.map(({ q, a }) => (
              <details key={q} className="group py-5">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-graphite-900 font-semibold">
                  <span>{q}</span>
                  <span className="shrink-0 text-brand-700 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-graphite-700 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
