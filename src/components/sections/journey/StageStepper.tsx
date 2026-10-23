import { cn } from "@/lib/utils";
import type { JourneyStage } from "@/types";

type StageStepperProps = {
  stages: JourneyStage[];
  activeId: number;
  onSelect: (id: number) => void;
};

export default function StageStepper({ stages, activeId, onSelect }: StageStepperProps) {
  const progress = (activeId / stages.length) * 100;

  return (
    <div className="relative px-5 sm:px-7">
      <div
        aria-hidden
        className="absolute inset-x-5 top-3.5 h-0.5 rounded-full bg-slate-300 sm:inset-x-7 sm:top-[18px]"
      >
        <div
          className="h-full rounded-full bg-brand shadow-[0_0_8px_rgb(224_122_51/0.35)] transition-[width] duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <ol className="relative grid grid-cols-7 gap-1 sm:gap-2">
        {stages.map((stage) => {
          const isActive = stage.id === activeId;
          const isDone = stage.id < activeId;

          return (
            <li key={stage.id}>
              <button
                type="button"
                onClick={() => onSelect(stage.id)}
                aria-current={isActive ? "step" : undefined}
                aria-label={`Stage ${stage.id}: ${stage.title}`}
                className="group flex w-full flex-col items-center gap-2 text-center focus-visible:outline-none sm:gap-3"
              >
                <span
                  className={cn(
                    "relative flex size-7 items-center justify-center rounded-full border-2 font-mono text-[11px] font-bold transition-all group-hover:border-brand group-focus-visible:ring-4 group-focus-visible:ring-brand/25 sm:size-9 sm:text-xs",
                    isActive &&
                      "scale-110 border-brand bg-brand text-white ring-4 ring-brand/15",
                    isDone && "border-brand/55 bg-[#fdf3ea] text-brand",
                    !isActive && !isDone && "border-line bg-white text-gray-500",
                  )}
                >
                  {stage.id}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute -inset-0.5 animate-pulse-ring rounded-full border-2 border-brand"
                    />
                  )}
                </span>
                <span
                  className={cn(
                    "hidden font-mono text-[11px] leading-tight tracking-[0.14em] uppercase transition-colors group-hover:text-ink sm:block",
                    isActive ? "font-semibold text-ink" : "text-gray-500",
                  )}
                >
                  {stage.title}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
