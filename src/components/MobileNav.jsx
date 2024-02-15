import React, { useState } from 'react';
import {IoMdClose} from 'react-icons/io'
import {CgMenuRight} from 'react-icons/cg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';



const menuVariants = {
  hidden:{
    x:'100%'
  },
  show:{
    x:'0',
    transition:{
      ease:[0.6,0.01,-0.05,0.9]
    }
  }
} 

const MobileNav = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return(
    <nav className='font-primary xl:hidden'>
      {/* Nav open Button */}
      <div onClick={()=>setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <CgMenuRight/>
      </div>
      {/* Menu */}
      <motion.div
      className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs z-20 h-screen'
      variants={menuVariants}
      initial='hidden'
      animate={openMenu?'show':''}
      >
        {/* Icons */}
        <div className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer' onClick={()=>setOpenMenu(false)}>
          <IoMdClose/>
        </div>
        {/* MenuList */}
        <ul className='flex flex-col items-center h-full justify-center gap-y-8 font-bold text-3xl font-primary'>
          <li><Link to={'/home'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/portfolio'}>Portfolio</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </motion.div>
    </nav>
  )
};

export default MobileNav;
