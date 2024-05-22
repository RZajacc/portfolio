import About from "../../_components/About";
import Experience from "../../_components/Experience";
import Projects from "../../_components/Projects";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import { Locale, getDictionary } from "./dictionaries";

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
      className="mx-auto mt-3 max-w-xl p-2 lg:max-w-5xl"
    >
      <Header intl={intl} />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
