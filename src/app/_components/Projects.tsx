import Image from "next/image";
import React from "react";
import linkIcon from "/public/link-icon.svg";
import marsRover from "/public/mars_rover.jpeg";
import forkit from "/public/forkit.jpeg";

type Props = {};

function Projects({}: Props) {
  return (
    <section id="projects">
      <h4 className="font-bold">PROJECTS</h4>
      {/* Mars rover project */}
      <div className="mt-5">
        <div className="flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://marsroverapp.netlify.app/"
              className="hover:animate-pulse"
              target="blank"
            >
              Mars Rover
            </a>
          </h6>
          <Image src={linkIcon} alt="link-icon" />
        </div>
        <p>
          Web application for people interested in space exploration. Users can
          search and view images of selected Mars rovers retrieved from the{" "}
          <a
            href="https://api.nasa.gov/"
            target="_blank"
            className="font-bold hover:animate-pulse"
          >
            NASA API
          </a>
          . If you want to have a look at the code click{" "}
          <a
            href="https://github.com/RZajacc/MarsRover_3.0"
            target="_blank"
            className="font-bold hover:animate-pulse"
          >
            here
          </a>{" "}
          to see the corresponding Github repository.
        </p>
        <div className="mt-3">
          <Image
            src={marsRover}
            alt="mars-rover-page-image"
            width={250}
            className="b mx-auto rounded-xl"
          />
        </div>
        <div className="mt-3 flex flex-wrap">
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
      <div className="mt-5">
        <div className="flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://forkitorleaveit.netlify.app/"
              target="_blank"
              className="hover:animate-pulse"
            >
              ForkIt
            </a>
          </h6>
          <Image src={linkIcon} alt="link-icon" />
        </div>
        <p>
          Food blog-style web application that allows users to browse and save
          their favourite recipes. Based on the{" "}
          <a
            href="https://spoonacular.com/food-api/"
            target="_blank"
            className="font-bold hover:animate-pulse"
          >
            Spoonacular API
          </a>
          . If you want to have a look at the code click{" "}
          <a
            href="https://github.com/RZajacc/ForkIt_2.0"
            target="_blank"
            className="font-bold hover:animate-pulse"
          >
            here
          </a>{" "}
          to see the corresponding Github repository.
        </p>
        <div className="mt-3">
          <Image
            src={forkit}
            alt="mars-rover-page-image"
            width={250}
            className="b mx-auto rounded-xl"
          />
        </div>
        <div className="mt-3 flex flex-wrap ">
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
      <div className="mt-5">
        <div className="flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://github.com/RZajacc/totArt"
              className="hover:animate-pulse"
              target="blank"
            >
              Totart
            </a>
          </h6>
          <Image src={linkIcon} alt="link-icon" />
        </div>
        <p>
          Web application that allows its users to create and share content
          about interesting but lesser-known places in Berlin.
        </p>
        {/* Current state */}
        <div>
          <h6 className="mt-2 font-bold text-fuchsia-500">
            Current state of the app:
          </h6>
          <p>
            It is currently being refactored in a different repository than the
            one linked to. The changes will be quite large, ranging from
            application functionality to improving the stack. The current stack
            is as shown in the bullet points below. Target stack:
          </p>
          <ul className="list-inside list-disc px-3">
            <li>NextJS</li>
            <li>React</li>
            <li>Typescript</li>
            <li>TailwindCSS</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
          </ul>
        </div>
        {/* To inlcunde later */}
        {/* <div className="mt-3">
          <Image
            src={marsRover}
            alt="mars-rover-page-image"
            width={250}
            className="b mx-auto rounded-xl"
          />
        </div> */}
        <div className="mt-3 flex flex-wrap">
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
      <div className="mt-5">
        <div className="flex justify-center">
          <h6 className="font-bold">
            <a
              href="https://github.com/helene-abiassi/CodaSk"
              className="hover:animate-pulse"
              target="blank"
            >
              Codask
            </a>
          </h6>
          <Image src={linkIcon} alt="link-icon" />
        </div>
        <p>
          A collaborative project that aims to create an online platform for
          Code Academy students to share knowledge and help each other solve
          problems.
        </p>
        {/* Current state */}
        <div>
          <h6 className="mt-2 font-bold text-fuchsia-500">
            Current state of the app:
          </h6>
          <p>
            This application is not yet fully functional or responsive, so in
            this case it will be a continuation of work rather than a
            refactoring.
          </p>
        </div>
        {/* To inlcunde later */}
        {/* <div className="mt-3">
          <Image
            src={marsRover}
            alt="mars-rover-page-image"
            width={250}
            className="b mx-auto rounded-xl"
          />
        </div> */}
        <div className="mt-3 flex flex-wrap">
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
