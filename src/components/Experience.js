import { Newsreader, Playfair_Display } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const experiences = [
  {
    jobRole: 'Laboratory Assistant',
    company: 'Laboratorium Komputer Fasilkom UNSIKA',
    year: 'Jan 2024 - Present',
    description: `As a laboratory assistant, I guided students through web programming framework using Laravel and version control with GitHub. My role involved explaining key concepts, demonstrating practical examples, and helping students set up their projects. I also assessed their progress, provided feedback, and helped troubleshoot issues`,
  },
  {
    jobRole: 'Cloud Engineer Freelance',
    company: 'Braincore.id',
    year: 'Dec 2023 - Present',
    description: "In my role as a cloud engineer, I worked extensively with Google Cloud Platform (GCP) to manage and optimize cloud infrastructure. I was responsible for deploying backend services on Cloud Run, configuring Cloud SQL databases, and ensuring secure API access using IAM and Secret Manager. My focus was on scalability, security, and cost-efficiency, leveraging GCP’s suite of tools to meet the project’s needs. I also played a key role in automating the deployment process using Cloud Build, which streamlined operations and enhanced the team’s productivity. This experience deepened my understanding of cloud architecture and resource management.",
  },
  {
    jobRole: 'Application Developer',
    company: 'Metrodata Academy',
    year: 'Feb 2024 - June 2024',
    description: `As a frontend developer, I developed and maintained Metrodata Academy website and its admin panel using React.js, ensuring responsive and intuitive web applications. I collaborated closely with backend developers and quality assurance engineer to create seamless UI/UX experiences. Using React’s component-based architecture, I built dynamic features while maintaining clean, modular code. My work also involved integrating APIs and state management, optimizing performance, and ensuring cross-browser compatibility.`,
  },
];

const Experience = () => (
  <section id="experience" className="mb-2 lg:p-4">
    <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold mb-4`}>Experience</h3>
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex flex-wrap items-start justify-between mb-2">
            <h4 className={`${newsreader.className} text-lg font-bold flex-shrink-0`}>{exp.jobRole}</h4>
            <p className={`${newsreader.className} text-md font-semibold flex-shrink-0`}>{exp.year}</p>
          </div>
          <p className={`${newsreader.className} text-md font-semibold flex-shrink-0`}>{exp.company}</p>
          <p className={`${newsreader.className} text-md text-justify`}>{exp.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
