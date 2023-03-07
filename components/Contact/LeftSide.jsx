
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedinIn, FaPaperPlane } from 'react-icons/fa';
import ContactImg from '../../public/assets/contact.png';

const LeftSide = () => {
  return (
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-600 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2 mt-8'>Connect With Me</h2>
              </div>
              <div>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://github.com/fireclint'
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
                <button className='flex justify-center items-center p-4 w-full mt-8 mb-4'>
                  <FaPaperPlane className="mx-1 mr-4 hover:scale-125"></FaPaperPlane>
                  <Link className="lowercase hover:text-cyan-800" href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=sfs.shovon@gmail.com" target="_blank">sfs.shovon@gmail.com</Link>
                </button>
              </div>
            </div>
          </div>
  );
};

export default LeftSide;