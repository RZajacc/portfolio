import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Header from "./_components/Header";

export default function Page() {
  return (
    <div id="page-grid-container" className="p-3">
      <Header />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
