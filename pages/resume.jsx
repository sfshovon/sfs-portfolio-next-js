import Head from 'next/head';
import Image from 'next/image';
import { FaDownload } from 'react-icons/fa';
import Resume from '../public/assets/resume.jpg';


const resume = () => {
  return (
    <>
      <Head>
        <title>SFS's Resume</title>
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[1240px] mx-auto p-2 pt-[120px]'>
        <div className='flex justify-center items-center gap-4'>
          <h2 className='text-center'>My Resume</h2>
          <a
            href='https://drive.google.com/file/d/10N8ZIrM1YU1_JD_fWDYp4Z2lT0ReckuH/view?usp=share_link'
            target='_blank'
            rel='noreferrer'
          >
            <div className='flex justify-between items-center gap-3 font-semibold bg-sky-800 text-white rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
              Download <FaDownload />
            </div>
          </a>
        </div>
        <div className='mt-4 w-full flex justify-between items-center mb-12'>
          <Image src={Resume} alt='/' />
        </div>
      </div>
    </>
  );
};

export default resume;
