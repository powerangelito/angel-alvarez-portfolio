import { motion } from "framer-motion";

import { ExperienceCard } from "../../ui/ExperienceCard";

interface ExperienceTimelineItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export function ExperienceTimelineItem({
  company,
  role,
  period,
  description,
  technologies,
}: ExperienceTimelineItemProps) {
  return (
    <motion.div
      className="relative pl-10"
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div
        className="
          absolute
          left-0
          top-2
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          border-4
          border-zinc-950
          bg-blue-600
        "
      />

      <ExperienceCard
        company={company}
        role={role}
        period={period}
        description={description}
        technologies={technologies}
      />
    </motion.div>
  );
}