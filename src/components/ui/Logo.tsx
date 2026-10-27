import Image from "next/image";

export function Logo({ variant = "colour" }: { variant?: "colour" | "light" }) {
  return (
    <Image
      src={variant === "light" ? "/brand/logo-light.png" : "/brand/logo.png"}
      alt="Ridgeway Facilities Management"
      width={1152}
      height={306}
      priority={variant === "colour"}
      className="h-11 w-auto md:h-12"
    />
  );
}
