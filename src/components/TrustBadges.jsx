import { ShieldCheck, BadgeCheck, Globe2, Stamp, Award, Building2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const iconMap = {
  iso:  <ShieldCheck size={18} />,
  ce:   <BadgeCheck size={18} />,
  gem:  <Stamp size={18} />,
  mii:  <Award size={18} />,
  exp:  <Globe2 size={18} />,
  msme: <Building2 size={18} />,
};

export default function TrustBadges({ dark = false }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {siteConfig.certifications.map((c) => (
        <div
          key={c.id}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold ${
            dark
              ? "bg-white/5 border-white/15 text-white"
              : "bg-white border-graphite-200 text-graphite-800"
          }`}
        >
          <span className={dark ? "text-cyanx-400" : "text-brand-600"}>{iconMap[c.id]}</span>
          {c.short}
        </div>
      ))}
    </div>
  );
}
