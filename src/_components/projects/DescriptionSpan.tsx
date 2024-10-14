import React from "react";

type Props = {
  label: string;
  text: string;
};

function DescriptionSpan({ label, text }: Props) {
  return (
    <p className="my-1 text-sm font-semibold text-fuchsia-400">
      {label} <span className="text-sm font-normal text-white">{text}</span>
    </p>
  );
}

export default DescriptionSpan;
