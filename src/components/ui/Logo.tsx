type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const src = variant === "dark" ? "/media/logo/networx-solutions-logo.svg" : "/media/logo/networx-solutions-logo-light.svg";

  return (
    <span className={`brand-wordmark ${variant === "dark" ? "dark" : "light"} ${className}`} aria-label="NetworX Solutions">
      <img src={src} alt="" />
    </span>
  );
}
