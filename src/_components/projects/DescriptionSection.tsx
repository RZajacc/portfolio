import React from "react";
import ExperienceURL from "../experience/ExperienceURL";

type Props = {
  description: string;
  // githubText: string;
  githubURL?: string;
  pageURL?: string;
  figmaURL?: string;
  children?: React.ReactNode;
};

function DescriptionSection({
  description,
  githubURL,
  pageURL,
  figmaURL,
  children,
}: Props) {
  return (
    <div className="proj-entry__description">
      {children}
      <p>{description}</p>
      <div className="flex justify-center gap-5 p-3">
        {githubURL && <ExperienceURL githubURL={githubURL} />}
        {pageURL && <ExperienceURL pageURL={pageURL} />}
        {figmaURL && <ExperienceURL figmaURL={figmaURL} />}
      </div>
    </div>
  );
}

export default DescriptionSection;
