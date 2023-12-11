import React from 'react'
import RevealSideScroll from '../AnimationEffect/RevealSideScroll';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MagnetEffect from '../AnimationEffect/MagnetEffect';

const Contact = () => {

  const handleSubmit = () => {
    const name = document.getElementById('floating_full_name').value;
    const company = document.getElementById('floating_company_name').value;
    const subject = document.getElementById('floating_subject_name').value;
    const number = document.getElementById('floating_phone').value;
    const message = document.getElementById('floating_message').value;
    const emailId = "mayurtathe02@gmail.com";

    const mailToLink = `mailto:${emailId}?subject: ${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}%0D%0ACompany: ${company}%0D%0APhone: ${number}%0D%0AMessage: ${message}`)}`;
    console.log('MailToLink: ', { name, company, subject, number, message, emailId });
    window.location.href = mailToLink;
  }

  return (
    <>

      <div className="h-screen flex items-center justify-center">

        <div className=' h-screen md:w-1/2  items-center justify-center flex' style={{ backgroundColor: "#ADC4CE" }}>

          <RevealSideScroll xValue={-100} classname={"md:h-3/5 lg:h-3/5 lg:w-1/2 md:w-3/5 lg:top-0 md:top-0 top-1/3 w-screen h-1/3 z-50 relative"} style={{ backgroundColor: "#016A70" }}>
            <div className="h-full w-full flex flex-col justify-center items-center" style={{ backgroundColor: "#016A70" }}>
              <h2 className='mb-7'>Contact Info</h2>
              <div className="mb-8 text-white ">
                <div className="flex items-center mb-2 space-x-2">
                  <LocationOnOutlinedIcon className='' />
                  <p className='font-semibold text-sm hover:scale-90' >Baner, Pune</p>
                </div>
                <div className="flex items-center mb-2 space-x-2">
                  <EmailOutlinedIcon />
                  <p className='font-semibold text-sm hover:scale-90'>mayurtathe02@gmail.com</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CallOutlinedIcon />
                  <p className='font-semibold text-sm hover:scale-90'>+91 7768852561</p>
                </div>
              </div>
              <div className="flex">
                <a href="https://github.com/MayurTathe" target="_blank" rel="noopener noreferrer" className="mr-4">
                  <MagnetEffect>
                    <GitHubIcon />
                  </MagnetEffect>
                </a>
                <a href="https://www.linkedin.com/in/mayur-tathe-221592276/" target="_blank" rel="noopener noreferrer">
                  <MagnetEffect>
                    <LinkedInIcon />
                  </MagnetEffect>
                </a>
              </div>

            </div>
          </RevealSideScroll>

        </div>

        <div className='h-screen w-1/2' style={{ backgroundColor: "#016A70" }}></div>

        <div className="absolute bg-slate-200 md:w-4/6 w-5/6 z-10 -mt-20 md:mt-0" style={{ height: "70%" }}>
          <div className="h-full bg-white md:w-3/5 w-4/6 float-right text-black p-3 items-center flex-col justify-between overflow-hidden">
            <h2 className='text-center mt-1'>Send a Message</h2>
            <div className="relative z-0 w-full mb-5 sm:mt-7 md:mt-4">
              <input type="text" name="floating_full_name" id="floating_full_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_full_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Full name</label>
            </div>
            <div className="relative z-0 w-full mb-4">
              <input type="text" name="floating_company_name" id="floating_company_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_company_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Company name</label>
            </div>
            <div className="relative z-0 w-full mb-4">
              <input type="text" name="floating_subject_name" id="floating_subject_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_subject_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Subject</label>
            </div>
            <div className="relative z-0 w-full mb-4">
              <input type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Phone number</label>
            </div>
            <div className="relative z-0 w-full h-fit mb-4">
              <textarea name="floating_message" id="floating_message" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
              <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5">Write your message here...</label>
            </div>
            <button type="submit" onSubmit={handleSubmit} onClick={handleSubmit} style={{ backgroundColor: "#016A70" }} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

          </div>
        </div>

      </div>

    </>
  )
}

export default Contact;
