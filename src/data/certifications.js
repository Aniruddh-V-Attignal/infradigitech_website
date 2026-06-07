/**
 * Certification logos — single source of truth.
 *
 * Used in:
 *   - Footer (compact pill row)
 *   - About page (large logo strip)
 *   - Certifications page (large hero tiles)
 *
 * To swap a logo or fix a broken URL, edit it here once.
 * Drop a local PNG/SVG into /public/certifications/<file> and switch the
 * src to /certifications/<file> for production-grade reliability.
 */

export const certLogos = [
  {
    id: "iso",
    alt: "ISO 9001:2015 Certified",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ISO_Logo_%28Red_square%29.svg/500px-ISO_Logo_%28Red_square%29.svg.png",
  },
  {
    id: "ce",
    alt: "CE Certified",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg/330px-Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg.png",
  },
  {
    id: "gem",
    alt: "GeM Registered Vendor (Government e-Marketplace)",
    src: "https://upload.wikimedia.org/wikipedia/en/9/91/Government_e_Marketplace_Logo.png",
  },
  {
    id: "msme",
    alt: "MSME / Udyam Registered",
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/MSME_logo_%28colour%29.svg/500px-MSME_logo_%28colour%29.svg.png",
  },
  {
    id: "mii",
    alt: "Made in India",
    src: "https://upload.wikimedia.org/wikipedia/en/4/46/Make_In_India.png",
  },
  {
    id: "exp",
    alt: "Export Ready - DGFT / IEC Registered",
    src: "https://tradevistaecommerce.com/img/new-2.png",
  },
];

export default certLogos;
