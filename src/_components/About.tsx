import React from "react";

type Props = {
  lang: {
    title: string;
    p1: {
      part1: string;
      part2: string;
      part3: string;
    };
    p2: {
      part1: string;
      part2: string;
    };
    p3: {
      part1: string;
      part2: string;
      part3: string;
      part4: string;
    };
    p4: string;
  };
};

function About({ lang }: Props) {
  return (
    <section id="about">
      <h4 className="font-bold">{lang.title}</h4>
      <p>
        {lang.p1.part1}
        <a
          href="https://www.codeacademyberlin.com/"
          className="font-bold hover:animate-pulse"
          target="_blank"
        >
          Code Academy Berlin
        </a>
        {lang.p1.part2}
        <span className="font-bold text-fuchsia-400">
          Full Stack Web Developer
        </span>
        {lang.p1.part3}
      </p>
      <p>
        {lang.p2.part1}
        <span className="font-bold text-fuchsia-400">Python</span>
        {lang.p2.part2}
      </p>
      <p>
        {lang.p3.part1}
        <span className="font-bold text-fuchsia-400">{lang.p3.part2}</span>{" "}
        {lang.p3.part3} <span className="font-bold text-fuchsia-400">Java</span>{" "}
        {lang.p3.part4}
      </p>
      <p>{lang.p4}</p>
    </section>
  );
}

export default About;
