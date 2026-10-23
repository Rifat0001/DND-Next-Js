import { journeyScene, sceneMarkers } from "@/data/journey";
import { siteConfig } from "@/data/site";
import { cn, padNumber } from "@/lib/utils";
import type { SceneMarker } from "@/types";

type JourneySceneProps = {
  activeId: number;
  totalStages: number;
  onSelect: (id: number) => void;
};

const { width, height } = journeyScene;

// No Math.random() here, otherwise server and client markup won't match (hydration error)
const rainDrops = Array.from({ length: 48 }, (_, i) => ({
  x: 40 + i * 33,
  delay: ((i * 7) % 12) * 0.15,
}));

const CARD_HEIGHT = 96;

function Marker({
  marker,
  isActive,
  onSelect,
}: {
  marker: SceneMarker;
  isActive: boolean;
  onSelect: (id: number) => void;
}) {
  const { card } = marker;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onSelect(marker.stageId);
    }
  };

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={`Stage ${marker.stageId}: ${marker.partner}`}
      transform={`translate(${marker.x} ${marker.y})`}
      onClick={() => onSelect(marker.stageId)}
      onKeyDown={handleKeyDown}
      className="group cursor-pointer outline-none"
    >
      {isActive && (
        <>
          <circle
            r={36}
            className="origin-center animate-pulse-ring fill-brand/20 [transform-box:fill-box]"
          />
          <circle r={24} className="fill-brand/30" />
        </>
      )}
      <circle
        r={14}
        className={cn(
          "stroke-brand stroke-2 transition-colors group-hover:stroke-3 group-focus-visible:stroke-3",
          isActive ? "fill-brand" : "fill-white",
        )}
      />
      <text
        textAnchor="middle"
        dy={4.5}
        className={cn(
          "font-mono text-[13px] font-bold",
          isActive ? "fill-white" : "fill-brand-dark",
        )}
      >
        {marker.stageId}
      </text>

      <g transform={`translate(${card.dx} ${card.dy})`}>
        <rect
          x={-card.width / 2}
          width={card.width}
          height={CARD_HEIGHT}
          rx={14}
          className={cn(
            "fill-white transition-colors group-hover:stroke-brand",
            isActive ? "stroke-brand" : "stroke-brand/70",
          )}
        />
        <image
          href={marker.logo}
          x={-42}
          y={12}
          width={84}
          height={56}
          preserveAspectRatio="xMidYMid meet"
        />
        <text
          textAnchor="middle"
          y={88}
          className="fill-[#4a3728] font-mono text-[12.5px] font-semibold tracking-[0.5px]"
        >
          {marker.partner}
        </text>
      </g>
    </g>
  );
}

export default function JourneyScene({
  activeId,
  totalStages,
  onSelect,
}: JourneySceneProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line shadow-[0_20px_25px_-5px_rgb(15_23_42/0.1),0_8px_10px_-6px_rgb(15_23_42/0.08)]">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="block h-auto w-full"
        role="group"
        aria-label="Rain-to-drain infrastructure cross-section with 7 interactive stages"
      >
        <defs>
          <linearGradient id="flow-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b9cf0" />
            <stop offset="50%" stopColor="#2f8be6" />
            <stop offset="100%" stopColor="#e07a33" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="logo-clip">
            <rect x={-234} y={-26} width={53} height={53} rx={10} />
          </clipPath>
        </defs>

        <image
          href={journeyScene.image}
          width={width}
          height={height}
          preserveAspectRatio="xMidYMid slice"
        />
        <rect width={width} height={height} className="fill-ink/10" />

        <g
          aria-hidden
          className="stroke-[#5b9bd5]/55"
          strokeWidth={1.6}
          strokeLinecap="round"
        >
          {rainDrops.map((drop) => (
            <line
              key={drop.x}
              x1={drop.x}
              y1={70}
              x2={drop.x - 6}
              y2={90}
              className="animate-rain"
              style={{ animationDelay: `${drop.delay}s` }}
            />
          ))}
        </g>

        <g fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path
            d={journeyScene.flowPath}
            className="stroke-[#2f8be6]/20"
            strokeWidth={14}
          />
          <path
            d={journeyScene.flowPath}
            stroke="url(#flow-gradient)"
            strokeWidth={3}
            strokeDasharray="22 14"
            filter="url(#glow)"
            className="animate-flow"
          />
          <path
            d={journeyScene.dropPath}
            strokeWidth={3}
            strokeDasharray="22 14"
            filter="url(#glow)"
            className="animate-flow stroke-[#3b9cf0]"
          />
        </g>

        <g aria-hidden className="fill-slate-400 font-mono text-[9px]">
          {journeyScene.depthMarkers.map((marker) => (
            <g key={marker.label}>
              <line
                x1={20}
                x2={32}
                y1={marker.y}
                y2={marker.y}
                className="stroke-slate-500"
              />
              <text x={36} y={marker.y + 3}>
                {marker.label}
              </text>
            </g>
          ))}
        </g>

        <g transform="translate(800 48)" aria-hidden>
          <rect
            x={-259}
            y={-37}
            width={517}
            height={74}
            rx={13}
            className="fill-white/90 stroke-slate-200"
          />
          <image
            href={siteConfig.logo}
            x={-234}
            y={-26}
            width={53}
            height={53}
            clipPath="url(#logo-clip)"
          />
          <line x1={-162} x2={-162} y1={-24} y2={24} className="stroke-ink/15" />
          <text
            x={-144}
            y={9}
            className="fill-ink font-display text-[26px] font-extrabold"
          >
            DND Rain to Drain Solutions
          </text>
          <line
            x1={-6}
            x2={94}
            y1={23}
            y2={23}
            strokeWidth={2.5}
            strokeLinecap="round"
            className="stroke-brand"
          />
        </g>

        {sceneMarkers.map((marker) => (
          <Marker
            key={`${marker.stageId}-${marker.x}`}
            marker={marker}
            isActive={marker.stageId === activeId}
            onSelect={onSelect}
          />
        ))}
      </svg>

      <div className="flex items-center justify-between gap-3 border-t border-line bg-white/70 px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-gray-500 uppercase backdrop-blur-sm">
        <span className="flex items-center gap-2">
          <span
            aria-hidden
            className="size-1.5 animate-pulse-soft rounded-full bg-brand"
          />
          Manual
        </span>
        <span>
          Stage {padNumber(activeId)} / {padNumber(totalStages)}
        </span>
        <span className="hidden sm:inline">Click any stage or node to explore</span>
      </div>
    </div>
  );
}
