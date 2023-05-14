import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import './style.css'

import github from '../assets/github.png'
import linkedin from '../assets/linkedin.svg'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Łukasz</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a student at Poznań University of Technology. <br className='sm:block hidden' />
            ...and I'm looking for a job :)
          </p>
        </div>

        <div className="flex flex-row flex-wrap gap-5 z-50">
          <div onClick={() => window.open("https://github.com/B0cz3k", "_blank")}>
              <img src={github} className="w-20" />
          </div>
          <div onClick={() => window.open("https://www.linkedin.com/in/%C5%82ukasz-borak-401541256/")}>
            <img src={linkedin} className="w-20" />
          </div>
        </div>

      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
