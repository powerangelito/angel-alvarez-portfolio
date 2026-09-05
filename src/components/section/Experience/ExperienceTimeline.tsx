import { experience } from "@/app/config/experience";

import { ExperienceTimelineItem } from "./ExperienceTimelineItem";

export function ExperienceTimeline() {
  return (
    <div className="relative mt-12">
      <div
        className="
          absolute
          bottom-0
          left-[9px]
          top-0
          w-px
          bg-zinc-800
        "
      />

      <div className="space-y-10">
        {experience.map((item) => (
          <ExperienceTimelineItem
            key={`${item.company}-${item.period}`}
            company={item.company}
            role={item.role}
            period={item.period}
            description={item.description}
            technologies={item.technologies}
          />
        ))}
      </div>
    </div>
  );
}