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
      {/* Codask */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <div className="proj-entry__title flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://github.com/helene-abiassi/CodaSk"
              className="flex cursor-myhand hover:animate-pulse"
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
            className="cursor-myhand hover:animate-pulse"
          >
            <Image
              src={codask}
              alt="mars-rover-page-image"
              className="b mx-auto rounded-sm"
            />
          </a>
        </div>
        <div className="proj-entry__stack mt-3 flex flex-wrap">
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NextJS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            React
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TailwindCSS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NodeJS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            ExpressJS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            MongoDB
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            GraphQL
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NextAuth
          </button>
        </div>
      </div>
      {/* Totart project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <div className="proj-entry__title flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://github.com/RZajacc/totArt_v.2.0"
              className="flex cursor-myhand hover:animate-pulse"
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
        </div>
        <div className="proj-entry__image mt-3">
          <a
            href="https://github.com/RZajacc/totArt_v.2.0"
            target="_blank"
            className="cursor-myhand hover:animate-pulse"
          >
            <Image
              src={totart}
              alt="mars-rover-page-image"
              className="b mx-auto rounded-sm"
            />
          </a>
        </div>
        <div className="proj-entry__stack mt-3 flex flex-wrap">
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NextJS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            React
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TailwindCSS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            NodeJS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            ExpressJS
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            MongoDB
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            JWT
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Passport
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
              className="flex cursor-myhand hover:animate-pulse"
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
        <div className="proj-entry__image mt-3">
          <a
            href="https://forkitorleaveit.netlify.app/"
            className="cursor-myhand hover:animate-pulse"
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
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            React
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Sass
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Firebase
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Vite
          </button>
        </div>
      </div>
      {/* Mars rover project */}
      <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
        <div className="proj-entry__title flex justify-center ">
          <h6 className="font-bold">
            <a
              href="https://marsroverapp.netlify.app/"
              className="flex cursor-myhand hover:animate-pulse"
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
        <div className="proj-entry__image mt-3">
          <a
            href="https://marsroverapp.netlify.app/"
            className="cursor-myhand hover:animate-pulse"
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
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            JavaScript
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            TypeScript
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Sass
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Vitest
          </button>
          <button className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
            Webpack
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
