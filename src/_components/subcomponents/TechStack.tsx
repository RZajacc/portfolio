import React from "react";
import TechStackPill from "./TechStackPill";

type Props = {
  techStack?: string[];
};

function TechStack({ techStack }: Props) {
  if (techStack) {
    return (
      <div className="tech_stack mt-3 flex flex-wrap">
        {techStack.map((label, idx) => {
          return <TechStackPill label={label} key={idx} />;
        })}
      </div>
    );
  }
}

export default TechStack;
