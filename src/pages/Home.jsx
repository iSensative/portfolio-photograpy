import React from "react";
import WomanImg from "../img/home/woman.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {transition, transition1} from '../transitions'


const Home = () => {
  return (
    <motion.section
    className="section bg-blue-200"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={transition1}
    >
      <div className="container mx-auto h-full relative">
        {/* Text & Img wrapper */}
        <div className="flex flex-col justify-center">
          {/* Text */}
          <motion.div
          className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start"
          initial={{opacity:0,y:'-50%'}}
          animate={{opacity:1,y:'0'}}
          exit={{opacity:0, y:'-50% '}}
          transition={transition1}
          >
            <h1 className="h1">
              Photographer <br /> & film maker
            </h1>
            <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">
              Jujuy, Argentina
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire Me
            </Link>
          </motion.div>
          {/* Image */}
          <div className="flex justify-end max-h-[96px] lg:max-h-max">
            <motion.div
            className=" relative lg:-right-40"
            initial={{scale:0}}
            animate={{scale:1}}
            exit={{scale:0}}
            transition={transition1}
            >
            <motion.img
            src={WomanImg} alt=""
            whileHover={{scale:1.1}}
            transition={transition1}
            />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
