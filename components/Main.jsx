import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import myImg from '../public/assets/me_2.png';

const Main = () => {
  return (
    <div id='home' className='w-full text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>

       <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='mt-32'>
        <h3 className='tracking-widest text-gray-600 animated-text-top'>
            Welcome to <span className='font-bold'>SFS</span>'s Portfolio
          </h3>
          <h1 className='py-4 text-2xl md:text-4xl text-gray-700 animated-text-left'>
            Hi, I'm <span className='text-cyan-800'> Shahriar Ferdous Shovon </span>
          </h1>
          <h2 className='py-2 text-lg md:text-xl text-gray-700 animated-text-left'>A Computer Science Engineer</h2>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4  animated-text-left'>
            <a
              href='https://github.com/sfshovon'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-cyan-800 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub size={24} />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/shahriar-ferdous-shovon'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-cyan-800 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn size={24} />
              </div>
            </a>
            <a
              href='https://www.facebook.com/shahriarfershovon'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-cyan-800 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook size={24} />
              </div>
            </a> 
            
          </div>
          <div className='flex-col justify-center items-center'>
          <p className='py-2 text-base md:text-lg text-gray-600 text-justify font-semibold animated-text-left'>
            "Drive yourself toward positivity; the outcome will be positive as well," is my personal belief. A CSE graduate who is passionate, hardworking, self-driven, adaptive, and able to work both independently and in a team. Seeking a position where the knowledge obtained will be utilized effectively and advance my professional career.
          </p>
          <Link href='/#about'>
            <button className='mt-2 font-semibold rounded-full shadow-lg shadow-cyan-800 p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-white bg-cyan-700  hover:text-teal-800 animated-text-bottom'>
              More About Me
            </button>
          </Link>
          </div>
        </div>


        <div className='mt-0 md:mt-32 md:ml-20 shadow-lg shadow-cyan-800 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300 bg-blue-100'>
          <Image src={myImg} alt='/'></Image>
        </div>
        
       </div>

      </div>
    </div>
  );
};

export default Main;
