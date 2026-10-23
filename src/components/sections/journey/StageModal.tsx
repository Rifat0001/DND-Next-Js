"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Network, X } from "lucide-react";

import { padNumber } from "@/lib/utils";
import type { JourneyStage } from "@/types";

type StageModalProps = {
  stage: JourneyStage;
  isOpen: boolean;
  onClose: () => void;
};

function DetailBlock({
  label,
  dotColor,
  children,
}: {
  label: string;
  dotColor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
        <span aria-hidden className={`size-1.5 rounded-full ${dotColor}`} />
        {label}
      </p>
      <div className="mt-2 text-[13px] leading-relaxed text-body">{children}</div>
    </div>
  );
}

// Native <dialog> gives us focus trapping, Esc to close and a backdrop for free.
export default function StageModal({ stage, isOpen, onClose }: StageModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  // clicking the backdrop targets the <dialog> itself, not its children
  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="stage-modal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-[508px] rounded-2xl bg-white p-0 text-ink shadow-2xl backdrop:backdrop-blur-sm"
    >
      <div className="relative max-h-[calc(100dvh-3rem)] overflow-y-auto p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 flex size-8 items-center justify-center rounded-md border border-line text-body transition-colors hover:border-brand hover:text-brand"
        >
          <X className="size-4" />
        </button>

        <div className="flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-md border border-brand/30 bg-brand/10 text-brand">
            <Network className="size-4" aria-hidden />
          </span>
          <p className="font-mono text-[10px] tracking-[0.14em] text-brand uppercase">
            Stage {padNumber(stage.id)} · Rain-to-Drain
          </p>
        </div>

        <h3 id="stage-modal-title" className="mt-4 text-[28px] font-extrabold">
          {stage.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-body">{stage.summary}</p>

        <a
          href={stage.partner.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 px-3 py-1.5 transition-colors hover:border-brand"
        >
          <span className="font-mono text-[9px] tracking-[0.14em] text-brand uppercase">
            Partner
          </span>
          <span className="text-sm font-medium">{stage.partner.name}</span>
        </a>

        <div className="mt-6 space-y-5 border-y border-line py-6">
          <DetailBlock label="Challenge" dotColor="bg-red-400">
            {stage.challenge}
          </DetailBlock>
          <DetailBlock label="Solution" dotColor="bg-water">
            {stage.solution}
          </DetailBlock>
          <DetailBlock label="DND Expertise" dotColor="bg-brand">
            {stage.expertise}
          </DetailBlock>
          <DetailBlock label="Partner" dotColor="bg-amber-300">
            <p className="font-semibold text-ink">
              {stage.partner.name} — {stage.partner.note}
            </p>
          </DetailBlock>
        </div>

        <p className="mt-6 font-mono text-[10px] tracking-[0.14em] text-gray-500 uppercase">
          Specified components
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {stage.components.map((component) => (
            <li
              key={component}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-2.5 py-1 text-xs text-body"
            >
              <span aria-hidden className="size-1 rounded-full bg-brand" />
              {component}
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          onClick={onClose}
          className="mt-6 flex items-center justify-between rounded-md bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Discuss this stage with engineering
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </dialog>
  );
}
