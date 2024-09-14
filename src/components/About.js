import { Newsreader, Playfair_Display } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const About = () => (
  <article id="about">
  <h2 className={`${playfair.className} text-3xl md:text-4xl lg:text-5xl font-bold mb-4 w-full`}>BREAKING NEWS</h2>
    <p className={`${newsreader.className} text-base md:text-lg text-justify`}>
      A new Software Engineer has caught everyone's attention. Known simply as <span className='font-bold'>Aqmarina Shabihah</span> or <span className='font-bold'>Arina</span>, this final-year Information Systems student at Universitas Singaperbangsa Karawang has experience in front-end development and cloud engineering. Arina is adept at creating responsive web applications using React.js and managing cloud resources with Google Cloud Platform (GCP).
    </p>
    <p className={`${newsreader.className} text-base md:text-lg text-justify my-4`}>
      "Creating innovative solutions is my passion," says Arina. "I'm looking for opportunities as a Full Stack Developer to further enhance my skills and contribute to impactful projects."
    </p>
  </article>
);

export default About;
