import React from "react";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import linkIcon from "/public/link-icon.svg";
import Image from "next/image";

type Props = {};

function Header({ intl }: Props) {
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
        <a
          href={"https://www.linkedin.com/in/rafalzajac88/"}
          target="_blank"
          className="hover:animate-pulse"
        >
          <FontAwesomeIcon icon={faLinkedin} className="mr-5 w-8" />
        </a>
        <a
          href={"https://github.com/RZajacc"}
          target="_blank"
          className="hover:animate-pulse"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="mr-5 w-8"
            target="blank"
          />
        </a>
        <a
          href={"mailto:rf.zajac@tutamail.com"}
          className="hover:animate-pulse"
        >
          <FontAwesomeIcon icon={faEnvelope} className="w-8" target="_blank" />
        </a>
      </div>
      <div className="mt-4">
        <a
          href="./RafalZajacResume.pdf"
          target="_blank"
          className="flex cursor-none text-xl hover:animate-pulse"
        >
          View Full Résumé <Image src={linkIcon} alt="link-icon" />
        </a>

        {/* !  */}
      </div>
    </div>
  );
}

export default Header;
