import Container from "./Container";

export default function Section({
  id,
  variant = "light",
  className = "",
  containerClassName = "",
  children,
}) {
  const v =
    variant === "dark"
      ? "section section-dark"
      : variant === "soft"
      ? "section section-soft"
      : variant === "grid"
      ? "section section-grid hero-pattern"
      : "section";
  return (
    <section id={id} className={`${v} ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
