import Image from 'next/image';
import Bootstrap from '../../public/assets/skills/Bootstrap.png';
import CSS from '../../public/assets/skills/CSS.png';
import DaisyUI from '../../public/assets/skills/DaisyUI.png';
import GraphQLApllo from '../../public/assets/skills/GraphQL_Apollo.png';
import HTML from '../../public/assets/skills/HTML.png';
import MaterialUI from '../../public/assets/skills/MaterialUI.png';
import NextJS from '../../public/assets/skills/Next.png';
import ReactJS from '../../public/assets/skills/React.png';
import Redux from '../../public/assets/skills/Redux.png';
import TailwindCSS from '../../public/assets/skills/TailwindCSS.png';


const FrontEnd = () => {
  return (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={HTML} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>HTML</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={CSS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>CSS</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Bootstrap} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Bootstrap</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={TailwindCSS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>TailwindCSS</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={DaisyUI} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>DaisyUI</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={MaterialUI} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>MaterialUI</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={ReactJS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>React.Js</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={Redux} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Redux</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={NextJS} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>Next.Js</h3>
                </div>
              </div>
            </div>
            <div className='p-3 md:p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
              <div className='grid grid-cols-2 gap-8 md:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={GraphQLApllo} width='64px' height='64px' alt='/' />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>GraphQL (Apollo)</h3>
                </div>
              </div>
            </div>
          </div>
  );
};

export default FrontEnd;