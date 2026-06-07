import Section from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Terms of Use | Infra DigiTech",
  description: "Terms of use for the Infra DigiTech website.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <Section>
      <div className="prose prose-lg max-w-3xl mx-auto">
        <h1>Terms of Use</h1>
        <p>
          By accessing this website you agree to use it only for lawful purposes.
          Content, product specifications and images on this site are for general informational
          purposes — exact specifications, certifications and lead times depend on the variant
          quoted by {siteConfig.legalName}.
        </p>
        <h2>Trademarks</h2>
        <p>
          All brands, logos and product names are property of their respective owners.
        </p>
        <h2>Liability</h2>
        <p>
          {siteConfig.legalName} accepts no liability for any indirect, incidental or consequential
          loss arising from use of this website. Final commercial terms are governed by the
          quotation and order confirmation issued by us.
        </p>
        <h2>Jurisdiction</h2>
        <p>
          These terms are governed by the laws of India and disputes are subject to the
          exclusive jurisdiction of the courts at Bengaluru, Karnataka.
        </p>
      </div>
    </Section>
  );
}
