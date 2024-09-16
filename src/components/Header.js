import { Newsreader, Playfair_Display } from 'next/font/google';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const newsreader = Newsreader({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const Header = () => (
  <header className="grid grid-cols-1 md:grid-cols-3 border-b-4 border-black p-4 items-center gap-4">
    {/* left */}
    <div className="flex justify-end">
      {/* empty */}
    </div>
    {/* center */}
    <div className="text-center">
      <h1 className={`${playfair.className} text-4xl md:text-6xl font-bold`}>
        Tech News
      </h1>
      <p className={`${newsreader.className} text-sm md:text-base mt-2 md:mt-4`}>
        {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </div>
    {/* right */}
    <div className="flex flex-col items-end space-y-2 md:space-y-4">
      <a href="mailto:aqmarinasha@gmail.com" target="_blank" className={`${newsreader.className} hover:underline flex items-center text-sm md:text-base`}>
        <Mail className="w-4 h-4 mr-2" />
        aqmarinasha@gmail.com
      </a>
      <a href="https://github.com/aqmarinas" target="_blank" className={`${newsreader.className} hover:underline flex items-center text-sm md:text-base`}>
        <Github className="w-4 h-4 mr-2" />
        @aqmarinas
      </a>
      <a href="https://linkedin.com/in/aqmarinas" target="_blank" className={`${newsreader.className} hover:underline flex items-center text-sm md:text-base`}>
        <Linkedin className="w-4 h-4 mr-2" />
        Aqmarina Shabihah
      </a>
      {/* <a href="/docs/cv.pdf" target="_blank" className={`${newsreader.className} hover:underline flex items-center text-sm md:text-base`}>
        <FileText className="w-4 h-4 mr-2" />
        Download CV
      </a> */}
    </div>
  </header>
);

export default Header;
