/**
 * Software & Automation page data.
 *
 * - services[] — 4 capability sections (Embedded first)
 * - productsBuilt[] — actual Infra DigiTech products that use these capabilities,
 *   linked to their own product pages
 * - techStack[] — tools shown at the bottom; uses simple-icons CDN with
 *   a devicon fallback (AWS isn't on simple-icons due to trademark rules).
 *
 * Each `services` entry has an `image` slot — drop the corresponding photo
 * at /public/images/software-automation/<id>.jpg and it'll render automatically.
 */

export const services = [
  {
    id: "embedded",
    icon: "Cpu",
    eyebrow: "Hardware-led engineering",
    title: "Embedded System Development",
    headline: "Embedded Systems & Intelligent Device Engineering",
    summary:
      "We develop reliable embedded systems and intelligent hardware-software solutions for industrial, healthcare, banking, automation and communication applications. Every Infra DigiTech display, calling unit and controller runs on firmware we wrote in-house — that same expertise powers our custom embedded engagements.",
    offer: [
      "Embedded Firmware Development",
      "Microcontroller-Based System Development",
      "IoT Device Development",
      "PCB Design & Hardware Integration",
      "Device Communication Systems",
      "Industrial Automation Controllers",
      "Smart Display & Communication Devices",
      "Queue Management Hardware Systems",
      "Nurse Calling Hardware Platforms",
      "Token Display Controllers",
      "Sensor & Monitoring Device Integration",
      "Wireless Communication Systems (RF / LoRa / Wi-Fi / Ethernet)",
      "Cloud-Connected Embedded Platforms",
      "Real-Time Device Monitoring Solutions"
    ],
    accent: "from-cyanx-500 to-brand-600",
    sectors: ["healthcare", "bfsi", "factories", "corporate", "sports"],
    image: "/images/software-automation/embedded.jpg"
  },
  {
    id: "custom-software",
    icon: "Code2",
    eyebrow: "Operational software",
    title: "Custom Software Development",
    headline: "Tailor-Made Software Solutions",
    summary:
      "Custom software solutions designed specifically for industrial, healthcare, banking, communication and enterprise operational requirements. We build the platforms that sit alongside our hardware — and also deliver standalone software for customers who only need the brains.",
    offer: [
      "Queue Management Software",
      "Token Display & Calling Software",
      "Nurse Calling System Software",
      "Industrial Display Management Systems",
      "Banking Display Management Platforms",
      "Production Monitoring Software",
      "Workflow Automation Systems",
      "Enterprise Dashboard Development",
      "Device Monitoring & Control Systems",
      "Real-Time Reporting & Analytics Platforms",
      "Cloud-Based Monitoring Solutions",
      "Custom ERP & Operational Software",
      "API Integration & Enterprise Connectivity",
      "Hardware & Software Integrated Systems"
    ],
    accent: "from-brand-600 to-cyanx-500",
    sectors: ["healthcare", "bfsi", "factories", "corporate", "hospitality", "retail"],
    image: "/images/software-automation/custom-software.jpg"
  },
  {
    id: "web-ecommerce",
    icon: "Globe",
    eyebrow: "Digital presence & commerce",
    title: "Web & Ecommerce Development",
    headline: "Websites & Ecommerce Platforms for Modern Businesses",
    summary:
      "Modern, responsive, SEO & AIEO-optimised websites for manufacturers, banks, healthcare institutions and enterprises — plus scalable B2B / B2C ecommerce platforms that handle product catalogues, payments, dealer ordering and multi-vendor operations.",
    offer: [
      "Corporate & Manufacturing Website Development",
      "SEO & AIEO-Optimised Website Architecture",
      "Responsive Design (mobile / tablet / desktop)",
      "Product Catalogue & Portfolio Websites",
      "Dealer & Distributor Management Portals",
      "Business Lead-Generation Websites",
      "CMS-Based Websites (WordPress)",
      "High-Performance Web Apps (React / Next.js)",
      "Custom Ecommerce Website Development",
      "Shopify, WooCommerce, React/Next.js Stores",
      "B2B & B2C Ecommerce Systems",
      "Payment Gateway Integration",
      "Multi-Vendor & Dealer Ordering Platforms",
      "Ecommerce Migration, SEO & Optimisation",
      "Website Maintenance & Technical Support"
    ],
    accent: "from-cyanx-400 to-brand-700",
    sectors: ["bfsi", "retail", "hospitality", "corporate"],
    image: "/images/software-automation/web-ecommerce.jpg"
  },
  {
    id: "enterprise-apps",
    icon: "LayoutDashboard",
    eyebrow: "Enterprise platforms",
    title: "Application Design & Development",
    headline: "Custom Enterprise Application Development",
    summary:
      "Scalable, secure enterprise applications that help organisations automate workflows, improve operational efficiency and manage business processes — from admin dashboards to multi-branch portals.",
    offer: [
      "Enterprise Web Application Development",
      "Cloud-Based Business Management Systems",
      "Workflow Automation Platforms",
      "Admin & Monitoring Dashboards",
      "Queue Management Applications",
      "Hospital Communication Platforms",
      "Banking & Branch Management Applications",
      "Real-Time Monitoring & Reporting Systems",
      "Multi-User Enterprise Portals",
      "Employee & Visitor Management Systems",
      "Service Request & Complaint Management Systems",
      "Reporting & Analytics Dashboards",
      "API & Third-Party System Integrations",
      "Cross-Platform Web Applications"
    ],
    accent: "from-brand-700 to-cyanx-400",
    sectors: ["healthcare", "bfsi", "factories", "corporate", "airports"],
    image: "/images/software-automation/enterprise-apps.jpg"
  }
];

