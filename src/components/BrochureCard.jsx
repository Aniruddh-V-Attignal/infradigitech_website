import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function BrochureCard({ product }) {
  return (
    <div className="card p-5 flex flex-col h-full">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-brand-50 text-brand-700 p-2.5"><FileText size={22} /></div>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-graphite-900 truncate">{product.title}</h3>
          <p className="mt-1 text-xs text-graphite-500 line-clamp-2">{product.short}</p>
        </div>
      </div>

      <div className="mt-5 flex-1" />

      <div className={product.brochure ? "grid grid-cols-2 gap-2" : "grid grid-cols-1 gap-2"}>
        <Link
          href={`/${product.slug}`}
          className="btn-outline !py-2 !px-3 text-xs justify-center"
        >
          View Page
        </Link>
        {product.brochure && (
          <a
            href={product.brochure}
            target="_blank"
            rel="noopener"
            className="btn-primary !py-2 !px-3 text-xs justify-center"
          >
            <Download size={14} /> Download PDF
          </a>
        )}
      </div>

      <a
        href={siteConfig.forms.enquiry}
        target="_blank"
        rel="noopener"
        className="mt-2 text-[11px] text-brand-700 hover:underline text-center"
      >
        {product.brochure ? "or request brochure via form" : "Request brochure via form"}
      </a>
    </div>
  );
}
