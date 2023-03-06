
const Education = () => {
  return (
    <div className="max-w-[1240px] mx-auto md:px-0 px-8">
      <h2 className='uppercase tracking-widest text-[#262452] mb-5 mt-5'> Education </h2>
        <ol className="relative border-l border-gray-200">                  
          <li className="mb-10 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <i className="fa-solid fa-user-graduate"></i>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 ">BSc in Computer Science Engineering
            </h3>            
            <p className="mb-2 text-base font-semibold text-gray-500">Department of Electrical and Computer Engineering,North South University</p>
            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-green-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"> CGPA: 3.86 / 4.00</button>      
          </li>
          <li className="mb-10 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <i className="fa-solid fa-user-graduate"></i>
            </span>
            <h3 className="flex items-center text-lg font-semibold text-gray-900 ">Higher Secondary Certificate
            </h3>
            <p className="mb-2 text-base font-semibold text-gray-500">Birshrestha Noor Mohommad Public College</p>
            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-green-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"> GPA: 4.83 / 5.00 </button>     
          </li>
          <li className="mb-10 ml-6">            
            <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white">
              <i className="fa-solid fa-user-graduate"></i>
            </span>
            <h3 className="flex items-center text-lg font-semibold text-gray-900 ">Secondary School Certificate
            </h3>
            <p className="mb-2 text-base font-semibold text-gray-500">Motijheel Model High School and College</p>
            <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-green-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-800 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700"> GPA: 5.00 / 5.00 </button>
          </li>
        </ol>            
    </div>
  );
};

export default Education;