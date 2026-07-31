"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  href?: string;
  priority?: boolean;
};

const LOGO = {
  src: "/brand/ititans-digital-logo.png",
  w: 1920,
  h: 662,
  alt: "iTitans Digital",
} as const;

export function Logo({ className = "", href = "/", priority = false }: LogoProps) {
  const image = (
    <Image
      src={LOGO.src}
      alt={LOGO.alt}
      width={LOGO.w}
      height={LOGO.h}
      priority={priority}
      className={`h-9 w-auto object-contain md:h-10 ${className}`}
    />
  );

  if (!href) return image;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="iTitans Digital home">
      {image}
    </Link>
  );
}
