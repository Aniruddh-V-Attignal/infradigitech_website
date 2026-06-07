import Link from "next/link";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import StructuredData from "@/components/StructuredData";
import SustainabilityImageSlot from "@/components/SustainabilityImageSlot";
import {
  Leaf,
  Sun,
  Recycle,
  Flame,
  Car,
  Bike,
  Trees,
  Handshake,
  MapPin,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Sustainability | Infra DigiTech",
  description:
    "Solar-powered manufacturing since 2016, 100% electric vehicle fleet, 3,500+ trees at our Attiganal organic farm near Bhadra Wildlife Sanctuary, zero e-waste to landfill and a biogas-powered kitchen. Sustainability isn't a slide in our deck - it's how we operate.",
  alternates: { canonical: "/sustainability" },
  openGraph: {
    title: "Sustainability | Infra DigiTech",
    description:
      "Solar power since 2016, 100% EV fleet, 3,500-tree organic farm, e-waste buy-back program, biogas kitchen. See what real sustainability looks like at a Bengaluru electronics manufacturer.",
    type: "website",
  },
};

const breadcrumbs = [
  { name: "Home",           url: "/" },
  { name: "Sustainability", url: "/sustainability" },
];

/* Direct Google Maps link to the Attiganal farm.
   Coordinates: 13.69704 N, 75.80606 E
   (13°41'49.34"N 75°48'21.80"E)
   On the New BH Road (Tarikere bypass), Chikkamagaluru district. */
const FARM_MAPS_URL =
  "https://www.google.com/maps?q=13.69704,75.80606";
const FARM_COORDS_LABEL = "13.69704° N, 75.80606° E";

/* ----------------------------------------------------------------------------
 * Image slots - drop your photos here:
 *   /public/images/sustainability/solar-panels.jpg
 *   /public/images/sustainability/ev-vehicles.jpg
 *   /public/images/sustainability/attiganal-farm.jpg
 *   /public/images/sustainability/biogas-plant.jpg
 *
 * Until a file exists at the path, the styled placeholder behind it shows
 * through gracefully (no broken-image icon). The page works either way.
 * --------------------------------------------------------------------------*/

const STATS = [
  { value: "10+ kW",   label: "Rooftop solar capacity",  hint: "Installed 2016" },
  { value: "3,500+",   label: "Trees at our organic farm", hint: "Attiganal, Karnataka" },
  { value: "100%",     label: "Electric vehicle fleet",    hint: "Cars + two-wheelers" },
  { value: "Net +ve",  label: "Energy producer",           hint: "Surplus sold to BESCOM" },
];

