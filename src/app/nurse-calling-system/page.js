import ProductDetail from "@/components/ProductDetail";
import StructuredData from "@/components/StructuredData";
import { getProductBySlug } from "@/data/products";
import { Monitor, Smartphone, BellPlus, Activity } from "lucide-react";

const SLUG = "nurse-calling-system";
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
 * The four screens shown in the marketing image: Nurse Dashboard (web/tablet),
 * Mobile Calling Unit, Additional Services and Live Calls.
 * --------------------------------------------------------------------------*/
const ADVANCED_SHOWCASE = [
  {
    Icon: Monitor,
    title: "Nurse Dashboard",
    surface: "Web . Tablet",
    body:
      "Real-time browser dashboard of every bed and call — per-bed Turn-Around Time, call count, room/section and idle/active state. Runs on any tablet or PC on the hospital network.",
  },
  {
    Icon: Smartphone,
    title: "Mobile Calling Unit",
    surface: "Android . Bedside",
    body:
      "Handheld bedside unit shows bed + room number on each call. Single-tap Call to summon the nurse, single-tap Reset to close. Fully battery-operated with battery monitoring at the nurse station.",
  },
  {
    Icon: BellPlus,
    title: "Additional Services",
    surface: "Android . Bedside",
    body:
      "Patients can request Pantry, Housekeeping, Toilet assistance and other non-nursing services directly from the bedside unit. Routed to the right department, kept out of the clinical nurse-call queue.",
  },
  {
    Icon: Activity,
    title: "Live Calls",
    surface: "Android . Nurse Mobile",
    body:
      "Head-nurse mobile shows every active call with waiting time, auto-sorted so the longest-waiting patient is always at the top. Drives faster response and audit-ready response-time records.",
  },
];

/* ----------------------------------------------------------------------------
 * Showcase component — rendered as a slot under the Advanced tier card.
 *
 * IMAGE PLACEHOLDER — to swap for the real image:
 *   1) Drop the file at:
 *      /public/images/products/nurse-calling-system/advanced-showcase.png
 *   2) Find the comment marker SHOWCASE_IMAGE_PLACEHOLDER below and replace
 *      the placeholder <div> with:
 *
 *        <img loading="lazy" decoding="async"
 *          src="/images/products/nurse-calling-system/advanced-showcase.png"
 *          alt="Advanced Nurse Calling System — Web Dashboard, Mobile Calling Unit, Additional Services and Live Calls"
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
          Web Dashboard + Mobile App
        </span>
      </div>

      {/* Advanced tier showcase image */}
      <img loading="lazy" decoding="async"
        src="/images/products/nurse-calling-system/advanced-showcase.jpg"
        alt="Advanced Nurse Calling System — Web Dashboard, Mobile Calling Unit, Additional Services and Live Calls"
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
