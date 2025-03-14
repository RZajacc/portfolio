import React from "react";
// Images
import totArtImage from "/public/totart.png";
import codeAskImage from "/public/codask.jpg";
import forkitImage from "/public/forkit.jpeg";
import marsRoverImage from "/public/mars_rover.jpeg";
import ecosphereImage from "/public/ecosphere.png";
// Project sections
import TitleSection from "./projects/TitleSection";
import TechStackSection from "./projects/TechStackSection";
import ImageSection from "./projects/ImageSection";
import DescriptionSection from "./projects/DescriptionSection";
import DescriptionSpan from "./projects/DescriptionSpan";
import DescriptionLink from "./projects/DescriptionLink";

type Props = {
  lang: {
    title: string;
    gitHub: string;
    deployment: string;
    clickHere: string;
    data: string;
    Ecosphere: string;
    Totart: string;
    MarsRover: string;
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
          pageURL="http://ec2-3-87-231-53.compute-1.amazonaws.com:3001/"
          figmaURL="https://www.figma.com/design/EvR6lR70uN6tXBimvGPnVR/Codask---Public?node-id=0-1&node-type=canvas&t=eiqCdGfBDypqMns4-0"
        >
          <p className=" py-1 text-lg text-red-500">Ongoing project!</p>
        </DescriptionSection>

        <ImageSection
          projectURL="http://ec2-3-87-231-53.compute-1.amazonaws.com:3001/"
          imageData={codeAskImage}
          imageAltText="Codask project image"
        />

        <TechStackSection
          techStack={[
            "NextJS",
            "Next-Auth",
            "React",
            "TypeScript",
            "TailwindCSS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "GraphQL",
            "Docker",
            "Jest",
            "Playwright",
            "Github Actions",
            "AWS",
          ]}
        />
      </div>

      {/* TOTART PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection projectTitle="TotArt" />

        <DescriptionSection
          description={lang.Totart}
          githubURL="https://github.com/RZajacc/totArt_v.2.0"
          pageURL="http://ec2-3-87-231-53.compute-1.amazonaws.com:3000/"
        />

        <ImageSection
          projectURL="http://ec2-3-87-231-53.compute-1.amazonaws.com:3000/"
          imageData={totArtImage}
          imageAltText="Totart project image"
        />

        <TechStackSection
          techStack={[
            "NextJS",
            "React",
            "SWR",
            "TypeScript",
            "TailwindCSS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "JWT",
            "Docker",
            "AWS",
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

      {/* Ecosphere PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection projectTitle="EcoSphere" />

        <DescriptionSection
          description={lang.Ecosphere}
          githubURL="https://github.com/RZajacc/EcoSphere"
        />

        <ImageSection
          projectURL="https://github.com/RZajacc/EcoSphere"
          imageData={ecosphereImage}
          imageAltText="EcoSphere project image"
        />

        <TechStackSection
          techStack={[
            "NextJS",
            "React",
            "SWR",
            "ZOD",
            "TypeScript",
            "TailwindCSS",
            "NodeJS",
            "ExpressJS",
            "PostgreSQL",
            "JWT",
            "Google Cloud Storage",
          ]}
        />
      </div>

      {/* MARS ROVER PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection projectTitle="Mars Rover" />

        <DescriptionSection
          description={lang.MarsRover}
          githubURL="https://github.com/RZajacc/MarsRover_3.0"
          pageURL="https://marsroverapp.netlify.app/"
        />

        <ImageSection
          projectURL="https://marsroverapp.netlify.app/"
          imageData={marsRoverImage}
          imageAltText="Mars rover project image"
        />

        <TechStackSection
          techStack={["JavaScript", "TypeScript", "Sass", "Vitest", "Webpack"]}
        />
      </div>
    </section>
  );
}

export default Projects;
