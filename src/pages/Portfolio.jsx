import React from "react";
import image1 from "../img/portfolio/1.png";
import image2 from "../img/portfolio/2.png";
import image3 from "../img/portfolio/3.png";
import image4 from "../img/portfolio/4.png";
import image5 from "../img/portfolio/5.png";
import image6 from "../img/portfolio/6.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";


const Portfolio = () => {
  return (
    <motion.section
    className="section"
    initial={{opacity:0,y:'100%'}}
    animate={{opacity:1,y:'0'}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
    >
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* Text */}
          <motion.div
              initial={{opacity:0,y:'-20%'}}
              animate={{opacity:1,y:'0'}}
              exit={{opacity:0, y:'-20%'}}
              transition={transition1}
          className="flex flex-col lg:items-start">
            <h1 className="h1">Portfolio</h1>
            <p className="mb-12 max-w-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus qui modi at unde quibusdam iure.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              dolorem minima dolorum esse adipisci id?
            </p>
            <Link className="btn mb-[30px] mx-auto lg:mx-0" to={'/contact'}>Hire me</Link>
          </motion.div>
          {/* Images GRID */}
          <div className="grid grid-cols-2 gap-2">
            {/* Images */}
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={image1} alt=""  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={image2} alt=""  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={image3} alt=""  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
            <div className="max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img src={image4} alt=""  className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"/>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
