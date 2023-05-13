'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Me = () => {
  return (
    <motion.div
      animate={{ scale: [0.3, 1] }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      whileHover={{
        rotate: [0, 10, 0],
        transition: { duration: 0.4 },
      }}
      whileTap={{
        rotate: [0, 10, 0],
        transition: { duration: 0.4 },
      }}
    >
      <Image
        src='/github.jpeg'
        alt='profile picture'
        width={230}
        height={230}
        className='rounded-full p-0.5 mt-8 md:mt-52 mb-8 shadow-md shadow-gray-500 select-none'
      />
    </motion.div>
  );
};

export default Me;
