import React from "react";

type Props = {
  jobTitle: string;
  employer: string;
  employmentTime: string;
  description: string;
};

function ExperienceElement({
  jobTitle,
  employer,
  employmentTime,
  description,
}: Props) {
  return (
    <div className="exp-entry mt-3 rounded-sm p-1 hover:bg-slate-200/10">
      <h6 className="exp-entry__title font-bold text-amber-500">{jobTitle}</h6>
      <p className="exp-entry__location font-bold">
        <a
          href="https://www.codeacademyberlin.com/"
          target="_blank"
          className="cursor-myhand hover:animate-pulse"
        >
          {employer}
        </a>
      </p>
      <small className="exp-entry__date text-gray-400">{employmentTime}</small>
      <p className="exp-entry__description">{description}</p>
    </div>
  );
}

export default ExperienceElement;
