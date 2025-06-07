import { projects } from "@/src/constant/projects";
import ProjectCard from "../ProjectCard";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
}
