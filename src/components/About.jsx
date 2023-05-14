import React from "react";
import { motion } from "framer-motion";

import "./style.css"
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import Info from "./Info.jsx"

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]'
      >
        I'm just a student hoping to start his career. I have some experience with C, C++ 
        and Python, as well as JavaScript. Though there is a lot of progress to be made here :) 
        I have worked with libraries like NumPy, Pandas, PyTorch and TensorFlow. I'm a quick 
        learner and would love to gain some hands-on experience and finally solve real-world problems!
      </motion.p>
      
      <br></br>
      <div className="border"></div>
      <br></br>

      <ul className="info__list grid">
          <Info />
      </ul>
    </>
  );
};

export default SectionWrapper(About, "about");
