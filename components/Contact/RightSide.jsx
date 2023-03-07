import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RightSide = () => {
  const serviceID = process.env.SERVICE_ID;
  const templateID = process.env.TEMPLATE_ID;
  const userID = process.env.USER_ID;

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(serviceID, templateID, event.target, userID)
      .then((result) => {
        toast("Your Message Has Been Sent", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000, 
          hideProgressBar: false, 
          closeOnClick: true, 
          pauseOnHover: true, 
          draggable: true,
          progress: undefined 
        });
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  

  return (
    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
      <div className='p-4'>
        <form onSubmit={handleSubmit}>
          <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Name</label>
              <input type='text' name='name' className='border-2 rounded-lg p-3 flex border-gray-300 'required/>
            </div>
            <div className='flex flex-col'>
              <label className='uppercase text-sm py-2'>Phone Number</label>
              <input type='text' name='phone' className='border-2 rounded-lg p-3 flex border-gray-300 'required/>
            </div>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Email</label>
            <input type='text' name='email' className='border-2 rounded-lg p-3 flex border-gray-300 ' required/>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Subject</label>
            <input type='text' name='subject' className='border-2 rounded-lg p-3 flex border-gray-300 ' required/>
          </div>
          <div className='flex flex-col py-2'>
            <label className='uppercase text-sm py-2'>Message</label>
            <textarea rows='10' name='message' className='border-2 rounded-lg p-3 border-gray-300'
            required></textarea>
          </div>
          <button className='w-full p-4 text-gray-100 mt-4'>
            Send Message
          </button>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default RightSide;