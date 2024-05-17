import React from "react";
import x from "/public/favicon2.svg";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <section id="about">
      <p>ABOUT</p>
      <Image src={x} alt="x" />
      <p className="italic">
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
