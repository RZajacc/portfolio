import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <section id="about">
      <h4 className="font-bold">About</h4>
      <p>
        I recently graduated from{" "}
        <a
          href="https://www.codeacademyberlin.com/"
          className="font-bold text-amber-300 hover:animate-pulse"
        >
          Code Academy Berlin
        </a>{" "}
        as a{" "}
        <span className="font-bold text-fuchsia-300">
          Full Stack Web Developer
        </span>
        . It was a pretty intense five months of learning under the supervision
        of a mentor. However, it wasn&apos;t my first contact with coding.
      </p>
      <p>
        Before that I worked as a volleyball scout. My daily tasks were mainly
        focused on gathering information about other teams using a special
        software (Data Volley) where all games are represented in simple code
        form. It&apos;s a pretty powerful software, but I was missing some
        features, so I started learning{" "}
        <span className="font-bold text-fuchsia-300">Python</span> to get a bit
        more out of these files and make some changes to them automatically.
      </p>
      <p>
        That wasn&apos;t my first exposure to programming either. Prior to that,
        I had studied{" "}
        <span className="font-bold text-fuchsia-300">computer science</span> for
        two years, with <span className="font-bold text-fuchsia-300">Java</span>{" "}
        as the leading programming language. Unfortunately, I wasn&apos;t able
        to continue due to the demands of my job at the time, but I am
        considering going back.
      </p>
      <p>
        So, even though I have had a couple of approaches to programming, I have
        never seriously tried to make it my career until now. This time I have
        decided to go all in!
      </p>
    </section>
  );
}

export default About;