/**
 * Our flagship products — built using the capabilities above.
 * Each links to its real product page on this site.
 */
export const productsBuilt = [
  {
    slug: "nurse-calling-system",
    title: "Nurse Calling System Platform",
    blurb: "Wired, wireless and IP nurse-calling platform with dashboards, mobile access and SMS alerts.",
    capability: "Embedded + Software"
  },
  {
    slug: "queue-management-system",
    title: "Queue Management Platform",
    blurb: "End-to-end token / queue platform — wireless LCD, multi-language voice, branch analytics.",
    capability: "Embedded + Software"
  },
  {
    slug: "token-display-system",
    title: "Standalone Token Display System",
    blurb: "3-digit and 4-digit wireless / wired token displays with multi-language voice.",
    capability: "Embedded firmware"
  },
  {
    slug: "industrial-production-display",
    title: "Industrial Production / Andon Display",
    blurb: "Shop-floor production dashboards integrated with PLC, SCADA and MES.",
    capability: "Software + Embedded"
  },
  {
    slug: "gps-digital-clock",
    title: "GPS Synchronised Digital Clock",
    blurb: "GPS / NTP / RTC synchronised clocks with custom embedded firmware.",
    capability: "Embedded firmware"
  },
  {
    slug: "panic-alarm-system",
    title: "Panic Alarm System (LoRa)",
    blurb: "LoRa wireless emergency-alert platform with strobe, hooter, SMS and app alerts.",
    capability: "Embedded + IoT"
  },
  {
    slug: "forex-display-board",
    title: "Forex Display Board",
    blurb: "Live currency rate boards with centralised software, audit logging and tamper-evidence.",
    capability: "Embedded + Software"
  },
  {
    slug: "bank-interest-rate-display-board",
    title: "Bank Interest Rate Display Board",
    blurb: "Branch lobby rate boards with centralised software push from HO.",
    capability: "Embedded + Software"
  }
];

/**
 * Helper — returns the best logo URL for a tech with a CDN fallback.
 * Uses simple-icons primarily, devicon for things simple-icons removed (AWS).
 */
