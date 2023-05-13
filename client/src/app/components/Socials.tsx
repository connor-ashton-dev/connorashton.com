'use client';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMessage } from 'react-icons/ai';

export const Socials = () => {
  return (
    <div className='flex flex-row gap-x-6 mb-4 bg-white'>
      <AiFillGithub
        size={35}
        className='hover:text-indigo-500 hover:scale-125'
      />
      <AiFillLinkedin
        size={35}
        className='hover:text-indigo-500 hover:scale-125'
      />
      <AiOutlineMessage
        size={35}
        className='hover:text-indigo-500 hover:scale-125'
      />
    </div>
  );
};
