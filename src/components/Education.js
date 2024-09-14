import { Newsreader, Playfair_Display } from 'next/font/google';

const newsreader = Newsreader({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

const educations = [
  {
    institution: 'Universitas Singaperbangsa Karawang',
    degree: 'Bachelor of Information Systems',
    gpa: '3.88/4.00',
    year: 'Sep 2021 - Present'
  },
  {
    institution: 'Bangkit Academy',
    degree: 'Cloud Computing Cohort',
    gpa: '95/100',
    year: 'Aug 2023 - Jan 2024'
  },
];

const Educations = () => (
  <section id="education" className='mb-4'>
    <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold mb-4`}>Educations</h3>
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
      {educations.map((edu, index) => (
        <div key={index} className='my-4'>
          <h4 className={`${newsreader.className} text-lg font-bold mb-2`}>{edu.institution}</h4>
          <p className={`${newsreader.className} text-base italic font-semibold mb-2`}>{edu.degree}</p>
          <div className="grid grid-cols-2 gap-2">
            <p className={`${newsreader.className} text-base text-justify`}><span className='font-bold'>GPA:</span> {edu.gpa}</p>
            <p className={`${newsreader.className} text-base text-right`}>{edu.year}</p>
          </div>
        </div>
      ))}
    {/* </div> */}
  </section>
);

export default Educations;
