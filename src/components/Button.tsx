import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  className?: string;
  onClick?: () => void;
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
};

const variants = {
  primary: "bg-copper text-stone-page hover:bg-copper-deep",
  secondary:
    "border border-stone-line bg-transparent text-ink hover:border-copper hover:text-copper",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full font-medium tracking-wide transition duration-200 active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
