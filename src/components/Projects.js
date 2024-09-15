import { Newsreader, Playfair_Display } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const projects = [
  {
    title: 'Antuk (API)',
    year: 2023,
    desc: 'Antuk is an sleep detection mobile app designed to enhance driver safety by monitoring drowsiness.',
    repository: 'https://github.com/aqmarinas/antuk',
  },
  {
    title: 'UangIn',
    year: 2023,
    desc: 'Uangin is a personal finance management application designed to help users track their income, expenses, and savings.',
    repository: 'https://github.com/aqmarinas/uangin',
  },
];

const Projects = () => (
  <article id="projects">
    <h2 className={`${playfair.className} text-2xl md:text-3xl font-bold mb-2 lg:mb-4`}>Projects</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
      {projects.map((project, index) => (
        <div key={index} className="flex flex-col">
          <div>
            <h3 className={`${newsreader.className} text-xl font-bold mt-2`}>{project.title}</h3>
            <p className={`${newsreader.className}`}>{project.year}</p>
            <p className={`${newsreader.className} my-2 text-justify`}>{project.desc}</p>
          </div>
          <a 
            href={project.repository} 
            className={`${newsreader.className} hover:underline mt-auto font-bold`}
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Repository
          </a>
        </div>
      ))}
    </div>
  </article>
);

export default Projects;

