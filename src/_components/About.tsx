import React from "react";

type Props = {
  lang: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
  };
};

function About({ lang }: Props) {
  return (
    <section id="about">
      <h4 className="font-bold">{lang.title}</h4>
      <p className="my-2 indent-7">{lang.p1}</p>
      <p className="my-2 ">{lang.p2}</p>
      <p className="my-2">{lang.p3}</p>
      <p className="mt-2">{lang.p4}</p>
    </section>
  );
}

export default About;
