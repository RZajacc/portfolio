import Image from "next/image";
import React from "react";
import ExperienceElement from "./experience/experienceElement";

type Props = {
  lang: {
    title: string;
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
      <ExperienceElement
        jobTitle={lang.codac.title}
        employer="Code Academy Berlin"
        employmentTime="07/2023 - 12-2023"
        description={lang.codac.desc}
      />
      <ExperienceElement
        jobTitle={lang.brv.title}
        employer="Berlin Recycling Volleys"
        employmentTime="2019 - 2023"
        description={lang.brv.desc}
      />
      <ExperienceElement
        jobTitle={lang.dg.title}
        employer="MKS Dąbrowa Górnicza"
        employmentTime="2017 - 2019"
        description={lang.dg.desc}
      />
      <ExperienceElement
        jobTitle={lang.awf.title}
        employer="Academy of Physical Education in Katowice"
        employmentTime="2016 - 2017"
        description={lang.awf.desc}
      />
    </section>
  );
}

export default Experience;
