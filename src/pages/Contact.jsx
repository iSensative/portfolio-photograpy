import React from 'react';
import WomanImg from '../img/contact/woman.png'
import {motion} from 'framer-motion'
import {transition1} from '../transitions'

const Contact = () => {
  return(
    <motion.section
    initial={{opacity:0,y:'100%'}}
    animate={{opacity:1,y:'0'}}
    exit={{opacity:0, y:'100%'}}
    transition={{transition:transition1, duration:1.5}}
    className='section'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
          {/* Bg */}
          <motion.div
              initial={{opacity:0,y:'100%'}}
              animate={{opacity:1,y:'0'}}
              exit={{opacity:0, y:'100%'}}
              transition={transition1}
          className='hidden lg:flex bg-[#EEF7F9] absolute bottom-10 left-0 right-0 top-72 -z-10'></motion.div>
          {/* Text y form  */}
          <div className='lg:flex-1 lg:pt-32 px-4 lg:mb-24'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you</p>
            <form className='flex flex-col gap-y-4' >
              <div className='flex gap-x-10'>
                <input type="text" placeholder='Your Name' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-400'/>
                <input type="text" placeholder='Your Email Addres ' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-400'/>
              </div>
              <input type="text" placeholder='Your Message' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-gray-400 '/>
              <button className='btn mb-10  mx-auto lg:mx-0 self-start'>Send It</button>
            </form>
          </div>
          {/* Image */}
          <div className='lg:flex-1 flex mb-32'>
            <img src={WomanImg} alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  )
};

export default Contact;
