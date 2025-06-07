import { education } from "@/src/constant/education";
import EducationItem from "../EducationItem";

export default function Education() {
  return (
    <div className="cursor-default">
      <h2>Education</h2>
      <div className="md:flex md:justify-center md:gap-4 space-y-4 md:space-y-0">
        {education.map((e, idx) => (
          <EducationItem
            key={idx}
            {...e}
          />
        ))}
      </div>
    </div>
  );
}
