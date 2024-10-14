import React from "react";

type Props = {
  label: string;
};

function TechStackPill({ label }: Props) {
  return (
    <span className="m-1 cursor-mycursor rounded-2xl border-2 border-amber-500 px-3 py-1 text-sm text-amber-500">
      {label}
    </span>
  );
}

export default TechStackPill;
