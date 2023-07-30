
const Experience = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:px-0 px-8">
      <h2 className='uppercase tracking-widest text-[#262452] mb-5 mt-5'> Experince </h2>
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
          </div>
          <div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0 mb-5"></div>
          <div className="flex-auto text-slate-700">
            <h1 className="text-2xl font-bold">Software Engineer</h1>
            <h1 className="text-lg font-semibold">Qcoom Limited</h1>
            <ul>
              <li>
                <i className="fa-regular fa-circle-check mr-4"></i>Frontend Development
              </li>
            </ul>  
          </div>
          <h2 className="text-2xl text-center text-slate-700 font-semibold hover:text-red-900">July 2023 - Present</h2>
        </div>

        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
          </div>
          <div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0 mb-5"></div>
          <div className="flex-auto text-slate-700">
            <h1 className="text-2xl font-bold">Research Assistant</h1>
            <h1 className="text-lg font-semibold">Department of Mathematics & Physics, North South University</h1>
            <ul>
              <li>
                <i className="fa-regular fa-circle-check mr-4"></i>Worked on Computational Fluid Dynamics (CFD)
              </li>
            </ul>  
          </div>
          <h2 className="text-2xl text-center text-slate-700 font-semibold hover:text-red-900">Feb 2022 - Jun 2022</h2>
        </div>

        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
          </div>
          <div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0"></div>
          <div className="flex-auto text-slate-700">
            <h1 className="text-2xl font-bold ">Undergraduate Teaching Assistant</h1>
            <h1 className="text-lg font-semibold">Department of Mathematics & Physics, North South University</h1>
            <ul>
              <li>
                <i className="fa-regular fa-circle-check mr-4"></i>Assisting teachers by evaluating assignments and providing help to students having trouble learning concepts
              </li>
            </ul>  
          </div>
          <h2 className="text-2xl text-center text-slate-700 font-semibold hover:text-red-900">Jan 2022 - May 2022</h2>
        </div>
      
        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-200 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="w-5 h-5 bg-blue-200 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"> 
          </div> 
          <div div className="w-10 h-1 bg-blue-200 absolute -left-10 z-0"></div>
          <div className="flex-auto text-slate-700">
            <h1 className="text-2xl font-bold">Undergraduate Teaching Assistant</h1>
            <h1 className="text-lg font-semibold">Department of Histpory & Philosophy, North South University</h1>
            <ul>
              <li>
                <i className="fa-regular fa-circle-check mr-4"></i>Assisting faculties in academic activities
              </li>
            </ul>  
            </div>
            <h2 className="text-2xl text-center text-slate-700 font-semibold hover:text-red-900">Oct 2021 - Jan 2022</h2>
          </div>
      </div>
  );
};

export default Experience;