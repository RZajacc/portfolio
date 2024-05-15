import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <div id="header" className="lg:sticky lg:top-20 lg:h-1/3">
      <h3 className="font-bold">Rafał Zając</h3>
      <h5 className="mt-2">Junior Full Stack Developer</h5>
      <p className="mt-2 text-gray-400">
        Constantly learning something new and diving deeper into topics that
        I&apos;m already familiar with. I work mainly with MERN stack. Also
        doing my best to add German language to it.
      </p>
      <div className="mt-2 flex p-2">
        <a href={"https://www.linkedin.com/in/rafalzajac88/"} target="blank">
          <FontAwesomeIcon icon={faLinkedin} className="mr-5 w-8" />
        </a>
        <a href={"https://github.com/RZajacc"} target="blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-5 w-8"
            target="blank"
          />
        </a>
        <a href={"mailto:rf.zajac@tutamail.com"}>
          <FontAwesomeIcon icon={faEnvelope} className="w-8" target="blank" />
        </a>
      </div>
    </div>
  );
}

export default Header;
