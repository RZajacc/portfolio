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

      {/* Ecosphere PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection
          projectUrl="https://github.com/RZajacc/EcoSphere"
          projectTitle="EcoSphere"
        />

        <DescriptionSection
          description={lang.Ecosphere}
          gitHubURL="https://github.com/RZajacc/EcoSphere"
          gitHubText={lang.gitHub}
          clickHereText={lang.clickHere}
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
            "TypeScript",
            "TailwindCSS",
            "NodeJS",
            "ExpressJS",
            "PostgreSQL",
          ]}
        />
      </div>

      {/* TOTART PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection
          projectUrl="https://tot-art-v-2-0.vercel.app/"
          projectTitle="totArt"
        />

        <DescriptionSection
          description={lang.Totart}
          gitHubURL="https://github.com/RZajacc/totArt_v.2.0"
          gitHubText={lang.gitHub}
          clickHereText={lang.clickHere}
        >
          <DescriptionSpan
            label={lang.deployment}
            text="Vercel, Render (REST API)"
          />
        </DescriptionSection>

        <ImageSection
          projectURL="https://tot-art-v-2-0.vercel.app/"
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
            "Passport",
          ]}
        />
      </div>

      {/* CODASK PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        {/* Project title */}
        <TitleSection
          projectUrl="https://github.com/helene-abiassi/CodaSk"
          projectTitle="CodaSk"
        />

        <DescriptionSection
          description={lang.Codask}
          gitHubURL="https://github.com/helene-abiassi/CodaSk"
          gitHubText={lang.gitHub}
          clickHereText={lang.clickHere}
        >
          <DescriptionLink
            label="Figma"
            url="https://www.figma.com/design/EvR6lR70uN6tXBimvGPnVR/Codask---Public?node-id=0-1&node-type=canvas&t=eiqCdGfBDypqMns4-0"
            clickText={lang.clickHere + "!"}
          />
        </DescriptionSection>

        <ImageSection
          projectURL="https://github.com/helene-abiassi/CodaSk"
          imageData={codeAskImage}
          imageAltText="Codask project image"
        />

        <TechStackSection
          techStack={[
            "NextJS",
            "React",
            "TypeScript",
            "TailwindCSS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "GraphQL",
            "NextAuth",
          ]}
        />
      </div>

      {/* FORKIT PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection
          projectUrl="https://forkitorleaveit.netlify.app/"
          projectTitle="ForkIt"
        />

        <DescriptionSection
          description={lang.ForkIt}
          gitHubURL="https://github.com/RZajacc/ForkIt_2.0"
          gitHubText={lang.gitHub}
          clickHereText={lang.clickHere}
        >
          <DescriptionLink
            label={lang.data}
            url="https://spoonacular.com/food-api"
            clickText="Spoonacular API"
          />
          <DescriptionSpan label={lang.deployment} text="Neflify" />
        </DescriptionSection>

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

      {/* MARS ROVER PROJECT */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <TitleSection
          projectUrl="https://marsroverapp.netlify.app/"
          projectTitle="Mars Rover"
        />

        <DescriptionSection
          description={lang.MarsRover}
          gitHubURL="https://github.com/RZajacc/MarsRover_3.0"
          gitHubText={lang.gitHub}
          clickHereText={lang.clickHere}
        >
          <DescriptionLink
            label={lang.data}
            url="https://api.nasa.gov/"
            clickText="NASA API"
          />
          <DescriptionSpan label={lang.deployment} text="Neflify" />
        </DescriptionSection>

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
