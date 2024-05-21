import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export default function Page() {
  return (
    <div id="page-grid-container" className="mt-3 p-2">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
