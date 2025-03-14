import Image from "next/image";
import React from "react";
import linkIcon from "/public/link-icon.svg";

type Props = {
  projectTitle: string;
};

function ProjectTitle({ projectTitle }: Props) {
  return (
    <div className="proj-entry__title flex justify-center">
      <h6 className="font-bold text-amber-500">{projectTitle}</h6>
    </div>
  );
}

export default ProjectTitle;
