"use client";

import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "header" | "footer";
  className?: string;
  href?: string;
  priority?: boolean;
};

export function Logo({
  variant = "header",
  className = "",
  href = "/",
  priority = false,
}: LogoProps) {
  const mark =
    variant === "header" ? (
      <span className={`inline-flex items-center gap-2.5 ${className}`}>
        <Image
          src="/brand/logo-mark-white.png"
          alt=""
          width={80}
          height={120}
          priority={priority}
          className="h-[34px] w-auto shrink-0 object-contain sm:h-9"
          style={{ width: "auto" }}
          aria-hidden
        />
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.05rem] font-semibold tracking-tight text-white sm:text-[1.15rem]">
            iTitans
          </span>
          <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.24em] text-amber">
            Digital
          </span>
        </span>
      </span>
    ) : (
      <Image
        src="/brand/logo-footer.png"
        alt="iTitans Digital"
        width={205}
        height={100}
        priority={priority}
        className={`h-9 w-auto max-h-9 object-contain object-left sm:h-10 sm:max-h-10 ${className}`}
        style={{ width: "auto" }}
      />
    );

  if (!href) return mark;

  return (
    <Link
      href={href}
      className="inline-flex h-full shrink-0 items-center"
      aria-label="iTitans Digital home"
    >
      {mark}
    </Link>
  );
}
