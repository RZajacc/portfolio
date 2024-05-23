import Image from "next/image";
import React from "react";
import linkIcon from "/public/link-icon.svg";
import marsRover from "/public/mars_rover.jpeg";
import forkit from "/public/forkit.jpeg";
import totart from "/public/totart.jpg";
import codask from "/public/codask.jpg";

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
      target: string;
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
      {/* Mars rover project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <div className="proj-entry__title flex justify-center ">
          <h6 className="font-bold">
            <a
              href="https://marsroverapp.netlify.app/"
              className="flex hover:animate-pulse"
              target="blank"
            >
              Mars Rover <Image src={linkIcon} alt="link-icon" />
            </a>
          </h6>
        </div>
        <p className="proj-entry__description">
          {lang.MarsRover}
          <a
            href="https://api.nasa.gov/"
            target="_blank"
            className="font-bold hover:animate-pulse"
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
        <div className="proj-entry__image mt-3">
          <a
            href="https://marsroverapp.netlify.app/"
            className="hover:animate-pulse"
            target="_blank"
          >
            <Image
              src={marsRover}
              alt="mars-rover-page-image"
              className="b mx-auto rounded-sm"
            />
          </a>
        </div>
        <div className="proj-entry__stack mt-3 flex flex-wrap">
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            JavaScript
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            SCSS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Vitest
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Webpack
          </button>
        </div>
      </div>
      {/* Forkit it project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <div className="proj-entry__title flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://forkitorleaveit.netlify.app/"
              target="_blank"
              className="flex hover:animate-pulse"
            >
              ForkIt <Image src={linkIcon} alt="link-icon" />
            </a>
          </h6>
        </div>
        <p className="proj-entry__description">
          {lang.ForkIt}
          <a
            href="https://spoonacular.com/food-api/"
            target="_blank"
            className="font-bold hover:animate-pulse"
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
        <div className="proj-entry__image mt-3">
          <a
            href="https://forkitorleaveit.netlify.app/"
            className="hover:animate-pulse"
            target="_blank"
          >
            <Image
              src={forkit}
              alt="mars-rover-page-image"
              className="b mx-auto rounded-sm"
            />
          </a>
        </div>
        <div className="proj-entry__stack mt-3 flex flex-wrap">
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            React
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            SCSS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Firebase
          </button>
        </div>
      </div>
      {/* Totart project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <div className="proj-entry__title flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://github.com/RZajacc/totArt"
              className="flex hover:animate-pulse"
              target="blank"
            >
              Totart <Image src={linkIcon} alt="link-icon" />
            </a>
          </h6>
        </div>
        <p className="proj-entry__description">{lang.Totart.desc}</p>
        {/* Current state */}
        <div className="proj-entry__state">
          <h6 className="mt-2 font-bold text-fuchsia-500">
            {lang.state_title}
          </h6>
          <p>{lang.Totart.state}</p>
          <p className="text-gray-400">
            <span className="font-bold">{lang.Totart.target}</span> NextJS,
            React, Typescript, TailwindCSS, NodeJS, ExpressJS, MongoDB, GraphQL
          </p>
        </div>
        <div className="proj-entry__image mt-3">
          <a
            href="https://github.com/RZajacc/totArt"
            target="_blank"
            className="hover:animate-pulse"
          >
            <Image
              src={totart}
              alt="mars-rover-page-image"
              className="b mx-auto rounded-sm"
            />
          </a>
        </div>
        <div className="proj-entry__stack mt-3 flex flex-wrap">
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            React
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Bootstrap
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NodeJS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            ExpressJS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            MongoDB
          </button>
        </div>
      </div>
      {/* Codask */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <div className="proj-entry__title flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://github.com/helene-abiassi/CodaSk"
              className="flex hover:animate-pulse"
              target="blank"
            >
              Codask <Image src={linkIcon} alt="link-icon" />
            </a>
          </h6>
        </div>
        <p className="proj-entry__description">{lang.Codask.desc}</p>
        {/* Current state */}
        <div className="proj-entry__state">
          <h6 className="mt-2 font-bold text-fuchsia-500">
            {lang.state_title}
          </h6>
          <p>{lang.Codask.state}</p>
        </div>
        <div className="proj-entry__image mt-3">
          <a
            href="https://github.com/helene-abiassi/CodaSk"
            target="_blank"
            className="hover:animate-pulse"
          >
            <Image
              src={codask}
              alt="mars-rover-page-image"
              className="b mx-auto rounded-sm"
            />
          </a>
        </div>
        <div className="proj-entry__stack mt-3 flex flex-wrap">
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NextJS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            React
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TailwindCSS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NodeJS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            ExpressJS
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            MongoDB
          </button>
          <button className="m-1 rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            GraphQL
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
