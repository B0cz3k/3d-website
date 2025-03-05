import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Łukasz',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Borak',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '22 years old',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Polish',
    },
  
    {
      id: 5,
      title: 'Address : ',
      description: 'Paproć',
    },
  
    {
      id: 6,
      title: 'Phone : ',
      description: '+48 530 140 203',
    },
  
    {
      id: 7,
      title: 'Email : ',
      description: 'lukasz.borak03@gmail.com',
    },
  
    {
      id: 8,
      title: 'Langages : ',
      description: 'Polish, English (C1)',
    },
];

const Info = () => {
  return (
    <>
    {personalInfo.map(({title, description}, index) => {
        return (
            <li className="info__item" key={index}>
              <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-[16px] max-w-3xl leading-[30px]'
              >
                <span className='text-secondary'>{title}</span>
                <span className='text-white'>{description}</span>
              </motion.p>
            </li>
        )
    })}
    </>
  )
}

export default Info;