export const techStack = [
  // Languages
  { name: "TypeScript",   slug: "typescript",       group: "Languages" },
  { name: "JavaScript",   slug: "javascript",       group: "Languages" },
  { name: "Python",       slug: "python",           group: "Languages" },
  { name: "C++",          slug: "cplusplus",        group: "Languages" },
  { name: "C",            slug: "c",                group: "Languages" },
  { name: "PHP",          slug: "php",              group: "Languages" },
  { name: "Go",           slug: "go",               group: "Languages" },

  // Web Frameworks
  { name: "React",        slug: "react",            group: "Web Frameworks" },
  { name: "Next.js",      slug: "nextdotjs",        group: "Web Frameworks" },
  { name: "Angular",      slug: "angular",          group: "Web Frameworks" },
  { name: "Vue.js",       slug: "vuedotjs",         group: "Web Frameworks" },
  { name: "Node.js",      slug: "nodedotjs",        group: "Web Frameworks" },
  { name: "Express",      slug: "express",          group: "Web Frameworks" },
  { name: "Tailwind CSS", slug: "tailwindcss",      group: "Web Frameworks" },
  { name: "Sass",         slug: "sass",             group: "Web Frameworks" },

  // CMS & Ecommerce
  { name: "WordPress",    slug: "wordpress",        group: "CMS & Ecommerce" },
  { name: "WooCommerce",  slug: "woocommerce",      group: "CMS & Ecommerce" },
  { name: "Shopify",      slug: "shopify",          group: "CMS & Ecommerce" },

  // Data & Backend
  { name: "PostgreSQL",   slug: "postgresql",       group: "Data & Backend" },
  { name: "MySQL",        slug: "mysql",            group: "Data & Backend" },
  { name: "MongoDB",      slug: "mongodb",          group: "Data & Backend" },
  { name: "Redis",        slug: "redis",            group: "Data & Backend" },
  { name: "Firebase",     slug: "firebase",         group: "Data & Backend" },
  { name: "GraphQL",      slug: "graphql",          group: "Data & Backend" },

  // Cloud & DevOps — AWS via devicon (simple-icons removed it)
  { name: "AWS",          slug: "",                 logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", group: "Cloud & DevOps" },
  { name: "Google Cloud", slug: "googlecloud",      group: "Cloud & DevOps" },
  { name: "Microsoft Azure", slug: "microsoftazure", group: "Cloud & DevOps" },
  { name: "Vercel",       slug: "vercel",           group: "Cloud & DevOps" },
  { name: "Netlify",      slug: "netlify",          group: "Cloud & DevOps" },
  { name: "Docker",       slug: "docker",           group: "Cloud & DevOps" },
  { name: "Kubernetes",   slug: "kubernetes",       group: "Cloud & DevOps" },
  { name: "Nginx",        slug: "nginx",            group: "Cloud & DevOps" },
  { name: "GitHub",       slug: "github",           group: "Cloud & DevOps" },
  { name: "GitLab",       slug: "gitlab",           group: "Cloud & DevOps" },

  // Embedded & IoT
  { name: "Raspberry Pi", slug: "raspberrypi",      group: "Embedded & IoT" },
  { name: "Arduino",      slug: "arduino",          group: "Embedded & IoT" },
  { name: "Linux",        slug: "linux",            group: "Embedded & IoT" },
  { name: "MQTT",         slug: "mqtt",             group: "Embedded & IoT" },
  { name: "Espressif",    slug: "espressif",        group: "Embedded & IoT", label: "ESP32" },
  { name: "STM32",        slug: "",                 group: "Embedded & IoT" },
  { name: "Modbus",       slug: "",                 group: "Embedded & IoT" },
  { name: "PlatformIO",   slug: "platformio",       group: "Embedded & IoT" },

  // Tools & Tooling
  { name: "Git",          slug: "git",              group: "Tools & Tooling" },
  { name: "VS Code",      slug: "vscodium",         group: "Tools & Tooling", label: "VS Code" },
  { name: "Figma",        slug: "figma",            group: "Tools & Tooling" },
  { name: "Postman",      slug: "postman",          group: "Tools & Tooling" },
  { name: "Vite",         slug: "vite",             group: "Tools & Tooling" },
  { name: "Webpack",      slug: "webpack",          group: "Tools & Tooling" }
];
