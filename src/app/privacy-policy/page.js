import Section from "@/components/Section";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Infra DigiTech",
  description: "Privacy policy for Infra DigiTech Pvt Ltd.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPage() {
  return (
    <Section>
      <div className="prose prose-lg max-w-3xl mx-auto">
        <h1>Privacy Policy</h1>
        <p>
          {siteConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy.
          This page summarises what data we collect on this website and how we use it.
        </p>
        <h2>Information we collect</h2>
        <ul>
          <li>Information you submit through enquiry / service-request forms (name, email, phone, message).</li>
          <li>Anonymous analytics about pages visited (Google Analytics 4, Meta Pixel, LinkedIn Insight Tag, where enabled).</li>
        </ul>
        <h2>How we use it</h2>
        <ul>
          <li>To respond to your enquiry or service request.</li>
          <li>To improve our website, marketing and customer support.</li>
        </ul>
        <h2>Cookies</h2>
        <p>
          We use first-party cookies and third-party tracking pixels for analytics and remarketing. You may disable cookies in your browser at any time.
        </p>
        <h2>Contact</h2>
        <p>
          For privacy-related questions, write to <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
      </div>
    </Section>
  );
}
