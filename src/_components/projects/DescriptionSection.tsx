import React from "react";
import ExternalLinkIcon from "../subcomponents/ExternalLinkIcon";

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
        {githubURL && <ExternalLinkIcon githubURL={githubURL} />}
        {pageURL && <ExternalLinkIcon pageURL={pageURL} />}
        {figmaURL && <ExternalLinkIcon figmaURL={figmaURL} />}
      </div>
    </div>
  );
}

export default DescriptionSection;
