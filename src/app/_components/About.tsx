import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <section id="about" className="">
      {/* READ FROM 3 EXAMPLES */}
      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        className="border-2 border-solid border-white bg-slate-900 fill-none stroke-2"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        {/* Container square */}
        <line x1="1" y1="1" x2="23" y2="1" className="stroke-pink-600" />
        <line x1="1" y1="1" x2="1" y2="23" className="stroke-pink-600" />
        <line x1="23" y1="1" x2="23" y2="23" className="stroke-slate-400" />
        <line x1="1" y1="23" x2="23" y2="23" className="stroke-slate-400" />
        {/* Initials */}
        <polyline
          points="4 18, 4 6, 10 6, 10 12, 4 12, 10 18"
          className="stroke-slate-400"
        />
        <polyline
          points="14 6, 20 6, 14 18, 20 18"
          className="stroke-pink-600"
        />
      </svg>

      <svg
        viewBox="0 0 24 24"
        width="64"
        height="64"
        className="border-2 border-solid border-white bg-slate-900 fill-none stroke-2"
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path
          className="stroke-slate-50"
          d="M 18 14
      v 6
      a 2 2 0 0 1 -2 2
      H 6
      a 2 2 0 0 1 -2 -2
      V 10
      a 2 2 0 0 1 2 -2
      H 12"
        />
        <line x1="12" y1="14" x2="20" y2="6" className="stroke-slate-50" />
        <polyline points="16 5.5, 20 5.5, 20 9.5" className="stroke-slate-50" />
      </svg>

      <p>ABOUT</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
        similique fugit rerum autem iste, velit aliquam, quia vitae alias quae
        ducimus explicabo quas error magnam aspernatur ab perferendis quidem
        facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
        similique fugit rerum autem iste, velit aliquam, quia vitae alias quae
        ducimus explicabo quas error magnam aspernatur ab perferendis quidem
        facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
        similique fugit rerum autem iste, velit aliquam, quia vitae alias quae
        ducimus explicabo quas error magnam aspernatur ab perferendis quidem
        facilis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
        similique fugit rerum autem iste, velit aliquam, quia vitae alias quae
        ducimus explicabo quas error magnam aspernatur ab perferendis quidem
        facilis.
      </p>
    </section>
  );
}

export default About;
