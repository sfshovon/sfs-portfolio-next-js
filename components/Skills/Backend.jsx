import Image from 'next/image';
import ExpressJS from '../../public/assets/skills/Express.png';
import Firebase from '../../public/assets/skills/Firebase.png';
import MongoDB from '../../public/assets/skills/MongoDB.png';
import NodeJS from '../../public/assets/skills/Node.png';
import SQL from '../../public/assets/skills/SQL.png';

const Backend = () => {
  return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Firebase} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Firebase</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={MongoDB} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MongoDB</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={SQL} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>SQL</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={NodeJS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Node.Js</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={ExpressJS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Express.Js</h3>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Backend;