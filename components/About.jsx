import { useState } from 'react';
import Education from './Education';
import Experience from './Experience';

const About = () => {
  const [showEducation, setShowEducation] = useState(true);

  const handleEducationClick = () => {
    setShowEducation(true);
  };

  const handleExperienceClick = () => {
    setShowEducation(false);
  };

  return (
    <div id='about' className='w-full md:pt-32'>
      <h2 className='mt-16 mb-8 md:mt-0 text-center uppercase tracking-widest text-[#262452]'>My Education & Experiences</h2>
      <div className='flex justify-center items-center max-w-[1240px] mx-auto'>

        <div className='w-full'> 
          <button className={"rounded-xl font-bold text-2xl hover:scale-105 ease-in duration-300 w-full p-4 hover:text-gray-800 hover:border-teal-800"}
            onClick={handleEducationClick}
          >
            Education
          </button>
        </div>

        <div className='w-full'>
          <button
            className={"rounded-xl font-bold text-2xl hover:scale-105 ease-in duration-300 w-full p-4 hover:text-gray-600 hover:border-teal-800"}
            onClick={handleExperienceClick}
          >
            Experience
          </button>
        </div>

      </div>

      {
        showEducation ? <Education/> : <Experience/>
      }
      
    </div>
  );
};

export default About;