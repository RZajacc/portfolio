import React from "react";

type Props = {};

function Footer({}: Props) {
  return (
    <div className="mb-6 text-gray-400">
      And finally the project you are currently looking at. It was built with
      <span className="font-bold text-gray-300"> NextJS</span>, and{" "}
      <span className="font-bold text-gray-300">React</span>. Styled with{" "}
      <span className="font-bold text-gray-300">TailwindCSS</span> and deployed
      on <span className="font-bold text-gray-300">Vercel</span>. Hope you like
      it!
    </div>
  );
}

export default Footer;
