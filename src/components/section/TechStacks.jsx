import { beBadges, cloudDevOpsBadges, dbBadges, feBadges, otherBadges } from "@/src/constant/stacks";
import StackGroup from "../StackGroup";

export default function TechStacks() {
  return (
    <div className="space-y-2">
      <h2>Stacks</h2>
      <StackGroup
        title="Front End"
        items={feBadges}
      />
      <StackGroup
        title="Back End"
        items={beBadges}
      />
      <StackGroup
        title="Database"
        items={dbBadges}
      />
      <StackGroup
        title="Cloud & DevOps"
        items={cloudDevOpsBadges}
      />
      <StackGroup
        title="Other"
        items={otherBadges}
      />
    </div>
  );
}
