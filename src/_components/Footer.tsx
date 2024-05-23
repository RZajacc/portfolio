import React from "react";

type Props = {
  lang: string;
};

function Footer({ lang }: Props) {
  return <div className="mb-6 text-gray-400 lg:col-span-3">{lang}</div>;
}

export default Footer;
