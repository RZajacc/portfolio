import Image from "next/image";
import React from "react";

type Props = {};

function Experience({}: Props) {
  return (
    <section id="experience">
      <h4 className="font-bold">EXPERIENCE</h4>
      <div className="mt-3">
        <h6 className="font-bold text-amber-500">Full Stack Web Development</h6>
        <p className="font-bold ">
          <a
            href="https://www.codeacademyberlin.com/"
            target="_blank"
            className="hover:animate-pulse"
          >
            Code Academy Berlin
          </a>
        </p>
        <small className="text-gray-400">07/2023 - 12-2023</small>
        <p>
          Full-Time on site coding bootcamp covering 840h of practical project
          based work in SCRUM methodology.
        </p>
      </div>
      <div className="mt-3">
        <h6 className="font-bold text-amber-500">Scout</h6>
        <p className="font-bold">
          <a
            href="https://www.berlin-recycling-volleys.de/"
            target="_blank"
            className="hover:animate-pulse"
          >
            Berlin Recycling Volleys
          </a>
        </p>
        <small className="text-gray-400">2019 - 2023</small>
        <p>
          A game analyst who uses self-built Python tools in his daily work to
          present data to the team in a better and more readable way.
        </p>
      </div>
    </section>
  );
}

export default Experience;
