import { cn } from "@/lib/utils";

import Subtitle from "./Subtitle";

export type SectionTitleProps = {
  subtitle: string;
  title: string;
  highlight?: string;
  highlightColor?: "brand" | "muted";
  size?: "default" | "large";
  id?: string;
};

export default function SectionTitle({
  subtitle,
  title,
  highlight,
  highlightColor = "brand",
  size = "default",
  id,
}: SectionTitleProps) {
  return (
    <div>
      <Subtitle>{subtitle}</Subtitle>
      <h2
        id={id}
        className={cn(
          "mt-4 leading-[1.2] font-bold text-balance",
          size === "default" && "text-[40px] md:text-[44px] lg:text-5xl",
          size === "large" && "text-[40px] md:text-5xl lg:text-6xl",
        )}
      >
        {title}
        {highlight && (
          <span className={highlightColor === "brand" ? "text-brand" : "text-body"}>
            {" "}
            {highlight}
          </span>
        )}
      </h2>
    </div>
  );
}
