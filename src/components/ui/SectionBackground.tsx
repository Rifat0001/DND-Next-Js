import type { CSSProperties } from "react";

type Variant = "journey" | "contact";

type Layers = {
  grid: CSSProperties;
  glow: CSSProperties;
};

const gridLines = (color: string, size: number): CSSProperties => ({
  backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
  backgroundSize: `${size}px ${size}px`,
});

const variants: Record<Variant, Layers> = {
  journey: {
    grid: {
      ...gridLines("#e5e7eb", 64),
      maskImage: "radial-gradient(ellipse at 50% 40%, #000, transparent 75%)",
    },
    glow: {
      inset: 0,
      backgroundImage:
        "radial-gradient(circle at 100% 0%, rgb(224 122 51 / 0.12) 0%, transparent 50%), radial-gradient(circle at 25% 100%, rgb(47 111 208 / 0.12) 0%, transparent 50%)",
      filter: "blur(40px)",
    },
  },
  contact: {
    grid: {
      ...gridLines("rgb(30 40 50 / 0.045)", 40),
      maskImage:
        "linear-gradient(to bottom, #000 0%, rgb(0 0 0 / 0.6) 50%, transparent 100%)",
    },
    glow: {
      top: -180,
      left: "50%",
      width: 1000,
      height: 500,
      transform: "translateX(-50%)",
      background:
        "radial-gradient(ellipse at center, rgb(239 126 45 / 0.14) 0%, rgb(239 126 45 / 0.09) 25%, rgb(239 126 45 / 0.045) 45%, rgb(239 126 45 / 0.015) 65%, transparent 80%)",
      filter: "blur(25px)",
    },
  },
};

// Parent section needs `relative isolate overflow-hidden` for the -z-10 layers to work.
export default function SectionBackground({ variant }: { variant: Variant }) {
  const { grid, glow } = variants[variant];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0" style={grid} />
      <div className="absolute" style={glow} />
    </div>
  );
}
