import ExternalLinkIcon from "./ExternalLinkIcon";
import Image, { StaticImageData } from "next/image";
import TechStack from "./TechStack";

type Props = {
  projectTitle: string;
  githubURL?: string;
  pageURL?: string;
  figmaURL?: string;
  description: string;
  imageData: StaticImageData;
  imageAltText: string;
  techstack: string[];
};

function ProjectEntry({
  projectTitle,
  githubURL,
  figmaURL,
  pageURL,
  description,
  imageData,
  imageAltText,
  techstack,
}: Props) {
  return (
    <div className="proj-entry mt-5 rounded-sm p-1 hover:bg-slate-200/10">
      {/* TITLE SECTION */}
      <div className="proj-entry__title flex justify-center">
        <h6 className="font-bold text-amber-500">{projectTitle}</h6>
      </div>

      {/* URL SECTION */}
      <div className="proj-entry_url mb-2 flex items-center justify-center gap-1 p-3">
        {githubURL && <ExternalLinkIcon githubURL={githubURL} />}
        {pageURL && <ExternalLinkIcon pageURL={pageURL} />}
        {figmaURL && <ExternalLinkIcon figmaURL={figmaURL} />}
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="proj-entry__description">
        <p>{description}</p>
      </div>

      {/* IMAGE SECTION */}
      <div className="proj-entry__image">
        <a href={pageURL} target="_blank" className=" hover:animate-pulse">
          <Image
            src={imageData}
            alt={imageAltText}
            className="b mx-auto rounded-sm"
          />
        </a>
      </div>

      {/* TECH STACK */}
      <TechStack techStack={techstack} />
    </div>
  );
}

export default ProjectEntry;
