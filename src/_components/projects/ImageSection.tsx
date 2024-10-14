import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  projectURL: string;
  imageData: StaticImageData;
  imageAltText: string;
};

function ImageSection({ projectURL, imageData, imageAltText }: Props) {
  return (
    <div className="proj-entry__image mt-3">
      <a
        href={projectURL}
        target="_blank"
        className="cursor-myhand hover:animate-pulse"
      >
        <Image
          src={imageData}
          alt={imageAltText}
          className="b mx-auto rounded-sm"
        />
      </a>
    </div>
  );
}

export default ImageSection;
