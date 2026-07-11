import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const src =
    variant === "light"
      ? "/media/logo/networx-solutions-logo-light.svg"
      : "/media/logo/networx-solutions-logo.svg";

  return (
    <Image
      src={src}
      alt="NetworX Solutions"
      width={220}
      height={64}
      priority
      className={`h-auto w-[176px] ${className}`}
    />
  );
}
