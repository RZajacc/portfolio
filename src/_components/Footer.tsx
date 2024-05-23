import React from "react";

type Props = {
  lang: string;
};

function Footer({ lang }: Props) {
  return (
    <div className="mb-6 text-gray-400 lg:col-span-3">
      {lang}
      {/* <span className="font-bold text-gray-300"> NextJS</span>, {lang.and}
      <span className="font-bold text-gray-300"> React</span>. {lang.style}
      <span className="font-bold text-gray-300"> TailwindCSS </span>
      {lang.deploy} <span className="font-bold text-gray-300"> Vercel</span>.{" "}
      {lang.end} */}
    </div>
  );
}

export default Footer;
