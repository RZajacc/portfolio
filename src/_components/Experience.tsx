import React from "react";
import ExperienceEntry from "./experience/ExperienceEntry";

type Props = {
  lang: {
    title: string;
    sensorfarm: {
      title: string;
      dateTo: string;
      desc: string;
    };
    codac: {
      title: string;
      desc: string;
    };
    brv: {
      title: string;
      desc: string;
    };
    dg: {
      title: string;
      desc: string;
    };
    awf: {
      title: string;
      desc: string;
    };
  };
};

function Experience({ lang }: Props) {
  return (
    <section id="experience">
      <h4 className="font-bold">{lang.title}</h4>
      {/* ======= SENSORFARM ======= */}
      <ExperienceEntry
        jobTitle={lang.sensorfarm.title}
        employer="Sensorfarm Polska"
        employmentTime={`04/2025 - ${lang.sensorfarm.dateTo}`}
        description={lang.sensorfarm.desc}
        pageURL="https://sensorfarm.pl/"
        techStack={[
          "React",
          "Typescript",
          "Zustand",
          "NestJS",
          "Node.js",
          "MySQL",
          "TypeORM",
          "Docker",
          "Jest",
          "React Testing Library",
        ]}
      />
      {/* ======= BRVOLLEYS ======= */}
      <ExperienceEntry
        jobTitle={lang.brv.title}
        employer="Berlin Recycling Volleys"
        employmentTime="2019 - 2023"
        description={lang.brv.desc}
        pageURL="https://www.berlin-recycling-volleys.de/"
        githubURL="https://github.com/RZajacc/VertData"
      />
      {/* ======= MKS DG ======= */}
      <ExperienceEntry
        jobTitle={lang.dg.title}
        employer="MKS Dąbrowa Górnicza"
        employmentTime="2017 - 2019"
        description={lang.dg.desc}
      />
      {/* ======= AWF ======= */}
      <ExperienceEntry
        jobTitle={lang.awf.title}
        employer="Academy of Physical Education in Katowice"
        employmentTime="2016 - 2017"
        description={lang.awf.desc}
        pageURL="https://awf.katowice.pl/"
        githubURL="https://github.com/RZajacc/ForcePlatform"
      />
    </section>
  );
}

export default Experience;
