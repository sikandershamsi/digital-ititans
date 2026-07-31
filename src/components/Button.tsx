import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
};

const variants = {
  primary:
    "bg-amber text-ink hover:bg-amber-deep shadow-[0_10px_30px_rgba(226,154,46,0.25)]",
  secondary:
    "bg-teal text-white hover:bg-teal-deep shadow-[0_10px_30px_rgba(15,159,138,0.25)]",
  ghost:
    "border border-white/25 bg-white/5 text-white hover:border-white/50 hover:bg-white/10",
  light:
    "border border-ink/15 bg-white text-ink hover:border-teal hover:text-teal-deep",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 ${variants[variant]} ${className}`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}
