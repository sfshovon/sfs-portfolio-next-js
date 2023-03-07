import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import LeftSide from './Contact/LeftSide';
import RightSide from './Contact/RightSide';

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>

        <h2 className='uppercase tracking-widest text-[#262452] mt-8 mb-4'>
          Contact
        </h2>

        <div className='grid lg:grid-cols-5 gap-8'>
          <LeftSide/>
          <RightSide/>
        </div>

        <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
