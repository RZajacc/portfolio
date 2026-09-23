import React from "react";
// Images
import codeAskImage from "/public/codask.jpg";
import forkitImage from "/public/forkit.jpeg";
// Project sections
import ProjectEntry from "./subcomponents/ProjectEntry";

type Props = {
  lang: {
    title: string;
    gitHub: string;
    deployment: string;
    clickHere: string;
    data: string;
    ForkIt: string;
    Codask: string;
  };
};

function Projects({ lang }: Props) {
  return (
    <section id="projects">
      <h4 className="font-bold">{lang.title}</h4>

      {/* CODASK PROJECT */}
      <ProjectEntry
        projectTitle="Codask"
        githubURL="https://github.com/RZajacc/CodaSk"
        pageURL="https://codask.org/"
        figmaURL="https://www.figma.com/design/EvR6lR70uN6tXBimvGPnVR/Codask---Public?node-id=0-1&node-type=canvas&t=eiqCdGfBDypqMns4-0"
        description={lang.Codask}
        imageData={codeAskImage}
        imageAltText="Codask project image"
        techstack={[
          "React",
          "TypeScript",
          "TailwindCSS",
          "React-Hook-Form",
          "Zod",
          "NestJS",
          "MongoDB",
          "Docker",
          "Github Actions",
          "AWS",
          "S3",
          "Cloudfront",
          "Route53",
          "Lambda",
          "ApiGateway",
        ]}
      />

      {/* FORKIT PROJECT */}
      <ProjectEntry
        projectTitle="ForkIt"
        githubURL="https://github.com/RZajacc/ForkIt_2.0"
        pageURL="https://forkitorleaveit.netlify.app/"
        description={lang.ForkIt}
        imageData={forkitImage}
        imageAltText="Forkit project image"
        techstack={[
          "React",
          "React-router",
          "TypeScript",
          "Sass",
          "Firebase",
          "Vite",
        ]}
      />
    </section>
  );
}

export default Projects;
