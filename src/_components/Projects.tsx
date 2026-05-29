import React from "react";
// Images
import codeAskImage from "/public/codask.jpg";
import forkitImage from "/public/forkit.jpeg";
// Project sections
import TitleSection from "./projects/TitleSection";
import TechStackSection from "./projects/TechStackSection";
import ImageSection from "./projects/ImageSection";
import DescriptionSection from "./projects/DescriptionSection";

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
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        {/* Project title */}
        <TitleSection projectTitle="CodaSk" />

        <DescriptionSection
          description={lang.Codask}
          githubURL="https://github.com/RZajacc/CodaSk"
          pageURL="https://codask.org/"
          figmaURL="https://www.figma.com/design/EvR6lR70uN6tXBimvGPnVR/Codask---Public?node-id=0-1&node-type=canvas&t=eiqCdGfBDypqMns4-0"
        >
          <p className=" py-1 text-lg text-red-500">Ongoing project</p>
        </DescriptionSection>

        <ImageSection
          projectURL="http://ec2-3-87-231-53.compute-1.amazonaws.com:3001/"
          imageData={codeAskImage}
          imageAltText="Codask project image"
        />

        <TechStackSection
          techStack={[
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
      </div>

      {/* FORKIT PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection projectTitle="ForkIt" />

        <DescriptionSection
          description={lang.ForkIt}
          githubURL="https://github.com/RZajacc/ForkIt_2.0"
          pageURL="https://forkitorleaveit.netlify.app/"
        />

        <ImageSection
          projectURL="https://forkitorleaveit.netlify.app/"
          imageData={forkitImage}
          imageAltText="Forkit project image"
        />

        <TechStackSection
          techStack={[
            "React",
            "React-router",
            "TypeScript",
            "Sass",
            "Firebase",
            "Vite",
          ]}
        />
      </div>

    </section>
  );
}

export default Projects;
