import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import { Newsreader, Playfair_Display } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const Contact = () => (
  <div id="contact">
    <h3 className={`${playfair.className} text-xl font-bold mb-2`}>Contact</h3>
    <div className={`${newsreader.className} space-y-2`}>
      <a href="mailto:aqmarinasha@gmail.com" target="_blank" className="flex items-center">
        <Mail className="w-4 h-4 mr-2" />
        aqmarinasha@gmail.com
      </a>
      <a href="https://github.com/aqmarinas" target="_blank" className="flex items-center">
        <Github className="w-4 h-4 mr-2" />
        @aqmarinas
      </a>
      <a href="https://linkedin.com/in/aqmarinas" target="_blank" className="flex items-center">
        <Linkedin className="w-4 h-4 mr-2" />
        Aqmarina Shabihah
      </a>
      <a href="/docs/cv.pdf" target="_blank" className="flex items-center">
        <FileText className="w-4 h-4 mr-2" />
        Download CV
      </a>
    </div>
  </div>
);

export default Contact;
