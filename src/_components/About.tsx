import React from "react";

type Props = {
  lang: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5: string;
    p6: string;
    p7: string;
    p8: string;
    p9: string;
    p10: string;
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
      <p className="mt-2">{lang.p5}</p>
      <p className="mt-2">{lang.p6}</p>
      <p className="mt-2">{lang.p7}</p>
      <p className="mt-2 font-bold">{lang.p8}</p>
      <p className="mt-2">{lang.p9}</p>
      <p className="mt-2">{lang.p10}</p>
    </section>
  );
}

export default About;
