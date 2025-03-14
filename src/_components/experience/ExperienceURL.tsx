import React from "react";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faFigma, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  pageURL?: string;
  githubURL?: string;
  figmaURL?: string;
};

function ExperienceURL({ pageURL, githubURL, figmaURL }: Props) {
  return (
    <a
      href={pageURL || githubURL || figmaURL}
      target="_blank"
      className="cursor-myhand hover:animate-pulse"
    >
      <FontAwesomeIcon
        icon={pageURL ? faGlobe : githubURL ? faGithub : faFigma}
        className="mr-5 h-8 w-8"
      />
    </a>
  );
}

export default ExperienceURL;
