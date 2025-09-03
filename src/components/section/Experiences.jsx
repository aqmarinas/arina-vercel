import { experiences } from "@/src/constant/experiences";
import ExperienceItem from "../ExperienceItem";

export default function Experiences() {
  return (
    <div className="cursor-default">
      <h2>Experiences</h2>
      <div className="space-y-4">
        {experiences.map((experience, idx) => (
          <ExperienceItem
            key={idx}
            {...experience}
          />
        ))}
      </div>
    </div>
  );
}
