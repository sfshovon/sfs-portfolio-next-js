import Image from 'next/image';
import Balsamiq from '../../public/assets/skills/Balsamiq.png';
import Figma from '../../public/assets/skills/Figma.png';
import Illustrator from '../../public/assets/skills/Illustrator.png';
import Slack from '../../public/assets/skills/Slack.png';
import Trello from '../../public/assets/skills/Trello.png';

const Tools = () => {
  return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Illustrator} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Adobe Illustrator</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Figma} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Figma</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Balsamiq} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Balsamiq</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Trello} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Trello</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Slack} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Slack</h3>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Tools;