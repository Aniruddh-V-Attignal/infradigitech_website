import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import ClientCarousel from "@/components/ClientCarousel";
import ClientTile from "@/components/ClientTile";
import { clients } from "@/data/clients";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Our Clients | Infra DigiTech",
  description:
    "Trusted by 3000+ banks, hospitals, hotels, airports, factories and corporates across India and overseas. View our client portfolio.",
  alternates: { canonical: "/clients" },
};

export default function ClientsPage() {
  const bySector = siteConfig.sectors.map((s) => ({
    ...s,
    items: clients.filter((c) => c.sector === s.id),
  })).filter((g) => g.items.length > 0);

  return (
    <>
      <section className="bg-graphite-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-gradient opacity-90" />
        <div className="absolute inset-0 hero-pattern" />
        <div className="container-default relative py-16 sm:py-20">
          <span className="eyebrow eyebrow-dark">Trusted partners</span>
          <h1 className="h1 mt-2 text-white">Our Clients</h1>
          <p className="mt-4 text-lg text-graphite-200 max-w-2xl">
            3000+ banks, hospitals, hotels, airports, factories and corporates across India and abroad
            trust Infra DigiTech with their digital infrastructure.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeader
          eyebrow="Across industries"
          title="Just a few of the names we work with"
          subtitle="Logos shown are placeholders. Drop your client logos into /public/clients/ and update /src/data/clients.js."
        />
        <ClientCarousel />
      </Section>

      {bySector.map((g) => (
        <Section key={g.id} variant="soft" className="!py-10">
          <SectionHeader eyebrow={g.name} title={`${g.name} customers`} align="left" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {g.items.map((c) => (
              <ClientTile key={c.name} client={c} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}

