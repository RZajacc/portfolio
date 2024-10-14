import React from "react";
// Images
import totArtImage from "/public/totart.png";
import codeAskImage from "/public/codask.jpg";
import forkitImage from "/public/forkit.jpeg";
import marsRoverImage from "/public/mars_rover.jpeg";
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

      {/* Totart project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        {/* Project title */}
        <TitleSection
          projectUrl="https://tot-art-v-2-0.vercel.app/"
          projectTitle="totArt"
        />
        {/* Project description */}
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

        {/* Image section */}
        <ImageSection
          projectURL="https://tot-art-v-2-0.vercel.app/"
          imageData={totArtImage}
          imageAltText="Totart project image"
        />

        {/* Tech Stack section */}
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

      {/* Codask */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        {/* Project title */}
        <TitleSection
          projectUrl="https://github.com/helene-abiassi/CodaSk"
          projectTitle="CodaSk"
        />

        {/* Project description */}
        <DescriptionSection
          description={lang.Codask}
          gitHubURL="https://github.com/helene-abiassi/CodaSk"
          gitHubText={lang.gitHub}
          clickHereText={lang.clickHere}
        >
          <DescriptionLink
            label="Figma"
            url="https://www.figma.com/design/EvR6lR70uN6tXBimvGPnVR/Codask---Public?node-id=0-1&node-type=canvas&t=eiqCdGfBDypqMns4-0"
            clickText={lang.clickHere}
          />
        </DescriptionSection>

        {/* Image section */}
        <ImageSection
          projectURL="https://github.com/helene-abiassi/CodaSk"
          imageData={codeAskImage}
          imageAltText="Codask project image"
        />

        {/* Tech Stack section */}
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

      {/* Forkit it project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        {/* Project title */}
        <TitleSection
          projectUrl="https://forkitorleaveit.netlify.app/"
          projectTitle="ForkIt"
        />

        {/* Project description */}
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

        {/* Image section */}
        <ImageSection
          projectURL="https://forkitorleaveit.netlify.app/"
          imageData={forkitImage}
          imageAltText="Forkit project image"
        />

        {/* Tech Stack section */}
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

      {/* Mars rover project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        {/* Project title */}
        <TitleSection
          projectUrl="https://marsroverapp.netlify.app/"
          projectTitle="Mars Rover"
        />
        {/* Project description */}
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

        {/* Image section */}
        <ImageSection
          projectURL="https://marsroverapp.netlify.app/"
          imageData={marsRoverImage}
          imageAltText="Mars rover project image"
        />

        {/* Tech Stack section */}
        <TechStackSection
          techStack={["JavaScript", "TypeScript", "Sass", "Vitest", "Webpack"]}
        />
      </div>
    </section>
  );
}

export default Projects;
