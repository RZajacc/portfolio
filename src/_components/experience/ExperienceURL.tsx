import React from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  pageURL?: string;
  githubURL?: string;
};

function ExperienceURL({ pageURL, githubURL }: Props) {
  return (
    <a
      href={pageURL || githubURL}
      target="_blank"
      className="cursor-myhand hover:animate-pulse"
    >
      <FontAwesomeIcon
        icon={pageURL ? faGlobe : faGithub}
        className="mr-5 w-8"
      />
    </a>
  );
}

export default ExperienceURL;
