import React from "react";

type Props = {
  label: string;
  url: string;
  clickText: string;
};

function DescriptionLink({ label, url, clickText }: Props) {
  return (
    <p className="my-1 text-sm font-semibold text-fuchsia-400">
      {label}:{" "}
      <a
        href={url}
        target="_blank"
        className="cursor-myhand text-sm font-normal text-white hover:animate-pulse"
      >
        {clickText}
      </a>
    </p>
  );
}

export default DescriptionLink;
