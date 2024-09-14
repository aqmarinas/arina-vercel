import { Newsreader } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });

const Navbar = () => (
  <nav className={`flex flex-wrap justify-center space-x-4 py-2 border-b border-black`}>
    <a href="#about" className={`${newsreader.className} hover:underline mx-2 my-1`}>
      About
    </a>
    <a href="#education" className={`${newsreader.className} hover:underline mx-2 my-1`}>
      Education
    </a>
    <a href="#experience" className={`${newsreader.className} hover:underline mx-2 my-1`}>
      Experience
    </a>
    <a href="#projects" className={`${newsreader.className} hover:underline mx-2 my-1`}>
      Projects
    </a>
    <a href="#contact" className={`${newsreader.className} hover:underline mx-2 my-1`}>
      Contact
    </a>
  </nav>
);

export default Navbar;
