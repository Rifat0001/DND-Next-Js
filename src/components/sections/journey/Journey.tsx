"use client";

import { useState } from "react";

import Container from "@/components/ui/Container";
import SectionBackground from "@/components/ui/SectionBackground";
import SectionTitle from "@/components/ui/SectionTitle";
import { journeyIntro, journeyStages } from "@/data/journey";

import JourneyScene from "./JourneyScene";
import StageModal from "./StageModal";
import StageStepper from "./StageStepper";

export default function Journey() {
  const [activeId, setActiveId] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeStage =
    journeyStages.find((stage) => stage.id === activeId) ?? journeyStages[0];

  const openStage = (id: number) => {
    setActiveId(id);
    setIsModalOpen(true);
  };

  return (
    <section
      id="solutions"
      aria-labelledby="journey-title"
      className="relative isolate overflow-hidden border-y border-line bg-surface py-20 md:py-[100px]"
    >
      <SectionBackground variant="journey" />

      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-md">
            <SectionTitle
              subtitle={journeyIntro.subtitle}
              title={journeyIntro.title}
              highlight={journeyIntro.highlight}
              size="large"
              id="journey-title"
            />
          </div>
          <p className="max-w-md text-sm leading-normal text-body md:mb-3">
            {journeyIntro.description}
          </p>
        </div>

        <div className="space-y-7">
          <StageStepper stages={journeyStages} activeId={activeId} onSelect={openStage} />
          <JourneyScene
            activeId={activeId}
            totalStages={journeyStages.length}
            onSelect={openStage}
          />
        </div>

        <StageModal
          stage={activeStage}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </Container>
    </section>
  );
}
