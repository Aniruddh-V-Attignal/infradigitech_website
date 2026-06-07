import SoftwareAutomationView from "./SoftwareAutomationView";
import StructuredData from "@/components/StructuredData";
import { siteConfig } from "@/config/site";
import { services } from "@/data/software";

const title = "Software Development & Automation Company in Bengaluru | Infra DigiTech";
const description =
  "Infra DigiTech — software development company in Bengaluru, India. We build embedded systems, IoT devices, custom enterprise software, web & ecommerce platforms (React, Next.js, WordPress, Shopify) and admin dashboards for banking, healthcare, hospitality, government, industrial, transportation and enterprise customers.";

export const metadata = {
  title,
  description,
  alternates: { canonical: "/software-automation" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/software-automation`,
    title,
    description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/software-automation/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Infra DigiTech — Software & Automation engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/software-automation/hero.jpg"],
  },
  keywords: [
    "software development company in Bengaluru",
    "software development company India",
    "Infra DigiTech software",
    "Digi-Tech software",
    "custom software development Bengaluru",
    "enterprise software development India",
    "embedded system development",
    "embedded firmware development",
    "IoT device development",
    "IoT product development company",
    "microcontroller based system development",
    "PCB design and firmware development",
    "industrial automation controllers",
    "ESP32 development", "STM32 development", "Raspberry Pi development",
    "LoRa device development", "RF wireless device development",
    "modbus integration", "MQTT IoT platform",
    "queue management software",
    "nurse calling system software",
    "industrial display management software",
    "banking display management software",
    "production monitoring software",
    "workflow automation software",
    "enterprise dashboard development",
    "ERP software development",
    "API integration services",
    "web development company Bengaluru",
    "website design and development India",
    "React development company",
    "Next.js development services",
    "Angular development",
    "Node.js development",
    "WordPress development",
    "SEO & AIEO website development",
    "responsive website design",
    "corporate website development",
    "manufacturing website development",
    "dealer portal development",
    "ecommerce development company",
    "Shopify development",
    "WooCommerce development",
    "B2B ecommerce development",
    "B2C ecommerce development",
    "multi-vendor ecommerce",
    "payment gateway integration",
    "enterprise application development",
    "admin dashboard development",
    "hospital communication platform",
    "bank branch management application",
    "multi-branch reporting system",
    "service request management software",
    "complaint management system",
    "AWS deployment", "Vercel deployment", "Docker", "Kubernetes",
    "GraphQL API", "REST API integration",
    siteConfig.shortName,
  ],
  robots: { index: true, follow: true },
};

const softwareFaq = [
  {
    q: "Does Infra DigiTech offer software development services?",
    a: "Yes. Infra DigiTech delivers Embedded Systems (firmware, PCB, IoT), Custom Software (queue, nurse-call, banking, production monitoring), Web & Ecommerce (React, Next.js, WordPress, Shopify, WooCommerce) and Enterprise Applications (dashboards, multi-branch portals, workflow automation).",
  },
  {
    q: "Can Infra DigiTech build embedded firmware for our hardware?",
    a: "Yes — every Infra DigiTech display, calling unit and controller runs on firmware we wrote in-house. We offer microcontroller-based system development, PCB design, IoT, wireless communication (RF / LoRa / Wi-Fi / Ethernet) and cloud-connected embedded platforms as a service.",
  },
  {
    q: "Where is Infra DigiTech's software team based?",
    a: "Our software, firmware and hardware engineering teams are all based in Bengaluru, Karnataka, India — engineered under one roof.",
  },
];

export default function SoftwareAutomationPage() {
  return (
    <>
      {services.map((s) => (
        <StructuredData
          key={s.id}
          type="Service"
          data={{
            name: s.title,
            description: s.summary,
            serviceType: s.headline,
            url: `/software-automation#${s.id}`,
            offers: s.offer,
          }}
        />
      ))}
      <StructuredData type="FAQPage" data={softwareFaq} />
      <StructuredData type="Speakable" data={{ cssSelectors: ["h1", "h2", ".lead"] }} />
      <SoftwareAutomationView />
    </>
  );
}
