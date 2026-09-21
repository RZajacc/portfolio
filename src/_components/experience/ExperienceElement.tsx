import React from "react";
import ExperienceURL from "./ExperienceURL";
import TechStackSection from "../projects/TechStackSection";

type Props = {
  jobTitle: string;
  employer: string;
  employmentTime: string;
  description: string;
  pageURL?: string;
  githubURL?: string;
  techStack?: string[];
};

function ExperienceElement({
  jobTitle,
  employer,
  employmentTime,
  description,
  pageURL,
  githubURL,
  techStack,
}: Props) {
  return (
    <div className="exp-entry mt-3 rounded-sm p-1 hover:bg-slate-200/10">
      <h6 className="exp-entry__title font-bold text-amber-500">{jobTitle}</h6>
      <p className="exp-entry__location font-bold">{employer}</p>
      <small className="exp-entry__date text-gray-400">{employmentTime}</small>
      <div className="exp-entry__url">
        {pageURL && <ExperienceURL pageURL={pageURL} />}
        {githubURL && <ExperienceURL githubURL={githubURL} />}
      </div>
      <p className="exp-entry__description mt-2 whitespace-pre-line indent-7">
        {description}
      </p>
      <TechStackSection techStack={techStack} />
    </div>
  );
}

export default ExperienceElement;
