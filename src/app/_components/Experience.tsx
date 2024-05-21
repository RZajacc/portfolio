import Image from "next/image";
import React from "react";

type Props = {};

function Experience({}: Props) {
  return (
    <section id="experience">
      <h4 className="font-bold">EXPERIENCE</h4>
      <div className="exp-entry mt-3 rounded-sm p-1 hover:bg-slate-200/10">
        <h6 className="exp-entry__title font-bold text-amber-500">
          Full Stack Web Development
        </h6>
        <p className="exp-entry__location font-bold">
          <a
            href="https://www.codeacademyberlin.com/"
            target="_blank"
            className="hover:animate-pulse"
          >
            Code Academy Berlin
          </a>
        </p>
        <small className="exp-entry__date text-gray-400">
          07/2023 - 12-2023
        </small>
        <p className="exp-entry__description">
          Full-Time on site coding bootcamp covering 840h of practical project
          based work in SCRUM methodology.
        </p>
      </div>
      <div className="exp-entry mt-3 rounded-sm p-1 hover:bg-slate-200/10">
        <h6 className="exp-entry__title font-bold text-amber-500">Scout</h6>
        <p className="exp-entry__location font-bold">
          <a
            href="https://www.berlin-recycling-volleys.de/"
            target="_blank"
            className="hover:animate-pulse"
          >
            Berlin Recycling Volleys
          </a>
        </p>
        <small className="exp-entry__date text-gray-400">2019 - 2023</small>
        <p className="exp-entry__description">
          A game analyst who uses self-built Python tools in his daily work to
          present data to the team in a better and more readable way.
        </p>
      </div>
    </section>
  );
}

export default Experience;
