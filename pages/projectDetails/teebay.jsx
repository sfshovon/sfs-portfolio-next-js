import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import tb from '../../public/assets/projects/teebay.jpg';

const teebay = () => {
  return (
    <div className='w-full'>
      <Head>
        <title>Project - Teebay</title>
      </Head>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          fill='fill'
          src={tb}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Teebay</h2>
          <h3> PERN </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Project Overview</h2>
          <p className='my-4'>
            This is a product buy-rent platform which allows users to buy and sell items. project using PERN Stack with GraphQL with Apollo Cache and Prisma ORM.. 
          </p>
          <a
            href='https://github.com/sfshovon/teebay-client-side'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold hover:text-gray-800 hover:scale-105'>Front-End Code</button>
          </a>
          <a
            href='https://github.com/sfshovon/teebay-server-side'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold hover:text-gray-800 hover:scale-105'>Backend Code</button>
          </a>
          <a
            href='https://teebay-client-side.vercel.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8 font-bold hover:text-gray-800 hover:scale-105'>Live Demo </button>
          </a>
          <p className="text-center mt-8 px-1 rounded-2xl text-lg font-semibold text-zinc-900 border-2 border-teal-900">Live Demo may not work always as the cloud database is Supabase which gets paused after a week</p>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Node.js
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Express.js
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> PostgresSQL
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> GraphQL
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Apollo
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Prisma
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> Context API
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> React Hook Form
              </p>
              <p className='text-gray-600 py-2 flex items-center font-semibold'>
                <RiRadioButtonFill className='pr-1' /> React Bootstrap
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

export default teebay;
