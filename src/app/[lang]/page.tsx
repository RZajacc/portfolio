import About from "../../_components/About";
import Experience from "../../_components/Experience";
import Projects from "../../_components/Projects";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import { Locale, getDictionary } from "./dictionaries";
import NavBar from "@/_components/NavBar";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: Props) {
  const intl = await getDictionary(lang);
  return (
    <div
      id="page-grid-container"
      className="mx-auto mt-3 max-w-3xl p-2 lg:max-w-4xl"
    >
      <NavBar lang={intl.navbar} />
      <Header lang={intl.header} />
      <About lang={intl.about} />
      <Experience lang={intl.experience} />
      <Projects lang={intl.projects} />
      <Footer lang={intl.footer} />
    </div>
  );
}
