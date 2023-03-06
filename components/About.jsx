import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/me_2.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='uppercase tracking-widest text-[#262452] mb-5 mt-16'>
            About
          </h2>

          <p className='py-2 text-gray-600 text-xl text-justify font-semibold'>
          "Drive yourself toward positivity; the outcome will be positive as well," is my personal belief. A CSE graduate who is passionate, hardworking, self-driven, adaptive, and able to work both independently and in a team. Seeking a position where the knowledge obtained will be utilized effectively and advance my professional career.
          </p>
         
          <Link href='/#projects'>
            <button className='mt-4 rounded-full uppercase text-xl px-4 py-2 text-white bg-cyan-700 cursor-pointer font-semibold hover:text-teal-800'>
              Check out my projects
            </button>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-cyan-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 bg-blue-100'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
