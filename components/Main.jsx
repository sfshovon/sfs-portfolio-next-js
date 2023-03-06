import { FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <h3 className='tracking-widest text-gray-600 animated-text-top'>
            Welcome to <span className='font-bold'>SFS</span>'s Portfolio
          </h3>
          <h1 className='py-4 text-gray-700 animated-text-left'>
            Hi, I'm <span className='text-cyan-800'> Shahriar Ferdous Shovon </span>
          </h1>
          <h2 className='py-2 text-gray-700 animated-text-right'>A Computer Science Engineer</h2>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4  animated-text-bottom'>
            <a
              href='https://github.com/sfshovon'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-cyan-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/shahriar-ferdous-shovon'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-cyan-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://www.facebook.com/shahriarfershovon'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-cyan-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFacebook />
              </div>
            </a> 
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
