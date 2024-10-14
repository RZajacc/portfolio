import React from "react";

type Props = {
  description: string;
  gitHubText: string;
  gitHubURL: string;
  clickHereText: string;
  children?: React.ReactNode;
};

function DescriptionSection({
  description,
  gitHubText,
  gitHubURL,
  clickHereText,
  children,
}: Props) {
  return (
    <div className="proj-entry__description">
      <p>{description}</p>
      <p className="my-1 text-sm font-semibold text-fuchsia-400">
        {gitHubText}
        <a
          href={gitHubURL}
          target="_blank"
          className="cursor-myhand text-sm font-normal text-white hover:animate-pulse"
        >
          {clickHereText}!
        </a>
      </p>
      {children}
    </div>
  );
}

export default DescriptionSection;
