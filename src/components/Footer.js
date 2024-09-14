import { Newsreader } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });

const Footer = () => (
  <footer className="border-t border-black p-4 text-center">
    <p className={`${newsreader.className} text-sm`}>      
      © 2024 Aqmarina Shabihah. Built with React.js & Next.js.
    </p>
  </footer>
);

export default Footer;
