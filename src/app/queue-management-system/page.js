import ProductDetail from "@/components/ProductDetail";
import StructuredData from "@/components/StructuredData";
import { getProductBySlug } from "@/data/products";
import { MonitorPlay, Smartphone, LineChart, BarChart3 } from "lucide-react";

const SLUG = "queue-management-system";
const product = getProductBySlug(SLUG);

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

/* ----------------------------------------------------------------------------
 * Advanced tier premium features — content + image showcase
 * Rendered directly under the Advanced tier card via ProductTiers' tierSlots.
 * The four elements shown in the marketing image: Token & Room display,
 * Mobile Calling Unit (premium feature for counter staff), Report Dashboard
 * (token journey analytics), and Report Analytics (live KPIs).
 * --------------------------------------------------------------------------*/
const ADVANCED_SHOWCASE = [
  {
    Icon: MonitorPlay,
    title: "Token & Room Display",
    surface: "Public LCD / LED",
    body:
      "Large public-facing display shows the currently-called token and the destination room or counter (Radiology-1, X-ray-2, Counter 03, etc.). The actively-called row is highlighted so the waiting customer spots it instantly. White-label header carries the hospital, bank or branch name.",
  },
  {
    Icon: Smartphone,
    title: "Mobile Calling Unit",
    surface: "Android . Counter Staff . Premium",
    body:
      "Counter staff call and recall tokens from a handheld unit instead of a fixed keypad. Random call, sequential call, and uncalled-token refresh — every counter action is mirrored on the public display and logged to the backend. Useful for diagnostic centres and bank branches where staff move between counters.",
  },
  {
    Icon: LineChart,
    title: "Report Dashboard",
    surface: "Web . Branch Supervisor",
    body:
      "Token Journey Analytics — every token's path through the system, with issued time, last-call time, total wait, hop count and last counter visited. Visual record of how each customer actually moved through the branch on a given day. Exportable as CSV for audit and customer-service reporting.",
  },
  {
    Icon: BarChart3,
    title: "Report Analytics",
    surface: "Web . Operations Manager",
    body:
      "Live KPIs across the entire branch — tokens issued, average waiting time, longest wait, average hops per token, and the waiting-time trend across the day. Filter by date range or by specific queue. The dashboard most regional operations heads ask for and never receive from a manual token system.",
  },
];

/* ----------------------------------------------------------------------------
 * Showcase component — rendered as a slot under the Advanced QMS tier.
 *
 * IMAGE PLACEHOLDER — to swap for the real image:
 *   1) Drop the file at:
 *      /public/images/products/queue-management-system/advanced-showcase.jpg
 *   2) Find the comment marker QMS_SHOWCASE_IMAGE_PLACEHOLDER below and
 *      replace the placeholder <div> with:
 *
 *        <img loading="lazy" decoding="async"
 *          src="/images/products/queue-management-system/advanced-showcase.jpg"
 *          alt="Advanced Queue Management System — Token Display, Mobile Calling Unit, Report Dashboard and Report Analytics"
 *          className="block w-full h-auto rounded-2xl shadow-card"
 *        />
 * --------------------------------------------------------------------------*/
function AdvancedShowcase() {
  return (
    <div className="rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-50/70 via-white to-cyanx-50/40 p-5 sm:p-7">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-700">
          Live preview
        </span>
        <span className="text-graphite-300">·</span>
        <span className="text-sm font-semibold text-graphite-700">
          Token Display + Mobile Calling Unit + Report Dashboard + Report Analytics
        </span>
      </div>

      {/* Advanced QMS showcase image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img loading="lazy" decoding="async"
        src="/images/products/queue-management-system/advanced-showcase.jpg"
        alt="Advanced Queue Management System — Token Display, Mobile Calling Unit, Report Dashboard and Report Analytics"
        className="block w-full max-w-3xl mx-auto h-auto rounded-2xl border border-graphite-200 shadow-sm"
      />

      {/* 4 feature cards — compact 2x2 on tablet, 4-wide on desktop */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {ADVANCED_SHOWCASE.map((f) => (
          <div
            key={f.title}
            className="rounded-xl bg-white border border-graphite-200 p-4"
          >
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-brand-50 text-brand-700 p-1.5 inline-flex">
                <f.Icon size={16} />
              </div>
              <h4 className="font-bold text-sm text-graphite-900">{f.title}</h4>
            </div>
            <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-700">
              {f.surface}
            </p>
            <p className="mt-2 text-[13px] text-graphite-600 leading-relaxed">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
      <ProductDetail
        product={product}
        tierSlots={{ advanced: <AdvancedShowcase /> }}
      />
    </>
  );
}
