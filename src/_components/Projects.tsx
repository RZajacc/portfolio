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

type Props = {
  lang: {
    title: string;
    click: string;
    here: string;
    git: string;
    state_title: string;
    MarsRover: string;
    ForkIt: string;
    Totart: {
      desc: string;
      state: string;
    };
    Codask: {
      desc: string;
      state: string;
    };
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
        <p className="proj-entry__description">
          {lang.Totart.desc}
          {lang.click}
          <a
            href="https://github.com/RZajacc/totArt_v.2.0"
            target="_blank"
            className="font-bold hover:animate-pulse"
          >
            {lang.here}
          </a>{" "}
          {lang.git}
        </p>

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
        <p className="proj-entry__description">{lang.Codask.desc}</p>

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
        <p className="proj-entry__description">
          {lang.ForkIt}
          <a
            href="https://spoonacular.com/food-api/"
            target="_blank"
            className="cursor-myhand font-bold hover:animate-pulse"
          >
            Spoonacular API
          </a>
          {lang.click}
          <a
            href="https://github.com/RZajacc/ForkIt_2.0"
            target="_blank"
            className="font-bold hover:animate-pulse"
          >
            {lang.here}
          </a>{" "}
          {lang.git}
        </p>

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
        <p className="proj-entry__description">
          {lang.MarsRover}
          <a
            href="https://api.nasa.gov/"
            target="_blank"
            className="cursor-myhand font-bold hover:animate-pulse"
          >
            NASA API
          </a>
          {lang.click}
          <a
            href="https://github.com/RZajacc/MarsRover_3.0"
            target="_blank"
            className="font-bold hover:animate-pulse"
          >
            {lang.here}
          </a>
          {lang.git}
        </p>

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
