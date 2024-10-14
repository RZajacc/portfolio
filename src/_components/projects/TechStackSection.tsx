import React from "react";
import TechStackPill from "./TechStackPill";

type Props = {
  techStack: string[];
};

function TechStack({ techStack }: Props) {
  return (
    <div className="proj-entry__stack mt-3 flex flex-wrap">
      {techStack.map((label) => {
        return <TechStackPill label={label} />;
      })}
    </div>
  );
}

export default TechStack;
