import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import ycd from '../../public/assets/projects/simple-react-js-restaurant.jpg';

const YumCha = () => {
  return (
    <div className='w-full'>
      <Head>
        <title>Project - Yum Cha District</title>
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          fill='fill'
          src={ycd}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Yum Cha District</h2>
          <h3>React JS / TailwindCSS / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Project Overview</h2>
          <p className='my-4'>
            A simple respossive React JS restaurant using React Router, CustomLinks, CustomHooks, TaildwindCSS, DaisyUI, local storage along with Firebase Authetication.
          </p>
          <a
            href='https://github.com/sfshovon/simple-react-js-restaurant'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold hover:text-gray-800 hover:scale-105'>Code</button>
          </a>
          <a
            href='https://simple-react-js-restaurant.netlify.app'
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
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' />  Local Storage
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

export default YumCha;
