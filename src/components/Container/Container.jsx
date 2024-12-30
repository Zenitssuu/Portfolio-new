import "./Container.css";
import Myself from "../../pages/Myself";
import About from "../../pages/About";
import Experience from "../../pages/Experience";
import Contact from "../../pages/Contact";
import MiddleNavbar from "../MiddleNavbar/MiddleNavbar";
import Projects from "../../pages/Projects";
import Skills from "../../pages/skills/Skills.jsx";
import ToTop from "../BackToTop/ToTop.jsx";
// import Testimonials from "../../pages/Testimonials";

const Container = ({showMiddleNav}) => {
  // const components = [
  //   {name: "myself", reactComp: <Myself />, id: "1" },
  //   {name: "about", reactComp: <About />, id: "2" },
  //   {name: "experience", reactComp: <Experience />, id: "3" },
  //   {name: "skills", reactComp: <Skills />, id: "4" },
  //   {name: "projects", reactComp: <Projects />, id: "5" },
  //   {name: "contact", reactComp: <Contact showMiddleNav={showMiddleNav} />, id: "6"  },
  // ]
  return (
    <div className="container_main">
      <main className="main">
        <Myself />
        <About no={"1"} />
        <Skills no={"2"} />
        <Projects no={"3"} />
        <Experience no={"4"} />
        {/* <Testimonials no={"4"} /> */}
        <Contact showMiddleNav={showMiddleNav} no={"5"} />
        {showMiddleNav ? <MiddleNavbar /> : null}
        <ToTop/>
      </main>
      <div className="bg_light"></div>
    </div>
  );
};

export default Container;
