export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
}) {
  const a = align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left";
  return (
    <div className={`max-w-3xl mb-10 sm:mb-14 ${a}`}>
      {eyebrow && (
        <span className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</span>
      )}
      {title && (
        <h2 className={`h2 mt-3 ${dark ? "text-white" : "text-graphite-900"}`}>{title}</h2>
      )}
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${dark ? "text-graphite-300" : "text-graphite-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
