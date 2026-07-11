type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  return (
    <span className={`brand-wordmark ${variant === "dark" ? "dark" : "light"} ${className}`} aria-label="NetworX Solutions">
      <span className="brand-main">Networ</span>
      <span className="brand-x">X</span>
      <span className="brand-dots" aria-hidden="true">
        <i />
        <i />
      </span>
      <span className="brand-sub">Solutions</span>
    </span>
  );
}
