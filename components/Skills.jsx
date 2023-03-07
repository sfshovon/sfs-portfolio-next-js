import AI from './Skills/AI';
import Backend from './Skills/Backend';
import FrontEnd from './Skills/FrontEnd';
import MSOfiice from './Skills/MSOfiice';
import ProgrammingLanguage from './Skills/ProgrammingLanguage';
import Tools from './Skills/Tools';
import VersionControl from './Skills/VersionControl';


const Skills = () => {
  return (
    <div id='skills' className='w-full p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <h2 className='uppercase tracking-widest text-[#262452] mb-5 mt-20'>
          Skills
        </h2>
        
        <div className='mt-2'>
          <h3 className='uppercase py-4 animate-pulse border text-cyan-800'>Programming Languages</h3>
          <ProgrammingLanguage/>
        </div>

        <div className='mt-8'>
          <h3 className='uppercase py-4 animate-pulse text-cyan-800'>Front-End</h3>
          <FrontEnd/>
        </div>

        <div className='mt-8'>
          <h3 className='uppercase py-4 animate-pulse text-cyan-800'>Backend</h3>
          <Backend/>
        </div>

        <div className='mt-8'>
          <h3 className='uppercase py-4 animate-pulse text-cyan-800'>Artificial Intellegence</h3>
          <AI/>
        </div>

        <div className='mt-8'>
          <h3 className='uppercase py-4 animate-pulse text-cyan-800'>Version Control</h3>
          <VersionControl/>
        </div>

        <div className='mt-8'>
          <h3 className='uppercase py-4 animate-pulse text-cyan-800'>Microsoft Office</h3>
          <MSOfiice/>
        </div>

        <div className='mt-8'>
          <h3 className='uppercase py-4 animate-pulse text-cyan-800'>Tools</h3>
          <Tools/>
        </div>

      </div>
    </div>
  );
};

export default Skills;
