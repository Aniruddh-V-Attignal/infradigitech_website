export default function Container({ children, className = "" }) {
  return <div className={`container-default ${className}`}>{children}</div>;
}
