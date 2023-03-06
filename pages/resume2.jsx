import Head from 'next/head';

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <link rel='icon' href='/me.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center font-bold my-4 uppercase'>My Resume</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
          <div>
            <h2 className='uppercase tracking-widest text-[#262452] mb-5 mt-5'> Education </h2>
              <ol className="relative border-l border-gray-200">                  
                <li className="mb-10 ml-6">            
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                    <i className="fa-solid fa-user-graduate"></i>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">BSc in Computer Science Engineering
                  </h3>            
                  <p className="mb-2 text-base font-semibold text-gray-500">Department of Electrical and Computer Engineering,North South University</p>
                  <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-green-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"> CGPA: 3.86 / 4.00</button>      
                </li>
                <li className="mb-10 ml-6">            
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                    <i className="fa-solid fa-user-graduate"></i>
                  </span>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 ">Higher Secondary Certificate
                  </h3>
                  <p className="mb-2 text-base font-semibold text-gray-500">Birshrestha Noor Mohommad Public College</p>
                  <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-green-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"> GPA: 4.83 / 5.00 </button>     
                </li>
                <li className="mb-10 ml-6">            
                  <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
                    <i className="fa-solid fa-user-graduate"></i>
                  </span>
                  <h3 className="flex items-center text-lg font-semibold text-gray-900 ">Secondary School Certificate
                  </h3>
                  <p className="mb-2 text-base font-semibold text-gray-500">Motijheel Model High School and College</p>
                  <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-green-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"> GPA: 5.00 / 5.00 </button>
                </li>
              </ol>            
          </div>

          <div>
            <h2 className='uppercase tracking-widest text-[#262452] mb-5 mt-5'> Experince </h2>
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
                </div>
                <div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0 mb-5"></div>
                <div className="flex-auto text-slate-700">
                  <h1 className="text-xl font-bold">Research Assistant</h1>
                  <h1 className="text-lg font-semibold">Department of Mathematics & Physics, North South University</h1>
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check mr-4"></i>Worked on Computational Fluid Dynamics (CFD)
                    </li>
                  </ul>  
                </div>
                <h2 className="text-center text-slate-700 font-semibold hover:text-red-900">Feb 2022-Jun 2022</h2>
              </div>
        
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
                </div>
                <div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0"></div>
                <div className="flex-auto text-slate-700">
                  <h1 className="text-xl font-bold ">Undergraduate Teaching Assistant</h1>
                  <h1 className="text-lg font-semibold">Department of Mathematics & Physics, North South University</h1>
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check mr-4"></i>Assisting teachers by evaluating assignments and providing help to students having trouble learning concepts
                    </li>
                  </ul>  
                </div>
                <h2 className="text-center text-slate-700 font-semibold hover:text-red-900">Jan 2022 - May 2022</h2>
              </div>
            
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
                </div> 
                <div div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0"></div>
                <div className="flex-auto text-slate-700">
                  <h1 className="text-xl font-bold">Undergraduate Teaching Assistant</h1>
                  <h1 className="text-lg font-semibold">Department of Histpory & Philosophy, North South University</h1>
                  <ul>
                    <li>
                      <i className="fa-regular fa-circle-check mr-4"></i>Assisting faculties in academic activities
                    </li>
                  </ul>  
                  </div>
                  <h2 className="text-center text-slate-700 font-semibold hover:text-red-900">Oct 2021 - Jan 2022</h2>
                </div>
              </div>
          </div>
        </div>
    </>
  );
};

export default resume;
