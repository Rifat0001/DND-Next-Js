import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline-light";
  className?: string;
  onClick?: () => void;
};

const variants = {
  primary: "border border-brand bg-brand text-white hover:bg-brand-dark",
  "outline-light": "border border-white/30 text-white hover:bg-white/15",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 font-display text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:outline-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
