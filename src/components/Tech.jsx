import React from "react";
import './style.css'

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.icon}>
          <img src={technology.icon} alt="" className="logo" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