export default function SustainabilityPage() {
  return (
    <>
      <StructuredData type="BreadcrumbList" data={breadcrumbs} />
      <StructuredData type="Speakable" data={{ cssSelectors: ["h1", "h2", ".lead"] }} />

      {/* --------------------------------------------------------------------
       * Hero - layered:
       *   1. graphite-950 base (fallback if image missing)
       *   2. background photo (/images/sustainability/hero-background.jpg)
       *   3. dark emerald gradient overlay (~85% on the left where text sits,
       *      ~60% on the right so the photograph still shows through)
       *   4. subtle hero-pattern noise for texture
       *   5. content
       * ------------------------------------------------------------------ */}
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        {/* Background photo - CSS background-image so it works in a server
            component (no onError handler required). If the file is missing,
            the graphite-950 base + gradient simply show through. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/sustainability/hero-background.jpg')",
          }}
        />
        {/* Dark emerald gradient overlay for text readability.
            Darker on the left/top where text sits; lets the image show
            through more on the bottom-right. */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(5,46,22,0.94) 0%, rgba(6,78,59,0.88) 30%, rgba(6,95,70,0.78) 60%, rgba(15,118,110,0.62) 100%)",
          }}
        />
        {/* Subtle texture overlay on top of everything */}
        <div className="absolute inset-0 hero-pattern opacity-20" aria-hidden />

        <div className="container-default relative py-16 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/25 ring-1 ring-emerald-300/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-100 backdrop-blur-sm">
            <Leaf size={12} /> Sustainability
          </div>
          <h1 className="h1 mt-4 text-white max-w-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            Engineering with a lighter footprint.
          </h1>
          <p className="mt-5 text-lg text-white/95 max-w-3xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
            Sustainability at Infra DigiTech isn&apos;t a slide in a deck. It&apos;s rooftop solar
            since 2016, an all-electric vehicle fleet, 3,500&#43; fruit trees on our family
            farm near the Bhadra Wildlife Sanctuary, an e-waste buy-back programme, and
            a biogas-powered kitchen. The coffee you&apos;ll drink when you visit our
            Banashankari office has a sustainability touch to it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={FARM_MAPS_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 text-emerald-950 px-5 py-2.5 text-sm font-bold shadow-lg shadow-emerald-900/40 hover:bg-emerald-300 transition"
            >
              <MapPin size={14} /> Open farm in Google Maps
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg bg-white/15 text-white ring-1 ring-white/30 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm hover:bg-white/20 transition"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------
       * Stats strip
       * ------------------------------------------------------------------ */}
      <Section variant="soft">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="card p-5 sm:p-6 border-l-4 border-emerald-500"
            >
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-700">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-graphite-900">{s.label}</div>
              <div className="mt-0.5 text-[11px] text-graphite-500">{s.hint}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------------------
       * Solar Power
       * ------------------------------------------------------------------ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 ring-1 ring-emerald-200 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
              <Sun size={14} /> Solar power · since 2016
            </div>
            <h2 className="h2 mt-3 text-graphite-900">
              Powered by the sun &mdash; and we sell the surplus back.
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              In 2016 we installed a rooftop solar array on our Banashankari office and
              manufacturing facility. The system is now a little over <strong>10 kW</strong> of
              installed capacity, and it runs everything: the production floor, the
              assembly lines, the QC stations, the office, the kitchen induction stoves.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
              Here&apos;s the interesting part &mdash; we don&apos;t just consume our own electricity.
              We <strong>generate more than we need</strong> and the surplus flows back to
              the grid through our <strong>BESCOM</strong> net-metering arrangement. On most
              days, our operation is a net contributor of clean energy to the Bengaluru grid.
            </p>
            <div className="mt-5 rounded-xl bg-emerald-50 ring-1 ring-emerald-100 p-4 text-sm text-emerald-900">
              <div className="flex items-start gap-3">
                <Handshake size={18} className="shrink-0 mt-0.5 text-emerald-700" />
                <div>
                  <div className="font-semibold">
                    Installed in partnership with Terraserve Engineers &amp; Contractors Pvt Ltd
                  </div>
                  <div className="mt-1 text-emerald-800/90 leading-relaxed">
                    A full-stack solar EPC partner who designed, supplied and installed the
                    array. Terraserve is also one of our digital-clock customers &mdash; full-circle
                    relationship.{" "}
                    <a
                      href="https://www.terraserveasia.com/"
                      target="_blank"
                      rel="noopener"
                      className="inline-flex items-center gap-1 font-semibold hover:underline"
                    >
                      Visit Terraserve <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <SustainabilityImageSlot
            src="/images/sustainability/solar-panels.jpeg"
            alt="Rooftop solar panels at Infra DigiTech Banashankari facility"
            kind="solar"
            label="Solar panels · Banashankari"
            caption="Rooftop solar array on the Banashankari facility — powers manufacturing, office and EV charging through daylight hours."
          />
        </div>
      </Section>

      {/* --------------------------------------------------------------------
       * EV Fleet
       * ------------------------------------------------------------------ */}
      <Section variant="soft">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <SustainabilityImageSlot
            src="/images/sustainability/ev-vehicles.jpeg"
            alt="Infra DigiTech electric vehicle fleet — Tata Nexon EV, Ola and Ather"
            kind="ev"
            label="Electric fleet"
          />
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 ring-1 ring-emerald-200 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
              <Car size={14} /> 100% Electric fleet
            </div>
            <h2 className="h2 mt-3 text-graphite-900">
              Every vehicle, electric.
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              We&apos;ve replaced every petrol and diesel vehicle in our operation with
              electric alternatives. Company cars are <strong>Tata Nexon EVs</strong>.
              Our service technicians &mdash; the people driving across Bengaluru daily to
              install and maintain hospital and bank deployments &mdash; ride
              <strong> Ola and Ather electric two-wheelers</strong>.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
              It was expensive. It would have been cheaper to keep the petrol vehicles.
              But sustainability isn&apos;t cheaper &mdash; it&apos;s the right call. Charging happens
              at the office on solar power, which means our service calls run on
              sunlight from arrival to departure.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-white ring-1 ring-emerald-100 p-4">
                <Car size={20} className="text-emerald-700" />
                <div className="mt-2 text-sm font-bold text-graphite-900">Tata Nexon EV</div>
                <div className="text-[12px] text-graphite-600">Company cars &amp; site visits</div>
              </div>
              <div className="rounded-xl bg-white ring-1 ring-emerald-100 p-4">
                <Bike size={20} className="text-emerald-700" />
                <div className="mt-2 text-sm font-bold text-graphite-900">Ola &amp; Ather</div>
                <div className="text-[12px] text-graphite-600">Field service two-wheelers</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------------------------
       * Organic Farm at Attiganal - the showcase section
       * ------------------------------------------------------------------ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 ring-1 ring-emerald-200 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
              <Trees size={14} /> Organic farm · Attiganal
            </div>
            <h2 className="h2 mt-3 text-graphite-900">
              3,500 trees in the village where we&apos;re from.
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              Our family farm is in <strong>Attiganal village, Tarikere taluk, Karnataka</strong>
              &mdash; right next to the <strong>Bhadra Wildlife Sanctuary</strong>, on the
              <strong> New BH Road (Tarikere bypass road)</strong> in Chikkamagaluru district.
              It&apos;s the village A.N. Venkatesh&apos;s family is originally from, and over
              the years we&apos;ve planted{" "}
              <strong>more than 3,500 fruit-bearing trees</strong> there.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
              The farm is fully <strong>organic</strong> &mdash; no chemical fertilizers, no
              pesticides, no synthetic inputs. We harvest what nature gives us at the
              pace nature gives it. The land buffers the wildlife corridor, the canopy
              cools the microclimate, and we get our fruit honestly.
            </p>

            <div className="mt-5 rounded-xl bg-gradient-to-br from-emerald-50 to-green-50 ring-1 ring-emerald-200 p-5">
              <div className="flex items-start gap-3">
                <Sparkles size={18} className="shrink-0 mt-0.5 text-emerald-700" />
                <div>
                  <div className="font-bold text-graphite-900">An open invitation</div>
                  <p className="mt-1 text-sm text-graphite-700 leading-relaxed">
                    Clients and partners are welcome to drop by &mdash; no form, no
                    appointment needed. Just open the location in Google Maps, drive
                    in, and we&apos;ll hand you a fresh coconut and walk you through
                    the orchard. It&apos;s the best way to see what sustainability
                    looks like when it isn&apos;t a slide in a deck.
                  </p>
                  <a
                    href={FARM_MAPS_URL}
                    target="_blank"
                    rel="noopener"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800"
                  >
                    <MapPin size={14} /> Open in Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-[12px] text-graphite-500">
              <MapPin size={13} className="shrink-0 mt-0.5 text-emerald-700" />
              <div>
                <div>Attiganal village, Tarikere taluk, Chikkamagaluru district, Karnataka</div>
                <div>New BH Road (Tarikere bypass road) &middot; {FARM_COORDS_LABEL}</div>
              </div>
            </div>
          </div>

          <SustainabilityImageSlot
            src="/images/sustainability/attiganal-farm.jpeg"
            alt="Organic fruit-tree farm at Attiganal village near Bhadra Wildlife Sanctuary"
            kind="farm"
            label="Attiganal · Tarikere"
            caption="3,500 fruit and forest trees on our organic farm at Attiganal village, Tarikere — the founder’s ancestral land, adjacent to the Bhadra Wildlife Sanctuary."
          />
        </div>
      </Section>

      {/* --------------------------------------------------------------------
       * E-waste recycling (no image per user note)
       * ------------------------------------------------------------------ */}
      <Section variant="soft">
        <SectionHeader
          eyebrow="Zero to landfill"
          title="What we make, we take back."
          subtitle="The single biggest environmental cost in our industry is electronic waste. We treat it as a closed loop, not a one-way trip to a landfill."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <div className="card p-6">
            <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700">
              <Recycle size={20} />
            </div>
            <h3 className="mt-4 text-base font-bold text-graphite-900">Nothing thrown, everything recycled</h3>
            <p className="mt-2 text-sm text-graphite-600 leading-relaxed">
              Every unused component, PCB scrap, sheet-metal offcut and packaging
              material from our manufacturing line is routed to certified recyclers
              &mdash; not the bin.
            </p>
          </div>

          <div className="card p-6">
            <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700">
              <Handshake size={20} />
            </div>
            <h3 className="mt-4 text-base font-bold text-graphite-900">Old-system buy-back</h3>
            <p className="mt-2 text-sm text-graphite-600 leading-relaxed">
              If you have an old or end-of-life Infra DigiTech installation, we&apos;ll buy
              it back at a nominal rate or offer a meaningful discount on a new
              upgrade. Either way, the old kit doesn&apos;t go to the dump.
            </p>
          </div>

          <div className="card p-6">
            <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700">
              <Leaf size={20} />
            </div>
            <h3 className="mt-4 text-base font-bold text-graphite-900">E-waste partnerships</h3>
            <p className="mt-2 text-sm text-graphite-600 leading-relaxed">
              When clients flag electronic waste from their own facility, we connect
              them with registered e-waste recyclers and arrange responsible
              disposal at our cost. It&apos;s the right thing to do.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={siteConfig.forms.enquiry}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-emerald-700 transition"
          >
            Talk to us about a buy-back or upgrade <ChevronRight size={14} />
          </a>
        </div>
      </Section>

      {/* --------------------------------------------------------------------
       * Biogas kitchen
       * ------------------------------------------------------------------ */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-emerald-50 ring-1 ring-emerald-200 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-700">
              <Flame size={14} /> Biogas kitchen
            </div>
            <h2 className="h2 mt-3 text-graphite-900">
              Even the coffee has a sustainability touch.
            </h2>
            <p className="mt-4 text-graphite-700 leading-relaxed">
              Our office kitchen runs on a combination of <strong>biogas</strong> from
              our on-site bio-waste digester and <strong>induction stoves</strong>{" "}
              powered by the same solar array on the roof.
            </p>
            <p className="mt-3 text-graphite-700 leading-relaxed">
              When you visit and we hand you a hot cup of coffee &mdash; the energy that
              boiled the water came either from sunlight that fell on our roof, or
              from the food scraps from yesterday&apos;s lunch. Either way, no fossil
              fuel was burned to make it.
            </p>

            <ul className="mt-5 space-y-2 text-sm text-graphite-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                Biogas from on-site bio-waste digester
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                Induction stoves powered by rooftop solar
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                Zero LPG, zero piped gas, zero fossil-fuel cooking
              </li>
            </ul>
          </div>

          <SustainabilityImageSlot
            src="/images/sustainability/biogas-plant.jpg"
            alt="On-site biogas plant powering the office kitchen at Infra DigiTech"
            kind="biogas"
            label="Biogas plant"
            caption="On-site biogas digester — converts kitchen and bio-waste into cooking fuel for the office kitchen. Zero LPG, zero piped gas."
          />
        </div>
      </Section>

      {/* --------------------------------------------------------------------
       * Closing CTA
       * ------------------------------------------------------------------ */}
      <Section variant="dark">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-emerald-500/20 ring-1 ring-emerald-400/40 text-emerald-300">
            <Leaf size={28} />
          </div>
          <h2 className="h2 mt-4 text-white">
            Want to see what sustainable manufacturing looks like up close?
          </h2>
          <p className="mt-3 text-graphite-200 max-w-2xl mx-auto">
            Tour the Banashankari facility &mdash; rooftop solar, EV charging bay, biogas
            kitchen, the works &mdash; or drive out to the farm in Attiganal for a fresh
            coconut and a walk through the orchard. Talk to us and we&apos;ll set it up.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-bold text-emerald-950 hover:bg-emerald-300 transition"
            >
              Contact us <ChevronRight size={14} />
            </Link>
            <a
              href={`tel:${siteConfig.contact.salesMobile.replace(/\s+/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition"
            >
              <Phone size={14} /> Call {siteConfig.contact.salesMobile}
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
