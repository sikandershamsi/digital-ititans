"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "light" | "purple" | "mark";
  className?: string;
  href?: string;
  priority?: boolean;
};

const assets = {
  light: { src: "/brand/logo-light.png", w: 812, h: 232, alt: "iTitans" },
  purple: { src: "/brand/logo-purple.png", w: 812, h: 232, alt: "iTitans" },
  mark: { src: "/brand/logo-mark.png", w: 129, h: 191, alt: "iTitans" },
} as const;

export function Logo({
  variant = "light",
  className = "",
  href = "/",
  priority = false,
}: LogoProps) {
  const asset = assets[variant];
  const image = (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={asset.w}
      height={asset.h}
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
