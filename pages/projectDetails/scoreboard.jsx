import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import sboard from '../../public/assets/projects/redux-with-js-scoreboard.jpg';

const Scoreboard = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={sboard}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Scoreboard App</h2>
          <h3> Redux </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Project Overview</h2>
          <p className='my-4'>
            A basic match scoring app using Redux with JavaScript.
          </p>
          <a
            href='https://github.com/sfshovon/redux-with-js-scoreboard'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold hover:text-gray-800 hover:scale-105'>Code</button>
          </a>
          <a
            href='https://redux-with-js-scoreboard.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold hover:text-gray-800 hover:scale-105'>Live Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
            <button className='px-4 py-2 font-bold hover:text-gray-800 hover:scale-105'>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Scoreboard;
