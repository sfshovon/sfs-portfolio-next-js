import Image from 'next/image';
import Excel from '../../public/assets/skills/Excel.png';
import PowerPoint from '../../public/assets/skills/PowerPoint.png';
import Word from '../../public/assets/skills/Word.png';

const MSOfiice = () => {
  return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Excel} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MS Excel</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Word} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MS Word</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={PowerPoint} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MS PowerPoint</h3>
                </div>
              </div>
            </div>
          </div>
  );
};

export default MSOfiice;