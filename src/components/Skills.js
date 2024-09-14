import { Newsreader, Playfair_Display } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const Skills = () => (
  <div className="border border-black p-4 mb-4">
    <h3 className={`${playfair.className} text-xl font-bold mb-2`}>Skills Bulletin</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ul className={`${newsreader.className} list-disc pl-4 space-y-2`}>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Redux</li>
        <li>Next.js</li>
        <li>HTML5 & CSS3</li>
        <li>Tailwind CSS & Bootstrap</li>
        <li>Version Control (Git)</li>
        <li>Node.js</li>
      </ul>
      <ul className={`${newsreader.className} list-disc pl-4 space-y-2`}>
        <li>Express.js</li>
        <li>Hapi</li>
        <li>MySQL</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Google Cloud Platform</li>
        <li>Docker</li>
      </ul>
    </div>
  </div>
);

export default Skills;
