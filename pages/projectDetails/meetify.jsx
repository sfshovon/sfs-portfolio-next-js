import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import meet from '../../public//assets/projects/meetify.jpg';

const Meetify = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={meet}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Meetify</h2>
          <h3>React JS / ChatBot / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Project Overview</h2>
          <p className='my-4'>
            This site is still underconstruction. It's a simple company website with a Chatbot integrated with DialogFlow. Moreover, the main feature is the video calling UI like Zoom..
          </p>
          <a
            href='https://github.com/sfshovon/heyllo-meetify'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold hover:text-gray-800 hover:scale-105'>Code</button>
          </a>
          <a
            href='https://heyllo-meetify.netlify.app'
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
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> DailogFlow
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> DaisyUI
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' />  Firebase
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

export default Meetify;
