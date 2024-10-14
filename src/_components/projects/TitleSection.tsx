import Image from "next/image";
import React from "react";
import linkIcon from "/public/link-icon.svg";

type Props = {
  projectUrl: string;
  projectTitle: string;
};

function ProjectTitle({ projectUrl, projectTitle }: Props) {
  return (
    <div className="proj-entry__title flex justify-center">
      <h6 className="font-bold">
        <a
          href={projectUrl}
          className="flex cursor-myhand hover:animate-pulse"
          target="blank"
        >
          {projectTitle} <Image src={linkIcon} alt="link-icon" />
        </a>
      </h6>
    </div>
  );
}

export default ProjectTitle;
