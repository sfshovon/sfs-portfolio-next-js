import Image from 'next/image';
import ML from '../../public/assets/skills/ML.png';
import NLP from '../../public/assets/skills/NLP.png';

const AI = () => {
  return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={ML} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Machine Learning</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={NLP} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Natural Language Processing</h3>
                </div>
              </div>
            </div>
          </div>
  );
};

export default AI;