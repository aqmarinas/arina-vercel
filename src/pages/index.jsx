import { useMediaQuery } from "react-responsive";
import Container from "../components/layout/Container.jsx";
import { Minus, Square, X } from "lucide-react";
import CTA from "../components/section/CTA.jsx";
import Experiences from "../components/section/Experiences.jsx";
import Projects from "../components/section/Projects.jsx";
import Education from "../components/section/Education.jsx";
import TechStacks from "../components/section/TechStacks.jsx";
import Footer from "../components/section/Footer.jsx";
import AboutMe from "../components/section/AboutMe.jsx";

export default function Home() {
  const isMdOrSmaller = useMediaQuery({ query: "( 767px)" });

  return (
    <Container>
      <AboutMe />
      <TechStacks />
      <Education />
      <Experiences />
      <Projects />
      <CTA />
      <Footer />
    </Container>
  );
}
