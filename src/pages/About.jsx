import React from "react";
import WomanImg from "../img/about/woman.png";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section
    className="section"
    initial={{opacity:0,y:'100%'}}
    animate={{opacity:1,y:'0'}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
    >
      <div className="container mx-auto h-full relative">
        {/* Text  Y Img wrapper*/}
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          {/* Image */}
          <div className="flex-1 max-h-[500px] lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img src={WomanImg} alt="" />
          </div>
          {/* Text */}
          <motion.div
          className="flex-1 pt-36 pb-6 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          initial={{opacity:0,y:'-80%'}}
          animate={{opacity:1,y:'0'}}
          exit={{opacity:0, y:'-80%'}}
          transition={transition1}
          >
            <h1 className="h1">About me</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus qui modi at unde quibusdam iure.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor dolorem minima dolorum esse adipisci id?
            </p>
            <Link className="btn" to={"/portfolio"}>View my wor</Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
