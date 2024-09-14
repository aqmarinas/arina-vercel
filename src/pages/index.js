import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Education from '../components/Education';
import Experience from '../components/Experience';
import LargeImage from '../components/LargeImage';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isMdOrSmaller = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <main className="min-h-screen bg-stone-100 p-4 md:p-8">
      <div className="mx-auto bg-white border border-black">
        <Header/>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          <div className="md:col-span-1 lg:pr-4">
            <About />
            {isMdOrSmaller && <LargeImage/>}
            <Education />
            <Skills />
            {/* <Contact /> */}
          </div>
          <div className="md:col-span-2">
            {!isMdOrSmaller && <LargeImage/>}
            <Experience />
            <Projects />
          </div>
        </div>
        <Footer/>
      </div>
    </main>
  );
}
